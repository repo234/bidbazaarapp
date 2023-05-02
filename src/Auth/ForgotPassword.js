import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import logo from "../asserts/Logo.png";

export default function ForgotPassword() {
  const { id, token } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onTouched",
  });
  const password = watch("password");
  const [passwordEye, setPasswordEye] = useState(false);
  const [conpasswordEye, setConPasswordEye] = useState(false);
  const userValid = async () => {
    try {
      const res = await axios.get(`/api/users/forgotpassword/${id}/${token}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data.status === 201) {
        console.log("user valid");
      } else {
        toast.info(res.data.message);
      }
    } catch (error) {
      navigate("/error");
    }
  };
  useEffect(() => {
    userValid();
  }, []);
  const handleEye = () => {
    setPasswordEye(!passwordEye);
  };
  const handleConEye = () => {
    setConPasswordEye(!conpasswordEye);
  };
  const sendData = async (data) => {
    const res = await axios.post(
      `/api/users/${id}/${token}`,
      { password: data.password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    try {
      if (res.data.status === 201) {
        toast.info(res.data.message);
      } else if (res.data.status === 401) {
        navigate("/*");
        console.log(res.data);
      } else if (res.data.status === 400) {
        toast.info(res.data.message);
      }
    } catch (error) {
      toast.info("something went wrong");
    }
  };
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
          <h1 className="text-2xl font-bold text-center text-orange ">
            Reset Password
          </h1>
          <form className="mt-6" onSubmit={handleSubmit(sendData)}>
            <div className="mb-2">
              <label htmlFor="password" className="block text-lg font-bold ">
                New Password
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
            <div className=" relative">
              <label
                htmlFor="confirm password"
                className="block text-lg font-bold "
              >
                Confirm Password
              </label>
              <input
                type={!conpasswordEye ? "password" : "text"}
                className="block w-full px-4 py-2 mt-2 shadow-md bg-white border rounded-md focus:ring-orange  focus:outline-none focus:ring focus:ring-opacity-40"
                name="conPass"
                {...register("confirmPassword", {
                  required: "confirm password is required",
                  validate: (value) =>
                    value === password || "The passwords do not match",
                })}
              />
              <div className="text-xl bottom-2 absolute  right-5">
                {conpasswordEye ? (
                  <i class="fa-regular fa-eye" onClick={handleConEye}></i>
                ) : (
                  <i class="fa-regular fa-eye-slash" onClick={handleConEye}></i>
                )}
              </div>
            </div>
            <p className="text-orange font-bold">
              {errors.confirmPassword?.message}
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="w-full px-4 py-2 font-bold  shadow-md text-white rounded-lg  bg-orange focus:bg-orange focus:ring focus:ring-orange focus:focus:bg-opacity-70"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
