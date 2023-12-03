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




 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/allcontest",
          element:<AllContest></AllContest>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
          path:"/details/:id",
          element:<ContestDetails></ContestDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/contests/${params.id}`)
        }
      ]
    },
    

    // DashBoard Routes 
    {
      path:"/dashboard",
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path:"profile",
          element:<MyProfile></MyProfile>
        },
        {
          path:"addcontest",
          element:<AddContest></AddContest>
        },
        {
          path:"manageUser",
          element:<ManageUser></ManageUser>
        },
       
      ]
    }
  ]);