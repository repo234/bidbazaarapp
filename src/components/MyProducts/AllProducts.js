import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInactiveProduct } from "../../actions/index";
import InactiveProducts from "./InactiveProducts";
import Filter from "../Filter";
export default function AllProducts() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.id);
  useEffect(() => {
    dispatch(getInactiveProduct(id));
  }, []);
  const products = useSelector((state) => state.userproducts.inactivePro);

  return (
    <div>
      <section className="flash container">
        <div className="  mt-[3%] ">
          <Filter />
        </div>
        <div className="text-[25px]  flex">
          {" "}
          <h1 className="my-3 text-[25px] text-orange font-semibold flex flex-col">
            My Products
          </h1>
        </div>
        {products.length !== 0 ? (
          <div className="mt-3 border-t-2 border-orange flex">
            <div className=" w-full ">
              <div className=" bg-sky ">
                <InactiveProducts />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-sky my-1 border-t-2 border-orange flex">
            you don't have any products yet
          </div>
        )}
      </section>
    </div>
  );
}
