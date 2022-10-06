import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Onbid from "./Onbid";
import Login from "./Login";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Sell from "./Sell";
import Footer from "./Footer";
import CusSignup from "../components/buyer_app/Signup";
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
          <Route path="/onbid" element={<Onbid />} />
          <Route path="/privacypolicy" element={<Policy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cusSignup" element={<CusSignup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default Routings;
