import React from "react";
import { useSelector } from "react-redux";

export default function Filter() {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <div>
      {" "}
      <div className="flex flex-col mt-10">
        <div className=" flex product  items-center shadow-2xl justify-between mt-3">
          <div className="flex flex-col  md:flex-row">
            <p className="mb-3 md:mb-1 text-orange">Categories</p>
            {categories ? (
              <select className="md:ml-3 border-2 p-2 rounded-lg hover:border-orange">
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
  );
}
