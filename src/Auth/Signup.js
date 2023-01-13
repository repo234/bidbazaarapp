import React from "react";
import { useForm } from "react-hook-form";
import logo from "../asserts/Logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function Signup() {
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
  const handleEye = () => {
    setPasswordEye(!passwordEye);
  };

  const onSubmit = async (data) => {
    if (data.length === 0) {
      console.log("empty");
    } else {
      await axios
        .post(
          "/api/users/register",

          {
            name: data.name,
            email: data.email,
            password: data.password,
            province: data.province,
            city: data.city,
            address: data.address,
            postal: data.postal,
            mobile: data.mobile,
            terms: data.terms,
            role: "user",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (res) {
          toast.info(res.data.message);
        })
        .catch(function (error) {
          alert("Something went wrong");
          console.log(error);
        });
    }
  };

  console.log(errors);

  return (
    <div className="mt-5">
      <div className="relative flex bg-white flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-pink rounded-md shadow-md  lg:max-w-xl my-10 ">
          <div className="w-[15%] h-[15%]  rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={logo}
            />
          </div>
          <h1 className="text-3xl font-bold text-center  text-orange ">
            Sign up
          </h1>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label htmlFor="name" className="block text-lg font-bold ">
                Name
              </label>
              <input
                type="text"
                className="block w-full shadow-md px-4 py-2 mt-2  bg-white rounded-md  focus:ring-orange focus:outline-none focus:ring focus:ring-opacity-0"
                {...register("name", { required: "name is required" })}
              />
            </div>
            <p className="text-orange font-bold">{errors.name?.message}</p>
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
            <div className="mb-2">
              <label
                htmlFor="confirm password"
                className="block text-lg font-bold "
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 shadow-md bg-white border rounded-md focus:ring-orange  focus:outline-none focus:ring focus:ring-opacity-40"
                name="conPass"
                {...register("confirmPassword", {
                  required: "confirm password is required",
                  validate: (value) =>
                    value === password || "The passwords do not match",
                })}
              />
            </div>
            <p className="text-orange font-bold">
              {errors.confirmPassword?.message}
            </p>
            <div className="mb-2">
              <label htmlFor="province" className="block text-lg font-bold ">
                Provience
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 shadow-md bg-white border rounded-md focus:ring-orange  focus:outline-none focus:ring focus:ring-opacity-40"
                name="province"
                {...register("province", { required: "province is required" })}
              />
            </div>
            <p className="text-orange font-bold">{errors.province?.message}</p>
            <div className="mb-2">
              <label htmlFor="city" className="block text-lg font-bold ">
                City
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 shadow-md bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="city"
                {...register("city", { required: "city is required" })}
              />
            </div>
            <p className="text-orange font-bold">{errors.city?.message}</p>
            <div className="mb-2">
              <label htmlFor="address" className="block text-lg font-bold ">
                Address
              </label>
              <input
                type="text"
                className="block w-full px-4 shadow-md py-2 mt-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="address"
                {...register("address", { required: "address is required" })}
              />
            </div>
            <p className="text-orange font-bold">{errors.address?.message}</p>
            <div className="mb-2">
              <label htmlFor="name" className="block text-lg font-bold ">
                Postal Code
              </label>
              <input
                type="number"
                className="block w-full px-4 py-2 mt-2 shadow-md bg-white border rounded-md focus:ring-orange  focus:outline-none focus:ring focus:ring-opacity-40"
                name="postal"
                {...register("postal", { required: "postal code is required" })}
              />
            </div>
            <p className="text-orange font-bold">{errors.postal?.message}</p>
            <div className="mb-2">
              <label htmlFor="mobile" className="block text-lg font-bold ">
                Mobile no.
              </label>
              <input
                type="number"
                className="block w-full px-4 py-2 mt-2 shadow-md bg-white border rounded-md focus:ring-orange  focus:outline-none focus:ring focus:ring-opacity-40"
                name="mobile"
                {...register("mobile", {
                  required: "mobile number is required",
                  minLength: {
                    value: 11,
                    message: "must be 11 digit",
                  },
                  maxLength: {
                    value: 11,
                    message: "must be 11 digit",
                  },
                })}
              />
            </div>
            <p className="text-orange font-bold">{errors.mobile?.message}</p>
            <div className="mb-2 flex">
              <div>
                <input
                  type="checkbox"
                  {...register("terms", {
                    required: "Agreement is required",
                  })}
                />
                <label htmlFor="terms">
                  {" "}
                  I agree to <b>terms and conditions</b>
                </label>
              </div>
            </div>
            <div>
              {errors.terms && (
                <span className="text-sm font-bold text-orange">
                  {errors.terms.message}
                </span>
              )}
            </div>
            <div className="mt-8  text-center text-xl  shadow-md">
              <button
                className={
                  " w-full px-4 py-2 font-bold shadow-md text-white rounded-lg  bg-orange focus:bg-orange focus:ring focus:ring-orange focus:focus:bg-opacity-70"
                }
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
