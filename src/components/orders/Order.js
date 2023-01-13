import React, { useState } from "react";
import Myorders from "./Myorders";
import ReceivedOrders from "./ReceivedOrders";
export default function Order() {
  const [myOrders, setMyorders] = useState(true);
  const orders = () => {};
  return (
    <div>
      <div className="">
        <div className="my-[2%] mx-5  flex space-x-4">
          <div
            className=" focus:text focus:text-orange "
            onClick={() => {
              setMyorders(true);
            }}
          >
            My orders
          </div>
          <div>|</div>
          <div
            onClick={() => {
              setMyorders(false);
            }}
          >
            Received Orders
          </div>
        </div>
        <div>
          <div>{myOrders ? <Myorders /> : <ReceivedOrders />}</div>
        </div>
      </div>
    </div>
  );
}
