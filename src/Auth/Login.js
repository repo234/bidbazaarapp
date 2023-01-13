import logo from "../asserts/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.user.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const dispatch = useDispatch();
  const [passwordEye, setPasswordEye] = useState(false);
  const handleEye = () => {
    setPasswordEye(!passwordEye);
  };

  const sendData = (data) => {
    dispatch(login(data));
  };

  if (auth) {
    navigate("/auction");
  }

  return (
    <div>
      <div className="relative flex   flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-pink rounded-md shadow-md lg:max-w-xl">
          <div className="w-[15%] h-[15%]  rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={logo}
            />
          </div>
          <h1 className="text-3xl font-bold text-center text-orange ">
            Log in
          </h1>
          <form className="mt-6" onSubmit={handleSubmit(sendData)}>
            <div className="mb-2">
              <label htmlFor="email" className="block text-lg font-bold ">
                Email
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 shadow-md bg-white border rounded-md  focus:ring-orange  focus:outline-none focus:ring focus:ring-opacity-40"
                name="email"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
            </div>
            <p className="text-orange font-bold">{errors.email?.message}</p>
            <div className="mb-2">
              <label htmlFor="password" className="block text-lg font-bold ">
                Password
              </label>
              <div className="relative">
                <input
                  type={!passwordEye ? "password" : "text"}
                  className="block w-full px-4 shadow-md py-2 mt-2  bg-white border rounded-md focus:ring-orange  focus:outline-none focus:ring focus:ring-opacity-40"
                  name="password"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 8,
                      message: "must be 8 characters",
                    },
                    validate: (value) => {
                      return (
                        [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every(
                          (pattern) => pattern.test(value)
                        ) ||
                        "must include lower, upper, number, and special characters"
                      );
                    },
                  })}
                />
                <div className="text-xl absolute top-1 right-5">
                  {passwordEye ? (
                    <i class="fa-regular fa-eye" onClick={handleEye}></i>
                  ) : (
                    <i class="fa-regular fa-eye-slash" onClick={handleEye}></i>
                  )}
                </div>
              </div>
              <p className="text-orange font-bold">
                {errors.password?.message}
              </p>
            </div>
            <div className="text-base  text-center text-orange font-bold hover:underline">
              {" "}
              <Link to=""> Forget Password?</Link>
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-2 font-bold w-full px-4 py-2 font-bold shadow-md text-white rounded-lg  bg-orange focus:bg-orange focus:ring focus:ring-orange focus:focus:bg-opacity-70">
                Login
              </button>
            </div>
          </form>
          <p className="mt-8 text-lg font-light text-center ">
            {" "}
            Don't have an account?{" "}
            <Link
              to="/cusSignup"
              className="font-medium text-lg text-orange hover:underline focus:bg-orange focus:ring focus:ring-orange focus:focus:bg-opacity-70"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
