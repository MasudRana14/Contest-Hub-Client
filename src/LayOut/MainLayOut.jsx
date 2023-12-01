import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/NavBar/NavBar";
import Footer from "../Pages/Footer/Footer";


const MainLayOut = () => {

    const location = useLocation();
    const hideNavFooter = location.pathname.includes('login') || location.pathname.includes('signup')


    return (
        <div>
           {hideNavFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {hideNavFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayOut;