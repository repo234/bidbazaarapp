import React, { useState } from "react";
import bg from "../asserts/cont3.jpg";

import "./Home/Slider.css";
const data = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216",
  },
  {
    id: 2,
    img: { bg },
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216",
  },
];

export default function Sell() {
  const arrowStyle = "flex justify-center items-center hover:cursor-pointer";
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValue(result);
  };
  //States
  const [slides] = useState(data);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <div>
      <div className=" h-full flex justify-center flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2  flex items-center justify-center">
          <div className={arrowStyle} onClick={prevSlide}>
            <i className="fa-solid fa-caret-left font-[50px]"></i>
          </div>

          {slides.map((slide, index) => {
            if (index === activeSlide) {
              return (
                <div
                  className=" w-auto  lg:w-1/2 flex-1 flex items-center justify-center"
                  key={index}
                >
                  <img
                    src={slide.img}
                    className="product"
                    alt="product_image"
                  />
                </div>
              );
            }
          })}
          <div className={arrowStyle} onClick={nextSlide}>
            <i className="fa-solid fa-caret-right font-[50px]"></i>
          </div>
        </div>

        <div className=" product w-full flex-[1.3] lg:w-1/2 flex-wrap flex flex-col sm:items-start md:items-center  justify-items-center mt-10 ">
          <h1 className=" mb-5 text-[40px] ">Cream Hoody Orignal</h1>
          <div>------------------------------------------------------</div>
          <div className="flex">
            <div className=" mr-8">
              <h4>
                time left: <b>4h 5m</b>{" "}
              </h4>
            </div>
            <div>
              <h4>
                | Bids: <b> 3</b>{" "}
              </h4>
            </div>
          </div>
          <div>------------------------------------------------------</div>
          <div className="  flex flex-col place-self-start  w-full">
            <p className="mt-7 text-xl">
              Current Price - <b>RS: 70</b>
            </p>
            <p className="mt-7 text-xl">
              Minimun Bid - <b>RS: 70</b>
            </p>

            <div className="mt-7 flex p-2 w-full text-xl">
              <div className=" mr-[5%] md:mr-[30%]">Set your bid</div>
              <div className="border-2 rounded-lg">
                <input
                  type="text"
                  className="border-2 rounded-lg p-2"
                  placeholder="enter price"
                  value={value}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="mt-8 p-3 w-[50%] ml-[25%]">place bid</button>
          </div>
        </div>
      </div>
      <hr className="border border-orange" />

      <div className="border-2 container text-xl">Item Info</div>
      <i class="fa-brands fa-product-hunt"></i>

      <div></div>
    </div>
  );
}
