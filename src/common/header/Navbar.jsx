import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const auth = useSelector(state=> state.user.auth)
  
  const [category, setCategory] = useState(false);
  const loggedOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("persist:root");
    window.location.reload();
  };

  return (
    <>
      <header className="header">
        <div className="container  ">
          <div className="navlink">
            <div className="md:hidden navlink  ">
              <div
                className="toggle"
                onClick={() => setMobileMenu(!MobileMenu)}
              >
                {MobileMenu ? (
                  <i className=" fas fa-times close home-btn"></i>
                ) : (
                  <i className="fas fa-bars open"></i>
                )}
              </div>
            </div>
            <div className="w-full ">
              <ul
                className={
                  MobileMenu
                    ? " bg-orange  navtext nav-links-mobile "
                    : "link flex justify-center items-center capitalize  "
                }
                onClick={() => setMobileMenu(false)}
              >
                {
                  auth?(""):( <li>
                    <Link to="/">home</Link>
                  </li>)
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
                  <Link to="/order">orders</Link>
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
