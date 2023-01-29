import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Countdown from "react-countdown";
import { bidHistory, updateBid, updatebidHistory  } from "../../actions";
import io from "socket.io-client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const renderer = ({ days, hours, minutes, seconds, completed  }) => {
  
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

export default function ProductDetail() {
  const navigate = useNavigate();
  const product = useSelector((state) => state.products.product);
  const auc = useSelector((state) => state.products.auction);
const category=useSelector(state=>state.categories.category)

  const [auction, setAuction] = useState(auc);

  const auth = useSelector((state) => state.user.auth);
  const user = useSelector((state) => state.user.id);
  useEffect(() => {
    const socket = io.connect("http://localhost:3000");
    socket.emit("setup", user);
    socket.emit("bid", auction._id);
    socket.on("newbid", (data) => {
      setAuction(data.auction)
    });
  });

  const arrowStyle = "flex  justify-center items-center hover:cursor-pointer";
  const [bid, setBid] = useState();
  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setBid(result);
  };
  //States
  const dispatch = useDispatch();
  const [slides] = useState(product.images);
  const [activeSlide, setActiveSlide] = useState(0);
  const attempt = auction.bids.filter((bid) => {
    return bid.userId === user;
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
      <div className=" h-full flex justify-center bg-sky flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
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

        <div className=" product w-full  flex-[1.3] lg:w-1/2 flex-wrap flex flex-col sm:items-start md:items-center  justify-items-center mt-10 ">
          <h1 className=" mb-5 text-[40px] ">{product.name}</h1>
          <div>------------------------------------------------------</div>
          <div className="flex">
            <div className="mt-1  mr-8">
              <b>
                {" "}
                <Countdown date={product.duration} renderer={renderer} />
              </b>
            </div>
            <div>
              <h4>
                | Bids: <b> {auction.bids.length}</b>{" "}
              </h4>
            </div>
          </div>
          <div>------------------------------------------------------</div>
          <div className="  flex flex-col place-self-start  w-full">
            <p className="mt-7 text-xl">
              Current Price - <b>RS: {auction.currentPrice}</b>
            </p>
            <p className="mt-7 text-xl">
              Minimun Bid - <b>RS: {auction.currentPrice + 1}</b>
            </p>
            <div className="mt-3 flex p-2 w-full text-xl">
              <div className=" mr-[5%] md:mr-[20%]  ">Set your bid</div>
              {
                auction.winner===user?(<div className="mr-2 text-green font-bold ">highest</div>):(<div className="mr-2 text-orange font-bold ">lowest</div>)
              } 
              <div className="border-2 rounded-lg">
                <input
                  type="text"
                  className="border-2 rounded-lg p-2"
                  placeholder="enter your price"
                  value={bid}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="text-orange text-center">
              you can add maximum 3 bids, attempts done: {attempt.length}
            </div>

            {auth ? (
              attempt.length < 3 ? (
                <button
                  className="mt-8 p-3 w-[50%] ml-[25%]"
                  onClick={() => {
                    dispatch(updateBid(auction._id, bid, user));
                    if( attempt.length === 0){
                      dispatch(bidHistory(product,auction, bid, user))
                    }else if(attempt.length >=1){
                     dispatch(updatebidHistory(user, auction._id, bid, auction.bids.length))
                    }
                  }}
                >
                  place bid
                </button>
              ) : (
                <div className="mt-8 p-3 text-center text-lg font-bold">
                  "you are out of attempt"
                </div>
              )
            ) : (
              <button
                className="mt-8 p-3 w-[50%] ml-[25%]"
                onClick={() => {
                  navigate("/login");
                }}
              >
                place bid
              </button>
            )}
          </div>
        </div>
      </div>
      <hr className="border border-orange" />
      <div className="container">
        <div className=" pt-5   text-xl">Item Info</div>
        <div className="p-5 ">
          <h3 className="text-orange mt-3">Quantity:</h3>
          <p className="mt-3">{product.quantity}</p>
          <h3 className="text-orange mt-3">Used duration:</h3>
          <p className="mt-3">{product.used}</p>
          <h3 className="text-orange mt-3">Condition:</h3>
          <p className="mt-3">{product.condition}</p>
          <h3 className="text-orange mt-3">Category:</h3>
          <p className="mt-3">{category.name}</p>
          <h3 className="text-orange mt-3">Discription:</h3>
          <p className="mt-3">{product.discription}</p>
        </div>
      </div>
    </div>
  );
}
