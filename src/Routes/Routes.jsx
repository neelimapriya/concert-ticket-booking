import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../Pages/About";
import MyBookings from "../Pages/MyBookings";
import Login from "../Pages/Login";
import Error from "../ErrorPage/Error";
import Register from "../Pages/Register";
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>,
        
        },
        {
            path:'/booked',
            element:<MyBookings></MyBookings>,
        
        },
        {
            path:'/login',
            element:<Login></Login>,
        
        },
        {
            path:'/register',
            element:<Register></Register>,
        
        },
       
    ]
    },
  ]);

  export default router;