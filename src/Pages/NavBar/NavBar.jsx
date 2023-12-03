import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSignOut = () => {

        logOut()
            .then(res => {
                console.log(res)
                swal("Good job!", "SignOut Successfully", "success")
            })

            .catch(error => {
                swal("Oops..!", `${error.message}`, "error");
            })
        navigate("/login")
    }

    const navMenu = <>


        <NavLink
            to="/"
            className={({ isActive, isPending, }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
            }
        >
            <li className="font-bold">Home</li>
        </NavLink>

        <NavLink
            to="/allcontest"
            className={({ isActive, isPending, }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
            }
        >
            <li className="font-bold">All Contest</li>
        </NavLink>

        <NavLink
            to="/about"
            className={({ isActive, isPending, }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
            }
        >
            <li className="font-bold">About Us</li>
        </NavLink>

        <NavLink
            to="/contact"
            className={({ isActive, isPending, }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
            }
        >
            <li className="font-bold">Contact</li>
        </NavLink>


    </>



    return (
        <div>
            <div className="navbar px-5 h-14 shadow-md rounded-t-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenu}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-12" src="https://i.ibb.co/L6hwkjF/success.png" alt="" />
                        <h3 className="text-xl font-bold">Contest <span className="text-orange-500">Hub</span></h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        {navMenu}
                    </ul>
                </div>
                <div className="navbar-end gap-2">


                    <div>

                        {
                            user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn px-0 py-0 "> <div className="avatar">
                                    <div className="w-9 rounded-full">

                                        <img src={user?.photoURL} />

                                    </div>



                                </div>
                                </label>

                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32 lg:w-40 space-y-1 text-center">

                                    <h2 className="text-base text-center text-blue-600 font-bold">{user?.displayName

                                    }</h2>
                                    <hr />

                                    <NavLink
                                        to="/dashboard"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-orange-600 " : ""
                                        }
                                    >
                                        <p className="font-bold"> Dashboard</p>
                                    </NavLink>

                                    <div onClick={handleSignOut} className="navbar-end mx-auto">
                                        <Link className="font-bold  text-orange-600">SignOut</Link>
                                    </div>

                                </ul>
                            </div>


                                :
                                <div className="navbar-end">
                                    <Link className="font-bold text-white px-2 py-1 rounded-lg hover:bg-cyan-500 bg-orange-500" to="/login">Login</Link>
                                </div>
                        }
                    </div>






                </div>

            </div>
        </div>
    );
};

export default NavBar;