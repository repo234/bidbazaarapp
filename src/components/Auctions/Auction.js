import React from "react";
import Categories from "./Categories";
import "src/components/Home/Home.css";
export default function Auction() {
  return (
    <>
      <section className="home ">
        <div className="container d_flex">
          <Categories />
        </div>
      </section>
    </>
  );
}
