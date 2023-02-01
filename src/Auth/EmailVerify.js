import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import success from "../asserts/success.png";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();
  const navigate = useNavigate();
  const verifyEmailUrl = async () => {
    try {
      const url = `/api/users/${param.id}/verify/${param.token}`;
      const { data } = await axios.get(url);
      console.log(data);
      setValidUrl(true);
    } catch (error) {
      console.log(error);
      setValidUrl(false);
    }
  };
  useEffect(() => {
    verifyEmailUrl();
  }, []);
  const removetoken = async () => {
    try {
      const url = `/api/users/removetoken/${param.token}`;
      const { data } = await axios.put(url);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      {validUrl ? (
        <div className="p-[5%] container">
          <div className=" mt-[5%] ml-[25%] md:ml-[40%]">
            <img src={success} alt="success_img" className="" />
            <h1 className="text-base ml-1 mt-5 ">
              Email verified successfully
            </h1>
            <Link to="/login">
              <button
                onClick={() => {
                  removetoken();
                  navigate("/login");
                }}
                className="ml-[33%] mt-5 p-1 px-3 md:ml-[13%] text-base"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      ) : (
        navigate("/error")
      )}
    </section>
  );
};

export default EmailVerify;
