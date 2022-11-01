import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../asserts/bg1.jpg";

import signup from "../asserts/signup.jpg";
import bid from "../asserts/bid.jpg";
import win from "../asserts/win.jpg";

export default function Home() {
  return (
    <div className="  w-full  bg-grey flex flex-col justify-between">
      <div className="grid md:grid-cols-2  m-auto border-b-4 border-orange ">
        <div className="flex flex-col justify-center md:items-start lg:px-20 px-2 py-8">
          <h1 className="px-[20%] pt-8 font-bold  md:py-10 py-7 text-4xl ">
            Your Online Bid Store
          </h1>
          <p className="text-2xl font-semibold px-20 md:px-30">
            One market palce where you can bid and win your favourite products
            (used products) in your desired price
          </p>
          <button className="mt-8 mx-[30%] md:px-3 md:py-2 self-center px-10 py-1">
            <Link to="/cusSignup">Sign up</Link>
          </button>
        </div>
        <div className="bg-grey ">
          <img
            src={bg1}
            alt="Loding..."
            className=" object-fill w-full h-full md:py-20"
          ></img>
        </div>
      </div>
      <div className=" bg-white  ">
        <div>
          <h2 className="md:text-3xl text-xl py-5 font-semibold">
            Get your favourite product in three simple steps
          </h2>
        </div>
        <div>
          <section className="text-gray-600 body-font ">
            <div className="container px-5 pt-20 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4  md:w-1/3">
                  <div className="h-full  overflow-hidden">
                    <img
                      className="lg:h-80 md:h-36 w-full object-cover object-center"
                      src={signup}
                      alt="Loding..."
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-2xl text-orange title-font font-bold text-gray-400 mb-1">
                        1: Sign up
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full  overflow-hidden">
                    <img
                      className="lg:h-80 md:h-36 w-full object-cover object-center"
                      src={bid}
                      alt="Loding...."
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-2xl text-orange title-font font-bold text-gray-400 mb-1">
                        2: Bid
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full overflow-hidden">
                    <img
                      className="lg:h-80 md:h-36 w-full object-cover object-center"
                      src={win}
                      alt="Loding..."
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-orange text-2xl title-font font-bold text-gray-400 mb-1">
                        3: Win
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <h2 className="md:text-3xl text-xl py-10 font-semibold">
            So what are you waiting for?
          </h2>
        </div>
        <button className="mb-7 md:px-3 md:py-2 self-center px-10 py-1">
          <Link to="/cusSignup">Sign up</Link>
        </button>
      </div>
      <div className="border-4"></div>
    </div>
  );
}
