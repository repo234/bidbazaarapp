import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [categories, setCategories] = useState();
  const getCategories = () => {
    axios
      .get("/api/categories/getAll", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then(function (res) {
        setCategories(res.data);
        console.log(categories);
      })
      .catch(function (error) {
        console.log(error);
        alert("Something went wrong");
      });
  };
  return (
    <div className="py-10 ">
      <div className="md:mx-[25%] rounded border border-gray-200 flex items-center ">
        <div>
          <button
            className=" py-2 px-3  rounded-r border-l   inline-flex items-center "
            onClick={getCategories}
          >
            Categories
          </button>
          <div></div>
        </div>
        <button className=" py-2 px-2 rounded-none inline-flex items-center">
          Sort
        </button>
        <input
          type="text"
          placeholder="enter name...."
          className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
        />
        <button className="py-2 px-4  text-gray-600 rounded-l border-r border-gray-200  active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none">
          Search
        </button>{" "}
      </div>
    </div>
  );
}
