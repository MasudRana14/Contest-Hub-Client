import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";



const ManageContest = () => {


    const [contest, setContest] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/contests')
            .then(res => {
                setContest(res.data)
            })
    }, [axiosSecure])


    const handleContestDelete =()=>{
        
    }





    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-4">Manage Contest</h1>


            <div className="mt-7 bg-orange-100 w-11/12 mx-auto">
                <div className="overflow-x-auto w-full">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                 #
                                </th>
                                <th>Image</th>
                                <th>Contest Name</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contest.map((item, index)=><tr key={item._id}>
                                    <td>
                                {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </td>
                                    <td>
                                      {item.name}
                                    
                                    </td>
                                   
                                    <td>Purple</td>
                                    <td>
                                    <button onClick={() => handleContestDelete(item)}>
                                        <FaTrash className="text-lg text-red-500"></FaTrash>
                                    </button>
                                    </td>
                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default ManageContest;