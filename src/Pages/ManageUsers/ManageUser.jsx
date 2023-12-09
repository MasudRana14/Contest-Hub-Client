import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrash, FaUserSecret, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUser = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleAddedAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleAddedCreator = user => {
        axiosSecure.put(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${user.name} is an Creator Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }





    const handleUserDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: `${user.name} has been deleted`,
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div className="mt-7 w-3/4 mx-auto bg-blue-100">
            <div className="flex justify-evenly">
                <h3 className="text-2xl">All Users</h3>
                <h3 className="text-2xl">Total Users {users.length}</h3>
            </div>

            {/* Table  */}

            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Creator</th>
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
                                    {user.role === 'admin' ? 'Admin' : <button onClick={() => handleAddedAdmin(user)}>
                                        <FaUsers className="text-2xl text-blue-500"></FaUsers>
                                    </button>}

                                </td>

                                {/* Creator Button  */}
                                <td>

                                    {user.role === 'creator' ? 'Creator' : <button onClick={() => handleAddedCreator(user)}>
                                        <FaUserSecret className="text-2xl text-blue-500"></FaUserSecret>
                                    </button>}


                                </td>

                                <td>
                                    <button onClick={() => handleUserDelete(user)}>
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