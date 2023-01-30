import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuction, getCategory } from "../../actions";
import WiningPage from "./WiningPage";
import Product from "./Product";


export default function Products({products}) {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <section className="flash ">
        <div className=" heading flex">
          <div className=" w-full ">
            <div className="container text-[25px] flex flex-wrap">
              {products.map((product) => {
                return (
                  <div
                    onClick={() => {
                    
                      dispatch(getAuction(product._id))
                      dispatch(getCategory(product.categoryId))
                      navigate("/productDetail");
                    }}
                  >
                    <Product product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <WiningPage />
    </>
  );
}
