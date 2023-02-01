import Header from "../common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Auction from "./Auctions/Auction";
import Login from "../Auth/Login";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Footer from "../common/Footer";
import ProductDetail from "./Auctions/ProductDetail";
import CusSignup from "../Auth/Signup";
import Policy from "./Policy";
import MyBids from "./Mybids/MyBids";
import Payment from "./payment/Payment";
import Terms from "./Terms";
import AddProduct from "./AddProduct/AddProduct";
import Dashboard from "./Myauctions/Dashboard";
import AllProducts from "./MyProducts/AllProducts";
import ProDetail from "./Myauctions/ProDetail";
import UpdateProduct from "./AddProduct/UpdateProduct";
import InactiveProductDetail from "./MyProducts/InactivePrductDetails";
import Order from "./orders/Order";
import EmailVerify from "../Auth/EmailVerify";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import PasswordReset from "../Auth/PasswordReset";
import ForgotPassword from "../Auth/ForgotPassword";
import Error from "../Auth/Error";
import Profile from "./Profile/Profile";

function Routings() {
  return (
    <Router>
      <ToastContainer position="top-center" />
      <div>
        <Header />

        <Routes>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route
            path="/inacProductDetail"
            element={<InactiveProductDetail />}
          />
          <Route path="/error" element={<Error />} />
          <Route path="/updateProduct/:id" element={<UpdateProduct />} />
          <Route path="/myAllProducts" element={<AllProducts />} />
          <Route path="/auctionProductDetail" element={<ProDetail />} />
          <Route path="/myAuctions" element={<Dashboard />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/myBids" element={<MyBids />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route
            path="/forgotpassword/:id/:token"
            element={<ForgotPassword />}
          />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<Payment />} />
          <Route path="/privacypolicy" element={<Policy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cusSignup" element={<CusSignup />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route
            path="/api/users/:id/verify/:token"
            element={<EmailVerify />}
          />
          <Route path="/productDetail" element={<ProductDetail />} />

          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default Routings;
