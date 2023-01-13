import React from "react";
import { useState } from "react";
import MyExpired from "./MyExpired";
import MyPaid from "./MyPaid";
import MyRadtToShiped from "./MyRadtToShiped";
import MyReceived from "./MyReceived";
import Myshipped from "./Myshipped";
import MyUnPaid from "./MyUnPaid";

export default function Myorders() {
const [pageVal, setPageVal]=useState("UnPaid")
  return (
    <div className=" mx-5 flex space-x-4">
      <div className="w-full">
        <div className="my-[2%] mx-5  flex space-x-4">
        <div
            onClick={()=>{
              setPageVal("UnPaid")
             }}
          >
            All
          </div>
          <div>\</div>
          <div
            className=" focus:text focus:text-orange "
           onClick={()=>{
            setPageVal("Expired")
           }}
          >
            Expired
          </div>
       
          
          <div>\</div>
          <div
           onClick={()=>{
            setPageVal("Paid")
           }}
          >
           To Pay
          </div>
          <div>\</div>
          <div
            onClick={()=>{
              setPageVal("ReadtToShip")
             }}
          >
            To ship
          </div>
          <div>\</div>
          <div
            onClick={()=>{
              setPageVal("Shipped")
             }}
          >
            Shipped
          </div>
          <div>\</div>
          <div
             onClick={()=>{
              setPageVal("Received")
             }}
          >
           To Receive
          </div>
        </div>
        <div>
          <div className="border w-full">{
            pageVal==="Expired"?(<MyExpired/>):(
              pageVal==="UnPaid"?(<MyUnPaid/>):(
                pageVal==="Paid"?(<MyPaid/>):(
                  pageVal==="ReadtToShip"?(<MyRadtToShiped/>):(
                    pageVal==="Received"?(<MyReceived/>):(pageVal==="Shipped"?(<Myshipped/>):(""))
                  )
                )
              )
            )
            }</div>
        </div>
      </div>
    </div>
  );
}
