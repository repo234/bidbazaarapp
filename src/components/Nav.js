import React, { useState } from "react";
import { MenuOutline, XCircleOutline } from "heroicons-react";
import logo from "../asserts/Logo.png";
import { Link } from "react-router-dom";

const App = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const loggedOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };

  return (
    <div className=" drop-shadow-lg ">
      <div className=" items-center flex bg-orange h-full w-full relative">
        <div className="w-[50px] md:flex-shrink-0">
          <img src={logo} alt="loding..." />
        </div>
        <div>
          <h1 className=" mr-4 text-3xl font-bold sm:text-4xl text-yellow">
            BidBazaar
          </h1>
        </div>
        <div className="ml-4 ">
          <ul className="hidden md:flex ">
            <li className=" ">
              <Link to="/">Home</Link>
            </li>

            <li className="">
              <Link to="/auction">Auction</Link>
            </li>
            <li className="">
              <Link to="/seller">Sell</Link>
            </li>
            <li className="">
              <Link to="/contactus">Contactus</Link>
            </li>
            <li className="">
              <Link to="/aboutus">Aboutus</Link>
            </li>
          </ul>
        </div>
        <div>
          {isLoggedIn() ? (
            <div className=" h-12 hidden absolute  top-1 md:flex  ">
              <button
                className=" mr-5 md:px-3 md:py-1 self-center px-10 py-1 "
                onClick={loggedOut}
              >
                {" "}
                <Link to="/">Logout</Link>
              </button>
            </div>
          ) : (
            <div className=" h-12 hidden absolute  top-1 md:flex  ">
              <button className=" mr-5 md:px-3 md:py-1 self-center px-10 py-1 ">
                {" "}
                <Link to="/login">Login</Link>
              </button>
              <button className="   md:px-3 md:py-1 self-center px-10 py-1 ">
                {" "}
                <Link to="/cusSignup">Sign up</Link>
              </button>
            </div>
          )}
        </div>
        <div className="md:hidden w-full  relative" onClick={handleClick}>
          {!nav ? (
            <MenuOutline className="w-5 object-right absolute right-5 " />
          ) : (
            <XCircleOutline className="w-5 object-right absolute right-5" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-orange w-full px-8 font-bold text-xl  "
        }
      >
        <li className="border-b-2 border-yellow  w-full">
          <Link to="/">Home</Link>
        </li>
        <li className="border-b-2 border-yellow w-full">
          <Link to="/auction">Auction</Link>
        </li>
        <li className="border-b-2 border-yellow w-full">
          <Link to="/contactus">Contactus</Link>
        </li>
        <li className="border-b-2 border-yellow w-full">
          <Link to="/aboutus">Aboutus</Link>
        </li>
        {isLoggedIn() ? (
          <div className="flex flex-col m-6">
            <button className="mb-4 p-0 mx-[30%]" onClick={loggedOut}>
              <Link to="/login">Log out</Link>
            </button>
          </div>
        ) : (
          <div className="flex flex-col m-6">
            <button className="mb-4 p-0 mx-[30%]">
              <Link to="/login">Login</Link>
            </button>
            <button className=" p-0 mx-[30%]">
              <Link to="/cusSignup">Sign up</Link>
            </button>
          </div>
        )}
      </ul>
    </div>
  );
};

export default App;
