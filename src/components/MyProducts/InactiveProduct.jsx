import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  activeProduct,
  createAuction,
  deletePro,
  singleProduct,
  getCategory
} from "../../actions";

export default function InactiveProduct({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <span>
      <div className="  md:mx-0 mx-[3%] ">
        <div className=" lg:w-1/4 md:w-1/3 w-1/2">
          <div
            className=" product mtop "
            style={{ height: "400px", width: "250px" }}
          >
            <div className="overflow-hidden  " key={product._id}>
              <div className=" border-b-2  border-orange">
                <div className=" overflow-hidden" style={{ height: "250px" }}>
                  <img
                    src={`http://localhost:3000/uploads/${product.images[0].img}`}
                    alt="loding"
                  />
                </div>
                <div className="product-like ">
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
              <div className="product-details mt-3 ">
                <h3 className="underline ">{product.name}</h3>
                <div className="text-base price font-semibold ">
                  <h4>RS {product.price}</h4>
                </div>

                <div className="absolute bottom-3 flex">
                  <button
                    className="p-1 text-sm bottom-2"
                    onClick={() => {
                      
                      dispatch(createAuction(product._id));
                      dispatch(activeProduct(product._id));
                    
                      navigate("/myAuctions");
                     
                    }}
                  >
                    Activate
                  </button>
                  <div className="flex  text-base">
                    <div
                      className=" px-1 "
                      onClick={() => {
                        dispatch(singleProduct(product._id));
                        dispatch(getCategory(product.categoryId))
                        navigate("/inacProductDetail");
                        window.location.reload()
                      
                      }}
                    >
                      <i class=" hover:underline underline-offset-4 cursor-pointer fa-sharp fa-solid fa-eye"></i>
                    </div>
                    <div className=" px-1" onClick={() => {
                        dispatch(singleProduct(product._id));
                        dispatch(getCategory(product.categoryId))
                        navigate("/updateProduct/"+product._id);
                    }}>
                      <i class="hover:underline underline-offset-4 cursor-pointer fa-sharp fa-solid fa-pen"></i>
                    </div>
                    <div className=" px-1" onClick={() => {}}>
                      <i class=" hover:underline cursor-pointer underline-offset-4 fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}
