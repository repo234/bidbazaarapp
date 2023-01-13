import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Countdown from "react-countdown";
import io from "socket.io-client";


const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
   return ""
  } else {
    return (
      <span>
        <div className="  flex flex-wrap -m-4 ml-2  ">
          <div className=" jsutify-content-between align-item-center"></div>
          {days * 24 + hours} : {minutes} : {seconds}
        </div>
      </span>
    );
  }
};

export default function ProDetail() {
  const product = useSelector((state) => state.auction.auctionproduct);
  const category=useSelector(state=>state.categories.category)
  const auction = useSelector((state) => state.auction.auction);

  const arrowStyle = "flex  justify-center items-center hover:cursor-pointer";
  const [highPrice, setHighPrice] = useState(auction.currentPrice);
  const [bids, setBids]=useState(auction.bids.length)
  const [slides] = useState(product.images);
  const [activeSlide, setActiveSlide] = useState(0);
  const user = useSelector((state) => state.user.id);
  useEffect(() => {
    const socket = io.connect("http://localhost:3000");
    socket.emit("setup", user);
    socket.on("newbid", (data) => {
      setHighPrice(data.auction.currentPrice);
      setBids(data.auction.bids.length)
    });
  });
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
      <div className=" h-full  mt-5 flex justify-center bg-sky flex-col lg:flex-row ">
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

        <div className=" product w-full  flex-[1.3] lg:w-1/2 flex-wrap flex flex-col sm:items-start md:items-center  justify-items-center mt-5 ">
          <h1 className="  text-[40px] ">{product.name}</h1>
          <div>------------------------------------------------------</div>
          <div className="flex">
            <div className=" mt-4 mr-8">
              <b>
                <Countdown date={product.duration} renderer={renderer} />
              </b>{" "}
            </div>
            <div>
              <h4>
                | Total Bids: <b>{bids}</b>{" "}
              </h4>
            </div>
          </div>
          <div>------------------------------------------------------</div>
          <div className="  flex flex-col place-self-start container  w-full">
            <p className="mt-7 text-base">
              Start Price - <b>RS:{product.price}</b>
            </p>
            <p className="mt-2 text-base">
              Curent highest price - <b>RS: {highPrice}</b>
            </p>
            <div className="">
              <div className="mt-3 text-xl text-orange">Item Info</div>
              <div className="flex">
                <h3 className="text-orange mt-3 mr-3">Quantity:</h3>
                <p className="mt-3">{product.quantity}</p>
              </div>
              <div className="flex">
                <h3 className="text-orange mt-3 mr-3">Condition:</h3>
                <p className="mt-3">{product.condition}</p>
              </div>
              <div className="flex">
                <h3 className="text-orange mt-3 mr-3">Category:</h3>
                <p className="mt-3">{category.name}</p>
              </div>
              <div className="flex">
                <h3 className="text-orange mt-3 mr-3">Discription:</h3>
                <p className="mt-3">{product.discription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
