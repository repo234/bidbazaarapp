import React, { useEffect } from "react";
import "./Auction.css";
import Products from "./Products";
import { allProducts, getAllCategory } from "../../actions";
import Filter from "../Filter";
import io from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
export default function Auction() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProducts());
  }, []);
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  useEffect(() => {
    const socket = io.connect("http://localhost:3000");

    socket.on("addAdd", (data) => {
      toast.info(data.auction);
    });
  });
  const products = useSelector((state) => state.products.products);

  return (
    <>
      <section className="home container">
        <div className="  mt-[3%] ">
          <Filter />
        </div>
        <div className="my-3 text-[25px] font-semibold flex flex-col ">
          <div className="text-orange flex flex-row">
            <h1>All Auctions</h1>
          </div>{" "}
        </div>
        <div className=" heading flex">
          <div className=" w-full ">
            {products.length !== 0 ? (
              <div className="border-t-2 border-orange bg-sky flex flex-col">
                <Products />
              </div>
            ) : (
              <div className="bg-sky  border-t-2 border-orange flex">
                no products on auction
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
