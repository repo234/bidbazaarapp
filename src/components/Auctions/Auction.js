import React from "react";
import "./Auction.css";
import Products from "./Products";
import Data from "../../SliderImages/Data";
export default function Auction() {
  const data = [
    {
      cateName: "Fashion",
    },
    {
      cateName: "Electronic",
    },
    {
      cateName: "Cars",
    },
    {
      cateName: "Home & Garden",
    },
    {
      cateName: "Gifts",
    },
    {
      cateName: "Music",
    },
    {
      cateName: "Health & Beauty",
    },
    {
      cateName: "Pets",
    },
    {
      cateName: "Baby Toys",
    },
    {
      cateName: "Groceries",
    },
    {
      cateName: "Books",
    },
  ];

  const { productItems } = Data;
  return (
    <>
      <section className="home ">
        <div className="bg-pink  mt-[3%] ">
          <div className="flex flex-col mt-10">
            <div className=" flex heading text-[25px]">
              {" "}
              <i className="fa fa-bolt mr-4"></i>
              <h1>Filter</h1>
            </div>

            <div className=" flex product items-center justify-between mt-3">
              <div className="flex flex-col   md:flex-row">
                <p className="mb-3 md:mb-1 text-orange">Categories</p>

                <select className="md:ml-3 border-2 p-2 rounded-lg hover:border-orange">
                  <option selected>Select</option>
                  {data.map((value, index) => {
                    return (
                      <option className="box f_flex" key={index}>
                        {value.cateName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="  flex flex-col  md:flex-row ">
                <p className="mb-3 md:mb-1 text-orange">Price</p>
                <select className=" ml-3 border-2 p-2 rounded-lg hover:border-orange">
                  <option selected>Lower to higher</option>
                  <option>Higher to Lower</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-sky  d_flex">
          <Products producctItems={productItems} />
        </div>
      </section>
    </>
  );
}
