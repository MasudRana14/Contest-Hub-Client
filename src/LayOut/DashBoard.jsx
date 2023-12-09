import { FaHome, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";



const DashBoard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div>


            <div className="flex">

                {/* Dashboard Side Menu Bar  */}
                <div className=" w-32 lg:w-64 min-h-screen bg-slate-200 ">

                    {/* Title  */}
                    <div>
                        <h1 className="lg:text-xl text-center mt-3  font-bold text-blue-600">Contest Hub Platform</h1>
                        <div className="divider"></div>
                    </div>

                    <ul className="menu lg:p-4">


                        {
                            isAdmin ? <>
                                <li className="lg:font-bold lg:text-base">
                                    <NavLink to="/dashboard/manageUser">Manage User</NavLink>
                                </li>

                                <li className="lg:font-bold lg:text-base ">
                                    <NavLink to="/dashboard/addcontest">Add Contest</NavLink>
                                </li>
                                <li className="lg:font-bold lg:text-base">
                                    <NavLink to="/dashboard/manageContest">Manage Contest</NavLink>
                                </li>
                                <li className="lg:font-bold lg:text-base">
                                    <NavLink to="/dashboard/createContest">My Created Contest</NavLink>
                                </li>
                                <li className="lg:font-bold lg:text-base">
                                    <NavLink to="/dashboard/submitted">Submitted Contest</NavLink>
                                </li>

                                <div className="divider">OR</div>

                                <li className="lg:font-bold lg:text-base mx-auto">
                                    <NavLink to="/"><FaHome></FaHome> Home</NavLink>
                                </li>
                            </>
                                :
                                <>

                                    <li className="lg:font-bold lg:text-base ">

                                        <NavLink to="/dashboard/profile"><FaUser></FaUser>My Profile</NavLink>
                                    </li>


                                    <li className="lg:font-bold lg:text-base">
                                        <NavLink to="/dashboard/participated">My Participated Contest</NavLink>
                                    </li>

                                    <li className="lg:font-bold lg:text-base">
                                        <NavLink to="/dashboard/winning">My Winning Contest</NavLink>
                                    </li>


                                    <div className="divider">OR</div>


                                    <li className="lg:font-bold lg:text-base mx-auto">
                                        <NavLink to="/"><FaHome></FaHome> Home</NavLink>
                                    </li>
                                </>
                        }



                    </ul>
                </div>
                {/* Dashboard content  */}

                <div className="flex-1">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default DashBoard;