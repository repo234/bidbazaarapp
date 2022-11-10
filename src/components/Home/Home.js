import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import NewArrivals from "./NewArrivals";
import Products from "../Auctions/Products";
import "./Home.css";
import SliderHome from "./Slider";
import Wrapper from "./Wrapper";

import axios from "axios";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  return (
    <>
      <section className="home ">
        <div className="container  d_flex">
          <SliderHome />
        </div>
        {products ? (
          <>
            <div>
              <NewArrivals products={products} />
            </div>
            <section className="flash bg-sky">
              <div>
                <div className="heading  flex">
                  <div className="flex text-2xl w-full">
                    {" "}
                    <i className="fa fa-bolt"></i>
                    <h1>Hot Selling</h1>
                  </div>
                  <div
                    className="text-right text-orange underline  hover:cursor-pointer hover:hover:underline-offset-4 mx-4 pr-4  w-[10%]"
                    onClick={() => {
                      navigate("/auction");
                    }}
                  >
                    See all
                  </div>
                </div>
                <Products products={products} />
              </div>
            </section>
          </>
        ) : (
          ""
        )}

        <div className="bg-black ">
          <Wrapper />
        </div>
      </section>
    </>
  );
};

export default Home;
