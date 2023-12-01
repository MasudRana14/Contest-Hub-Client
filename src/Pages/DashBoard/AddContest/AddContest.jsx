import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";




const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddContest = () => {

    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const contestItem = {
                name: data.name,
                type: data.type,
                price: data.price,
                prizeMoney: data.prizeMoney,
                deadline: data.deadline,
                description: data.description,
                instruction: data.instruction,
                image: res.data.data.display_url


            }
            const contestAll = await axiosPublic.post('/contests', contestItem);
            if(contestAll.data.insertedId){
                reset()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} Added SuccessFully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }

    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-4">Add Your Contest</h1>

            <div className="w-3/4 mx-auto ">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Contest Name</span>
                        </div>
                        <input type="text" {...register("name", { required: true })} placeholder="Contest Name" className="input input-bordered w-full " />
                    </label>

                    <div className="lg:flex gap-3">
                        <label className="form-control w-full my-2">
                            <div className="label">
                                <span className="label-text">Contest Type</span>
                            </div>

                            <select defaultValue="default" {...register("type", { required: true, })} className="select select-bordered w-full ">
                                <option disabled value="default">Select Type</option>
                                <option value="business">Business</option>
                                <option value="medical">Medical</option>
                                <option value="article">Article</option>
                                <option value="gaming">Gaming</option>

                            </select>
                        </label>
                        {/* Contest Price  */}
                        <label className="form-control w-full my-2">
                            <div className="label">
                                <span className="label-text">Contest Price</span>
                            </div>
                            <input type="number" {...register("price", { required: true })} placeholder="Contest Price" className="input input-bordered w-full " />
                        </label>


                    </div>

                    <div className="lg:flex gap-3">

                        {/* Prize money*/}
                        <label className="form-control w-full my-2">
                            <div className="label">
                                <span className="label-text">Prize money</span>
                            </div>
                            <input type="number" {...register("prizeMoney", { required: true })} placeholder="Prize money" className="input input-bordered w-full " />
                        </label>
                        {/* Contest Deadline  */}
                        <label className="form-control w-full my-2">
                            <div className="label">
                                <span className="label-text">Contest Deadline</span>
                            </div>
                            <input type="date" {...register("deadline", { required: true })} className="input input-bordered w-full " />
                        </label>
                    </div>


                    <div className="lg:flex my-2 gap-7 justify-center">
                        {/* Contest Description  */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Contest Description</span>

                            </div>
                            <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Contest Description"></textarea>
                        </label>

                        {/* Task Submission text instruction  */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Task Instruction</span>

                            </div>
                            <textarea {...register("instruction", { required: true })} className="textarea textarea-bordered h-24" placeholder="Task Instruction"></textarea>
                        </label>
                    </div>

                    {/* Photo UpLode  */}
                    <div className="form-control w-full mt-2">
                        <input {...register("image", { required: true })} type="file" className="file-input btn-sm font-bold text-orange-600 w-full max-w-xs" />
                    </div>

                    <div className=" text-center">
                        <button className="btn  bg-blue-600 hover:bg-orange-500 text-white">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddContest;