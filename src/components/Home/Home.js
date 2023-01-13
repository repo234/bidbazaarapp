import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Products from "../Auctions/Products";
import "./Home.css";
import img from "../../asserts/auction-property-market.png";
import SliderHome from "./Slider";
import Wrapper from "./Wrapper";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, getAllCategory } from "../../actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProducts());
  }, []);
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const socket = io.connect("http://localhost:3000");

  socket.emit("temp", "hello from client");

  socket.emit("temp", "hello from seler");
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
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
        <div className="border">
          <div> how it works</div>
          <div></div>
        </div>
        <div className="bg-black ">
          <Wrapper />
        </div>
      </section>
    </>
  );
};

export default Home;
