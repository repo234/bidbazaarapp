import React from "react";
import img from "../../asserts/party.png"

export default function WiningPage({ visible }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-currentPrice">
      <div className="bg-white justify-center  h-[50%]  w-[50%] rounded-2xl mt-[10%] shadow-lg">
        <div className="justify-center  items-center h-full flex">
          <div className="   w-1/3">
            <img src={img}/>
          </div>
          <div className="h-full shadow-md bg-yellow text-center rounded-2xl pt-[10%] w-2/3">
            <div className="text-4xl font-bold text-green">Congratulations</div>
            <div className="my-4 text-xl">you have some <b>winning </b>products</div>
            <div className="text-xl">Do you want to see now?</div>
            <div className="mt-2 ">
            <button className="p-1 shadow-md mr-6 px-2 m-2">Yes </button>
            <button className="p-1 shadow-md px-3  ">No</button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
