import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import img from "../assets/user.png";
import logo from "../assets/star-box.jpg";

const Navbar = () => {
  const { User, SignOut } = useContext(AuthContext);

  const handleLogout = () => {
    SignOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="hover:bg-red-700" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-red-700" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-red-700" to="/booked">
          My Bookings
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-red-700" to="/login">
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar   bg-zinc-950 max-w-full mx-auto">
      <div className="navbar-start md:pl-10">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-outline btn-accent lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img className="w-36 " src={logo} alt="" />
      </div>
      <div className="navbar-center text-white hidden lg:flex">
        <ul className="text-lg menu menu-horizontal  px-1 ">{navLinks}</ul>
      </div>
      <div className="navbar-end sm:grid md:grid-cols-2 ">
        {User ? (
          <>
            <label
              tabIndex={0}
              className="btn btn-outline btn-accent btn-circle avatar"
            >
              <div className="w-10 rounded-full  ">
                <img src={img} />
              </div>
            </label>
            
            <button
              onClick={handleLogout}
              className="btn w-32 bg-gray-100 text-black hover:bg-gray-500"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn bg-red-700 text-white hover:bg-gray-500">
              Sign In
            </button>
          </Link>
        )}
      </div>
      {
        User && <p className="text-red-600 font-semibold">{User.displayName}</p> 
      }
    </div>
  );
};

export default Navbar;
