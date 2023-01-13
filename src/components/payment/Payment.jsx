import React from "react";
import { useState } from "react";
import ToPay from "./ToPay";
import ToRec from "./ToRec";

export default function Payment() {
  const [topay, setTopay]=useState(true)
  return (
    
       <div className="">
        <div className="my-[2%] mx-5  flex space-x-4">
          <div
            className=" focus:text focus:text-orange "
          onClick={()=>{
            setTopay(true)
          }}
          >
           To pay
          </div>
          <div>|</div>
          <div
           onClick={()=>{
            setTopay(false)
          }}
          >
           Received
          </div>
        </div>
      <div>
        {
          topay?(<ToPay/>):(<ToRec/>)
        }
      </div>
      </div>
    
  );
}
