import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrash, FaUser, FaUsers } from "react-icons/fa";

const ManageUser = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleUserDelete = user =>{

    } 

    return (
        <div className="mt-7 w-3/4 mx-auto">
            <div className="flex justify-evenly">
                <h3 className="text-2xl">All Users</h3>
                <h3 className="text-2xl">Total Users {users.length}</h3>
            </div>

            {/* Table  */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td className="font-bold">{user.name}</td>
                                <td className="font-medium">{user.email}</td>
                                <td>
                                    <button>
                                        <FaUsers className="text-2xl text-blue-500"></FaUsers>
                                    </button>
                                </td>
                                <button></button>
                                <td>
                                    <button>
                                        <FaTrash className="text-lg text-red-500"></FaTrash>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUser;