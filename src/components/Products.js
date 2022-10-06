import React from "react";
import Filter from "./Filter";

export default function Products() {
  return (
    <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start mx-10">
      <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden ">
        <Filter />
      </div>
      <div className="col-span-3 bg-white px-4 pb-6 shadow rounded overflow-hidden"></div>
    </div>
  );
}
