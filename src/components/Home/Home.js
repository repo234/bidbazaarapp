import React from "react";
import HotSelling from "./HotSelling";
import NewArrivals from "./NewArrivals";
import "./Home.css";
import SliderHome from "./Slider";
import Wrapper from "./Wrapper";
import Data from "../../SliderImages/Data";
const Home = () => {
  const { productItems } = Data;

  return (
    <>
      <section className="home ">
        <div className="container d_flex">
          <SliderHome />
        </div>

        <NewArrivals productItems={productItems} />

        <HotSelling productItems={productItems} />
        <div className="bg-grey">
          <Wrapper />
        </div>
      </section>
    </>
  );
};

export default Home;
