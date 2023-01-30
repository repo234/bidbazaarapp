import React from "react";
import { useSelector } from "react-redux";
import InactiveProduct from "./InactiveProduct";

export default function InactiveProducts({products}) {
  
  return (
    <section >
      {
        products?(
          <div className=" heading bg-sky">
          <div className=" w-full">
            <div className="container text-[25px] flex  flex-wrap">
              {products.map((product) => {
                return <InactiveProduct product={product} />;
              })}
            </div>
          </div>
          </div>
        ):("")
      }
     
  
    </section>
  );
}