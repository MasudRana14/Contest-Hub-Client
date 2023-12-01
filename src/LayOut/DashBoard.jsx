import { NavLink, Outlet } from "react-router-dom";



const DashBoard = () => {

    return (
       <div className="flex">
        {/* Dashboard Side Menu Bar  */}
        <div className="lg:w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
            <li className="font-bold text-base text-white"> <NavLink to="/dashboard/profile">My Profile</NavLink> </li>
            <li className="font-bold text-base text-white"> <NavLink to="/dashboard/addcontest">Add Contest</NavLink> </li>
            <li className="font-bold text-base text-white"> <NavLink to="/">Home</NavLink> </li>
        </ul>
        </div>
        {/* Dashboard content  */}

        <div className="flex-1">
        <Outlet></Outlet>
        </div>

       </div>
    );
};

export default DashBoard;