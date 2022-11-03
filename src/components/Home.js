import React from "react";
import { Link } from "react-router-dom";

import signup from "../asserts/signup.jpg";
import bid from "../asserts/bid.jpg";
import win from "../asserts/win.jpg";

export default function Home() {
  return (
    <div>
      <div class="">
        <section class="relative  flex justify-center bg-hero-img bg-cover   bg-center bg-no-repeat">
          <div class="absolute bg-gradient-to-r from-grey sm:form-grey sm:bg-gradient-to-r  "></div>
          <div class="relative py-40  sm:px-6 md:flex md:items-center ">
            <div class="   text-center sm:text-left">
              <h1 class="  font-extrabold text-5xl">
                <strong class="  block font-extrabold text-rose-700">
                  Your Online Bid Store
                </strong>
              </h1>

              <p class="  mt-4 max-w-lg text-center p-5 font-bold text-2xl sm:leading-relaxed">
                One market palce where you can bid and win your favourite
                products (used products) in your desired price
              </p>

              <div class="mt-8 flex flex-wrap gap-4 text-center">
                <button className="mt-8 ml-[35%] self-center px-10 py-1">
                  <Link to="/cusSignup">Sign up</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="  w-full  bg-grey flex flex-col justify-between">
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
    </div>
  );
}
