import React, { useState } from "react";

import { useSelector } from "react-redux";

export default function InactiveProductDetail() {
  const product = useSelector((state) => state.userproducts.product);
  const category=useSelector(state=>state.categories.category)
  const arrowStyle = "flex  justify-center items-center hover:cursor-pointer";


  const [slides] = useState(product.images);
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

      product!==""?(<div>
        <div className=" h-full flex justify-center bg-sky flex-col lg:flex-row ">
          <div className=" lg:w-1/2 flex items-center justify-center">
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
                      src={`http://localhost:3000/uploads/${slide.img}`}
                      className="product"
                      alt="product_image"
                      style={{ height: "450px" }}
                    />
                  </div>
                );
              }
            })}
            <div className={arrowStyle} onClick={nextSlide}>
              <i className="fa-solid fa-caret-right font-[50px]"></i>
            </div>
          </div>
  
          <div className=" product w-full border  flex-[1.3] lg:w-1/2 flex-wrap flex flex-col sm:items-start md:items-center  justify-items-center mt-10 ">
            
            <h1 className=" mb-5 text-[40px] capitalize underline-offset-4 underline ">{product.name}</h1>
  
            <div className="container">
              <div className=" pt-3  text-xl text-orange">Item Info</div>
              <div className="p-5 ">
              <h3 className="text-orange mt-3">Price:</h3>
                <p className="mt-3">{product.price}</p>
                <h3 className="text-orange mt-3">Used Duration :</h3>
                <p className="mt-3">{product.used}</p>
                <h3 className="text-orange mt-3">Time:</h3>
                <p className="mt-3">{product.time} hours</p>
                <h3 className="text-orange mt-3">Quantity:</h3>
                <p className="mt-3">{product.quantity}</p>
                <h3 className="text-orange mt-3">Condition:</h3>
                <p className="mt-3">{product.condition}</p>
                <h3 className="text-orange mt-3">Category:</h3>
                <p className="mt-3">{category.name}</p>
                <h3 className="text-orange mt-3">Discription:</h3>
                <p className="mt-3">{product.discription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>):("Loding....")
  
  );
}
