import React from "react";
import { useSelector } from "react-redux";
import Search from "../common/header/Search";

export default function Filter() {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <div>
      {" "}
      <div className="flex  flex-col mt-10">
        <div className=" flex bg-pink  flex-col md:flex-row p-2 items-center shadow-sm justify-between mt-3">
          <div className="w-full">
            <section className="  mx-[2%]">
              <div className="search-box f_flex">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Search and hit enter..." />
                <button className="py-2 px-4 rounded-none border">
                  Search
                </button>
              </div>
            </section>
          </div>

          <div className="flex  w-full">
            <div className="flex flex-col ml-8 md:flex-row">
              <p className="my-3 md:mb-1 font-bold text-orange">Categories</p>
              {categories ? (
                <select className="md:ml-3 border text-sm p-2 rounded-sm hover:border-orange">
                  <option selected>Select</option>

                  {categories.map((value, index) => {
                    return (
                      <option className="box f_flex" key={index}>
                        {value.name}
                      </option>
                    );
                  })}
                </select>
              ) : (
                <div className="bg-sky  border-t-2 border-orange flex">
                  Loding.....
                </div>
              )}
            </div>

            <div className="  flex flex-col md:ml-8 md:flex-row ">
              <p className="my-3 md:mb-1 font-bold text-orange">Price</p>
              <select className=" text-sm ml-3 border p-2 rounded-sm hover:border-orange">
                <option selected>Lower to higher</option>
                <option>Higher to Lower</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
