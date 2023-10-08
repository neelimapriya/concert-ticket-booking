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
import Atif from "../ServicesSection/Atif";
import Films from "../ServicesSection/Films";
import Folk from "../ServicesSection/Folk";
import Theater from "../ServicesSection/Theater";
import Rahat from "../ServicesSection/Rahat";
import Tahsan from "../ServicesSection/Tahsan";
import PrivateRoute from "./PrivateRoute";
  

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
        {
            path:'/atif',
            element:<PrivateRoute><Atif></Atif></PrivateRoute>,
            loader:()=>fetch('/Atif.json')
        
        },
        {
            path:'/film',
            element:<PrivateRoute><Films></Films></PrivateRoute>,
            loader:()=>fetch('/Film.json')
        
        },
        {
            path:'/folk',
            element:<PrivateRoute><Folk></Folk></PrivateRoute>,
            loader:()=>fetch('/Folk.json')
        
        },
        {
            path:'/theater',
            element:<PrivateRoute><Theater></Theater></PrivateRoute>,
            loader:()=>fetch('/theater.json')
        
        },
        {
            path:'/rahat',
            element:<PrivateRoute><Rahat></Rahat></PrivateRoute>,
            loader:()=>fetch('/Rahat.json')
        
        },
        {
            path:'/tahsan',
            element:<PrivateRoute><Tahsan></Tahsan></PrivateRoute>,
            loader:()=>fetch('/tahsan.json')
        
        },
        
        
    ]
    },
  ]);

  export default router;