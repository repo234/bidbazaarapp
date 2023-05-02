import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../asserts/Logo.png";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const auth = useSelector(state=> state.user.auth)
  const navigate=useNavigate()
  const [category, setCategory] = useState(false);
  const loggedOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("persist:root");
    window.location.reload();
  };

  return (
    <>
      <header className="header  ">
        <div className=" flex ">
        <div className="   items-center my-1 flex  relative">
              <div className="w-[50px]  md:flex-shrink-0">
                <img src={logo} alt="loding..." />
              </div>
              <div>
                <h1 className=" mr-4 text-2xl  font-bold sm:text-3xl text-orange">
                  BidBazaar
                </h1>
              </div>
            </div>
          <div className="">
          
            <div className="md:hidden navlink   ">
              <div
                className="toggle"
                onClick={() => setMobileMenu(!MobileMenu)}
              >
                {MobileMenu ? (
                  <i className=" fas fa-times close home-btn "></i>
                ) : ( 
                  <i className="fas fa-bars open"></i>
                )}
              </div>
            </div>
            <div className="w-full ">
              <ul
                className={
                  MobileMenu
                    ? " bg-orange w-full  navtext  nav-links-mobile "
                    : "link flex justify-center   items-center capitalize  "
                }
                onClick={() => setMobileMenu(false)}
              >
                {
                  auth?(""):( <><li>
                    <Link to="/">home</Link>
                  </li>
              
                  </>
                  )
                }
              
                <li>
                  <Link to="/auction">auction</Link>
                </li>
                {auth ?(
                  <>
                   <li>
                  <Link to="myAuctions">My Auctions</Link>
                </li>
                <li>
                  <Link to="myBids">My Bids</Link>
                </li>
                 <li>
                  <Link to="/myAllProducts">My products</Link>
                </li>
                <li>
                  <Link to="/addproduct">Add Products</Link>
                </li>
               
                  <li>
                  <Link to="/checkout">payment</Link>
                </li>
                </>
                ) : ("")
}
                <li>
                  <Link to="/contactus">contact us</Link>
                </li>
                <li>
                  <Link to="/aboutus">about us</Link>
                </li>
                {auth ?(
                  <>
                  
                  <li onClick={loggedOut}>
                    <Link to="/">logout</Link>
                  </li>
                     
                  <li>
                    
 

                    <div className="border p-2  rounded-full px-3 bg-orange" onClick={()=>{
navigate("/profile")
window.location.reload()
                    }}> <i class="fa-solid fa-user  "></i></div>
                  </li>
                  </>
                ) : (
                  <div className="flex">
                   
                    <li>
                      <Link to="/login">login</Link>
                    </li>
                    <li>
                      <Link to="/cusSignup">sign up</Link>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
