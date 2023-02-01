import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteaccount, getUser, resetPassword } from "../../actions";
import axios from "axios";
import { toast } from "react-toastify";
import { Logout } from "heroicons-react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
 
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const id=useSelector(state=> state.user.id)
    const user=useSelector(state=>state.user.user)
 
    useEffect(()=>{
      dispatch(getUser(id))
    
      },[])
  const {
    register,
    handleSubmit,
    formState: { errors },
   
  } = useForm({
    defaultValues:{
name: user.name,
email:user.email,
password:user.password,
province:user.province,
city:user.city,
address:user.address,
mobile:user.mobile
    },
    mode: "onTouched",
  });

 
  const onSubmit = async (data) => {
   
    await axios
        .put(
          "/api/users/update/"+id,

          {
            name: data.name,
            email: data.email,
            password:  user.password,
            province: data.province,
            city: data.city,
            address: data.address,
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
          dispatch(getUser(id))
          toast.info(res.data);
         
        })
        .catch(function (error) {
          alert("Something went wrong");
          console.log(error);
        });
  
  };
  const loggedOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("persist:root");
    navigate("/")
    window.location.reload();
 
  };


  return (
    <div className="mt-5">
      <div className="relative flex bg-white flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-pink rounded-sm shadow-md  lg:max-w-xl my-10 ">
         
          <h1 className="text-3xl font-bold text-center  text-orange ">
         My Profile
          </h1>

          <form className="mt-6" onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-2">
              <label htmlFor="name" className="block text-base text-orange ">
                Name
              </label>
              <input
                type="text"
            
                className="block w-full shadow-sm px-4 py-2 mt-2  bg-white rounded-sm  focus:ring-orange focus:outline-none focus:ring focus:ring-opacity-0"
                {...register("name", { required: "* name is required" })}
              />
            </div>
            <p className="text-orange text-sm">{errors.name?.message}</p>
            <div className="mb-2">
              <label htmlFor="email" className="block text-base text-orange ">
                Email
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 shadow-sm bg-white border rounded-sm  focus:ring-orange  focus:outline-none focus:ring focus:ring-opacity-40"
                name="email"
                {...register("email", {
                  required: "* email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "* invalid email address",
                  },
                })}
              />
            </div>
            <p className="text-orange text-sm">{errors.email?.message}</p>
           
            
            <div className="mb-2">
              <label htmlFor="province" className="block text-base text-orange">
                Provience
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 shadow-sm uppercase bg-white border rounded-sm focus:ring-orange  focus:outline-none focus:ring focus:ring-opacity-40"
                name="province"
                {...register("province", {
                  required: "* province is required",
                })}
              />
            </div>
            <p className="text-orange text-sm">{errors.province?.message}</p>
            <div className="mb-2">
              <label htmlFor="city" className="block  text-base text-orange">
                City
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 uppercase shadow-sm bg-white border rounded-sm focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="city"
                {...register("city", { required: "* city is required" })}
              />
            </div>
            <p className="text-orange text-sm">{errors.city?.message}</p>
            <div className="mb-2">
              <label htmlFor="address" className="block text-base  text-orange">
                Address
              </label>
              <input
                type="text"
                className="block w-full px-4 shadow-sm py-2 mt-2  bg-white border rounded-sm focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="address"
                {...register("address", { required: "* address is required" })}
              />
            </div>
            <p className="text-orange text-sm">{errors.address?.message}</p>

            <div className="mb-2">
              <label htmlFor="mobile" className="block text-base text-orange ">
                Mobile no.
              </label>
              <input
                type="number"
                className="block w-full px-4 py-2 mt-2 shadow-sm bg-white border rounded-sm focus:ring-orange  focus:outline-none focus:ring focus:ring-opacity-40"
                name="mobile"
                {...register("mobile", {
                  required: "* mobile number is required",
                  minLength: {
                    value: 11,
                    message: "* must be 11 digit",
                  },
                  maxLength: {
                    value: 11,
                    message: "* must be 11 digit",
                  },
                })}
              />
            </div>
            <p className="text-orange text-sm">{errors.mobile?.message}</p>
           <div className="my-3 hover:text-orange p-1 shadow-md border" onClick={()=>{
          dispatch(resetPassword(user.email))
           }}>Change Password</div>
       
            <div className="mb-2 flex">
              <div>
              <i class="fa-solid fa-check"></i>
                <label htmlFor="terms">
                  {" "}
                  I agree to{" "}
                  <u>
                    <b>terms and conditions</b>
                  </u>
                </label>
              </div>
            </div>
     
            <div className="mt-8  text-center text-base text-orange">
              <button
                className={
                  " w-[50%]  mr-8 px-3 py-1 font-bold shadow-sm text-white rounded-sm  bg-orange focus:bg-orange focus:ring focus:ring-orange focus:focus:bg-opacity-70"
                }
              >
              Update
              </button>
             
            </div>
          </form>
          <button
                className={
                  " mt-5 w-[50%] ml-[22%] px-3 py-1 font-bold shadow-sm text-white rounded-sm  bg-orange focus:bg-orange focus:ring focus:ring-orange focus:focus:bg-opacity-70"
                }
                onClick={()=>{
                
                dispatch(deleteaccount(id))
                loggedOut ()
               
                }}
              >
              Delete Account
              </button>
        </div>
      </div>
    </div>
  );
}
