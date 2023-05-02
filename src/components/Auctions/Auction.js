import React, { useEffect, useState } from "react";
import "./Auction.css";
import Products from "./Products";
import {
  allProducts,
  allProductsCategory,
  filterInactive,
  getAllCategory,
} from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Pagination from "../Pagination";
export default function Auction() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProducts());
  }, []);
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const products = useSelector((state) => state.products.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [category, setCategory] = useState("");

  const categories = useSelector((state) => state.categories.categories);
  return (
    <>
      <section className="home container">
        <div className="  mt-[3%] ">
          <div>
            {" "}
            <div className="flex  flex-col mt-10">
              <div className=" flex bg-pink  flex-col md:flex-row p-2 items-center shadow-sm justify-between mt-3">
                <div className="flex  w-full">
                  <div className="flex flex-col ml-8 md:flex-row">
                    <p className="my-3 md:mb-1 font-bold text-orange">
                      Categories
                    </p>
                    {categories ? (
                      <select
                        className="md:ml-3 border text-sm p-2 rounded-sm hover:border-orange"
                        onChange={(e) => {
                          if (e.target.value === "") {
                            dispatch(allProducts());
                          } else {
                            dispatch(allProductsCategory(category));
                            window.location.reload();
                          }
                        }}
                      >
                        <option value="" selected>
                          Select
                        </option>

                        {categories.map((name, index) => {
                          return (
                            <option
                              value={name._id}
                              className="box f_flex"
                              key={index}
                            >
                              {name.name}
                            </option>
                          );
                        })}
                      </select>
                    ) : (
                      <div className="bg-sky  border-t-2 border-orange flex">
                        Loding.....
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3 text-[25px] font-semibold flex flex-col "></div>
        <div className=" heading flex">
          <div className=" w-full ">
            {products.length !== 0 ? (
              <div className="border-t-2 border-orange bg-sky flex flex-col">
                <Products products={currentPosts} />
              </div>
            ) : (
              <div className="bg-sky mb-4 border-t-2 border-orange flex">
                no products on auction
              </div>
            )}
          </div>
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
          firstPost={indexOfFirstPost}
          lastPost={indexOfLastPost}
        />
      </section>
    </>
  );
}
