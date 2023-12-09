import {
  createBrowserRouter
} from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllContest from "../Pages/AllContest/AllContest";
import DashBoard from "../LayOut/DashBoard";
import MyProfile from "../Pages/DashBoard/MyProfile/MyProfile";
import AddContest from "../Pages/DashBoard/AddContest/AddContest";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import ManageUser from "../Pages/ManageUsers/ManageUser";
import PrivateRoute from "./PrivateRoute";
import ContestDetails from "../Pages/AllContest/ContestDetails";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ManageContest from "../Pages/DashBoard/ManageContest/ManageContest";
import CreateContest from "../Pages/DashBoard/CreateContest/CreateContest";
import SubmittedContest from "../Pages/DashBoard/SubmittedContest/SubmittedContest";
import ParticipateContest from "../Pages/DashBoard/ParticipateContest/ParticipateContest";
import WinningContest from "../Pages/DashBoard/WinningContest/WinningContest";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allcontest",
        element: <AllContest></AllContest>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/details/:id",
        element: <ContestDetails></ContestDetails>,
        loader: ({ params }) => fetch(`https://contest-hub-server-black.vercel.app/contests/${params.id}`)
      }
    ]
  },


  // DashBoard Routes 
  {
    path: "/dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [

      // Admin Related 
      {
        path: "addcontest",
        element: <AddContest></AddContest>
      },
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>
      },
      {
        path: "manageContest",
        element: <ManageContest></ManageContest>
      },
      {
        path: "createContest",
        element: <CreateContest></CreateContest>
      },
      {
        path: "submitted",
        element: <SubmittedContest></SubmittedContest>
      },
      // User Related 
      {
        path: "profile",
        element: <MyProfile></MyProfile>
      },
      {
        path:"participated",
        element:<ParticipateContest></ParticipateContest>
      },
      {
        path:"winning",
        element:<WinningContest></WinningContest>
      }
  
    ]
  }
]);