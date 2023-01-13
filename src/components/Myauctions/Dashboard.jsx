import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auctionProducts } from "../../actions/index";
import Products from "./Products";
import Filter from "../Filter";
export default function Dashboard() {
  const id = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auctionProducts(id));
  }, []);
  const products = useSelector((state) => state.userproducts.activeproducts);

  return (
    <div>

        <section className="flash container">
        <div className="  mt-[3%] ">
          <Filter />
        </div>
          <div className="text-[25px]  flex">
            {" "}
            <h1 className="my-1 text-[25px] font-semibold flex flex-col text-orange ">Auction Products</h1>
          </div>
          {products.length !== 0  ? (
            <div className="mt-1 border-t-2 border-orange flex">
              <div className=" w-full">
                <div className=" bg-sky ">
                  <Products />
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-sky my-1 border-t-2 border-orange flex">no products on auction yet</div>
          )}
        </section>
  
    </div>
  );
}
