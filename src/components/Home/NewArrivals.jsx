import React, { useState } from "react";
import NewArrivalPro from "./NewArrivalPro";
import Data from "../../SliderImages/Data";
import "./style.css";

const NewArrivals = ({ producctItems }) => {
  return (
    <>

      <section className="flash bg-grey">
        <div className=" container ">
          <div className="heading f_flex">
            <div className="flex w-full">
              {" "}
              <i className="fa fa-bolt"></i>
              <h1>New Arrivals</h1>
            </div>
            <div className="text-right text-orange underline  hover:cursor-pointer hover:hover:underline-offset-4 mx-4 pr-4  w-[10%]">See all</div>
          </div>
          <NewArrivalPro producctItems={producctItems} />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
