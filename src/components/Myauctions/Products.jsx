import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { getAuction, getCategory } from "../../actions/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Products() {

  const products = useSelector((state) => state.userproducts.activeproducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <section className="">
      {products.length!==0 ? (
        <div className=" heading  ">
          <div className=" w-full ">
            <div className="container text-[25px] flex flex-wrap">
              {products.map((product) => {
                return (  
                  <div
                    onClick={() => {
                      dispatch(getAuction(product._id))
                      dispatch(getCategory(product.categoryId))
                      navigate("/auctionProductDetail");
                    }}
                  >
                    <Product product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
       ""
      )}
    </section>
  );
}
