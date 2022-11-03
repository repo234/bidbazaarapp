import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Search() {
  const [categories, setCategories] = useState();
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

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
          {" "}
          <button
            className="py-2 px-4  rounded-r border-l  bg-black inline-flex items-center focus:outline-none"
            type="button"
            data-dropdown-toggle="dropdown"
            onClick={() => {
              getCategories();
              handleClick();
            }}
          >
            Categories{" "}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            className={
              toggle
                ? "hidden"
                : " bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
            }
          >
            <div className="px-4 py-3">
              <ul className="py-1" aria-labelledby="dropdown">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Earnings
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
        </button>
      </div>
    </div>
  );
}
