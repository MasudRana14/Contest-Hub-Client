import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import GoogleLogin from "../../Component/SocialLogin/GoogleLogin/GoogleLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic"



const SignUp = () => {

 const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // User entry in the database 
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            role: "user"
                        }
                        axiosPublic.post('/users', userInfo)
                        .then(res =>{
                            if(res.data.insertedId){
                                reset();
                                swal("Good job!", "Register SuccessFully", "success");
                                navigate('/')
                            }
                        })
                       
                    })

                    .catch(error => {
                        swal("Oops..!", `${error.message}`, "error");
                    })
            })

            .catch(error=>{
                swal("Oops..!", `${error.message}`, "error");
            })

    }

    return (
        <>
            <Helmet>
                <title>Contest Hub || SignUp</title>
            </Helmet>


            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="w-[700px] mx-auto ">

                        <img src="https://i.ibb.co/GcdbjWp/signup.png" alt="" />

                    </div>

                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="text-center p-2">
                            <h2 className="text-2xl font-bold">CREATE ACCOUNT</h2>
                            <p className="font-semibold">Sign Up to Contest Hub</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">YOUR NAME</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} placeholder="Enter Your Name" className="input input-bordered" />

                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">EMAIL ADDRESS</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PHOTO URL</span>
                                </label>
                                <input type="url" {...register("photoURL", { required: true })} placeholder="PHOTO URL" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PASSWORD</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6 })} placeholder="Enter Your Password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>)}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be 6 characters</p>)}
                            </div>

                            <div className="form-control mt-6">
                                <input className=" p-1 rounded-md font-bold text-white hover:cursor-pointer hover:bg-blue-500 bg-orange-600" type="submit" value="Sign Up" />
                            </div>

                            <div className="divider">OR</div>
                        </form>

                        <div className=" mx-auto -mt-8 mb-8">
                            <GoogleLogin></GoogleLogin>
                        </div>
                       
                        <div className=" mx-auto -mt-6 mb-3">
                        <p>HAVE AN ACCOUNT? <Link to="/login"><span className="text-blue-500 font-bold">LOGIN</span></Link></p>
                        </div>
                       
                    </div>

                </div>
            </div>

        </>
    );
};

export default SignUp;