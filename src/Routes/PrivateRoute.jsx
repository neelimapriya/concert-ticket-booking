import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {User , loading}=useContext(AuthContext)
    const location=useLocation()
    console.log(location.pathname)

    if(loading){
        return <div className=" text-center items-center justify-center mt-72 mb-32 space-x-3"><span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span></div>
    }

    if(User){
        return children;
    }

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;