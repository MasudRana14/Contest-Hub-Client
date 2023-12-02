import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const GoogleLogin = () => {

    const { googleSingIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {
        googleSingIn()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: 'user'
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res);
                        swal("Good job!", "Google Login Successfully", "success");
                        navigate('/')
                    })

            })

    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn bg-blue-500 hover:bg-orange-500 text-white px-8 btn-sm text-xl"><FaGoogle></FaGoogle></button>

        </div>
    );
};

export default GoogleLogin;