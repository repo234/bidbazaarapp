import React from "react";

export default function search() {
  return (
    <div className="py-10 ">
      <div className="md:mx-[25%] rounded border border-gray-200 flex items-center">
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
