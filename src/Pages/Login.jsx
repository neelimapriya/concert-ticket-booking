import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {

    const {signIn}=useContext(AuthContext);
    const navigate =useNavigate();
    const location =useLocation();
    console.log('location', location)

  const handleSignIn = (e) => {
    e.preventDefault();
    const form =new FormData(e.currentTarget);
    const email=form.get('email');
    const password =form.get('password')
    console.log(email,password)



    signIn(email, password)
    .then(result=>{
        console.log(result.user)
        e.target.reset()

        // navigate to private route
    navigate(location?.state ? location.state : '/')
    })
    .catch(error=>{
        console.error(error)
    })
    

  };



  return (
    <div className="md:mb-64 text-white ">
      <h2 className="text-4xl mt-10 text-center">Please SignIn</h2>
      <form onSubmit={handleSignIn} className=" mx-auto md:w-3/4 lg:w-1/2">
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text text-2xl">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered border-red-600"
            name="email"
            required
          />
        </div>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text text-2xl">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered border-red-600"
            name="password"
            required
          />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-600 text-white">Sign In</button>
        </div>
      </form>
      <p className="text-center mt-4">
        Do not have an account ?
        <Link className="text-red-600 font-bold" to="/register">
          
          Please Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
