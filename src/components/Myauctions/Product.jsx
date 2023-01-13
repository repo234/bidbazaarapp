import React from "react";
import Countdown from "react-countdown";
import Auctionend from "../Auctions/Auctionend";


const renderer = ({ days, hours, minutes, seconds, completed, props }) => {
  if (completed) {
return <Auctionend product={props.item}/>
  } else {
    return (
      <div className=" ">
        <div className="  md:mx-0 mx-[40%] ">
          <div className=" lg:w-1/4 md:w-1/2  ">
            <div
              className=" product  mtop "
              style={{ height: "400px", width: "250px" }}
            >
              <div className="overflow-hidden  " key={props.item._id}>
                <div className=" border-b-2 mb-3 border-orange">
                  <div className=" overflow-hidden" style={{ height: "250px" }}>
                    <img
                      src={`http://localhost:3000/uploads/${props.item.images[0].img}`}
                      alt="loding"
                    />
                  </div>
                  <div className="product-like">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
                <div className="product-details  ">
                  <h3 className="underline ">{props.item.name}</h3>
                  <div className="text-base price font-semibold ">
                    <h4>RS {props.item.price}</h4>
                  </div>
                 
                  </div>
                  <div>
                    <div className="flex ">
                        <div className="  text-sm  pr-5">
                          time-left:
                        </div>
                        <div className=" text-base font-bold jsutify-content-between align-item-center">
                        {days * 24 + hours} : {minutes} : {seconds}
                      </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
   
      </div>
    );
  }
};

function Product(props) {
  
  return (
    <Countdown date={props.product.duration} item={props.product}  renderer={renderer} />
  );
}

export default Product