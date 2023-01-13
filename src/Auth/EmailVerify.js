import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../asserts/success.png";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();
  console.log(param);
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

  return (
    <section>
      {validUrl ? (
        <div className="">
          <img src={success} alt="success_img" className="" />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button className="">Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </section>
  );
};

export default EmailVerify;
