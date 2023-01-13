import React from 'react'
import { useState } from 'react';
import RecExp from './RecExp';
import RecPaid from './RecPaid';
import RecReadyToShip from './RecReadyToShip';
import RecReceived from './RecReceived';
import RecUnPaid from './RecUnPaid';

export default function ReceivedOrders() { 
  const [pageVal, setPageVal]=useState("Expired")
  return (
    <div className=" mx-5 flex space-x-4">
      <div className="w-full">
        <div className="my-[2%] mx-5  flex space-x-4">
        <div
            onClick={()=>{
              setPageVal("UnPaid")
             }}
          >
            Un Paid
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
            Paid
          </div>
          <div>\</div>
          <div
            onClick={()=>{
              setPageVal("ReadtToShip")
             }}
          >
            Ready to ship
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
           Received
          </div>
        </div>
        <div>
          <div className="border w-full">{
            pageVal==="Expired"?(<RecExp/>):(
              pageVal==="UnPaid"?(<RecUnPaid/>):(
                pageVal==="Paid"?(<RecPaid/>):(
                  pageVal==="ReadtToShip"?(<RecReadyToShip/>):(
                    pageVal==="Received"?(<RecReceived/>):("")
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
