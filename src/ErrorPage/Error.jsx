import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center items-center justify-center  mt-20">
            <h2 className="text-5xl font-bold text-red-600">404</h2>
            <h3 className="text-3xl font-semibold">Not Found</h3>
            <Link to='/'><button className="btn btn-ghost text-white bg-red-600 mt-8">Home</button></Link>
        </div>
    );
};

export default Error;