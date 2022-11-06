import React from "react";
import HotSellingPro from "./HotSellingPro";
import { useNavigate } from "react-router-dom";
export default function HotSelling({ producctItems }) {
  const navigate = useNavigate();
  return (
    <>
      <section className="flash bg-sky">
        <div>
          <div className="heading  flex">
            <div className="flex text-2xl w-full">
              {" "}
              <i className="fa fa-bolt"></i>
              <h1>Hot Selling</h1>
            </div>
            <div
              className="text-right text-orange underline  hover:cursor-pointer hover:hover:underline-offset-4 mx-4 pr-4  w-[10%]"
              onClick={() => {
                navigate("/auction");
              }}
            >
              See all
            </div>
          </div>
          <HotSellingPro producctItems={producctItems} />
        </div>
      </section>
    </>
  );
}
