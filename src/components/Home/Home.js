import React from "react";
import NewArrivals from "./NewArrivals";
import "./Home.css";
import SliderHome from "./Slider";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <SliderHome />
        </div>
        <div className="border-2">
          <NewArrivals />
        </div>
      </section>
    </>
  );
};

export default Home;
