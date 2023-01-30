import React, { useEffect } from "react";
import "./Home.css";
import img from "../../asserts/auction-property-market.png";
import SliderHome from "./Slider";
import Wrapper from "./Wrapper";

import { useDispatch } from "react-redux";
import { allProducts, getAllCategory } from "../../actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProducts());
  }, []);
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <>
      <section className="home ">
        <div className="mx-[3%] ">
          <div className=" w-[100%]">
            {" "}
            <img src={img} className=" w-full object-cover opacity-90 h-96  " />
          </div>
          <div className="  mt-[-10%]">
            {" "}
            <SliderHome />
          </div>
        </div>
        <div>
          <div className="p-8 bg-pink">
            {" "}
            <div class="container  mx-auto bg-pink dark:bg-gray-800">
              <div class="mb-16 text-center">
                <h2 className="text-lg font-semibold leading-8  tracking-tight text-indigo-600">
                  BidBazaar is all you need
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Some Insights Of BidBazaar
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  The marketplace that allow you sell or buy used products in
                  reasonable profit price
                </p>
              </div>
              <div class="flex flex-wrap my-12 dark:text-white">
                <div class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
                  <div class="flex items-center mb-6">
                    <i class="fa-solid fa-user-plus"></i>
                    <div class="ml-4 text-xl font-bold text-orange">Login</div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                    Create an account and login to get your dashboard{" "}
                  </p>
                </div>
                <div class="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
                  <div class="flex items-center mb-6">
                    <i class="fa-solid fa-gavel"></i>
                    <div class="ml-4 text-xl font-bold text-orange">
                      {" "}
                      Auction
                    </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                    At auction you see all the products on auction
                  </p>
                </div>
                <div class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
                  <div class="flex items-center mb-6">
                    <i class="fa-solid fa-cart-plus"></i>
                    <div class="ml-4 text-xl font-bold text-orange">
                      {" "}
                      My products
                    </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                    After login you can add and see all of your products. You
                    can activate to start biding on your product
                  </p>
                </div>
                <div class="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
                  <div class="flex items-center mb-6">
                    <i class="fa-solid fa-coins"></i>
                    <div class="ml-4 text-xl font-bold text-orange">
                      {" "}
                      My Bids
                    </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                    You can see your progress bids and history of your previous
                    bids
                  </p>
                </div>
                <div class="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
                  <div class="flex items-center mb-6">
                    <i class="fa-solid fa-box"></i>
                    <div class="ml-4 text-orange text-xl font-bold">
                      {" "}
                      Orders
                    </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                    You can get email notification of your bids status and
                    payment status
                  </p>
                </div>
                <div class="w-full p-8 md:w-1/2 lg:w-1/3">
                  <div class="flex items-center mb-6">
                    <i class="fa-solid fa-envelope"></i>
                    <div class="ml-4 text-orange text-xl font-bold">
                      {" "}
                      Email Notification
                    </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                    Keeping uptodate by getting email notification of your bid
                    details, orders and payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[5%] font-bold text-4xl text-center ">
          Why Bid Bazaar?
        </div>
        <div className="bg-black ">
          <Wrapper />
        </div>
      </section>
    </>
  );
};

export default Home;
