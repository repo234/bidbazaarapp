import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Auction from "./Auction";
import Login from "./Login";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Sell from "./Sell";
import Footer from "./Footer";
import Categories from "./Auctions/Ctegories";
import CusSignup from "./Signup";
import Policy from "./Policy";
import Terms from "./Terms";
function Routings() {
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route path="/seller" element={<Sell />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/privacypolicy" element={<Policy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cusSignup" element={<CusSignup />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default Routings;
