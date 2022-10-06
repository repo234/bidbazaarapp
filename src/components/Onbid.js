import React from "react";
import Search from "./search";
import bidbg from "../asserts/bidbg.jpeg";
import Products from "./Products";

export default function Onbid() {
  return (
    <div>
      <div>
        <div className="relative">
          <img
            className="object-cover w-full h-60 sm:h-96"
            src={bidbg}
            alt=""
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
        </div>
      </div>
      <div>
        <Search />
      </div>
      <div className="border-4">
        <Products />
      </div>
    </div>
  );
}
