import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { resetPassword } from "../actions";
import logo from "../asserts/Logo.png";
export default function PasswordReset() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const sendData = (data) => {
    console.log(data.email);
    dispatch(resetPassword(data.email));
  };
  return (
    <div className="">
      <div className="relative  top-0 flex   flex-col justify-center min-h-screen overflow-hidden ">
        <div className=" w-full p-6 m-auto bg-pink rounded-md shadow-md lg:max-w-xl">
          <div className="w-[15%] h-[15%]  rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={logo}
            />
          </div>
          <h1 className="text-3xl font-bold text-center text-orange ">
            Enter Your Email
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

            <div className="mt-6">
              <button className="w-full px-4 py-2 font-bold  shadow-md text-white rounded-lg  bg-orange focus:bg-orange focus:ring focus:ring-orange focus:focus:bg-opacity-70">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
