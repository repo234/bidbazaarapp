import React, { useEffect, useState } from "react";
import "./Auction.css";
import Products from "./Products";
import { allProducts, getAllCategory } from "../../actions";
import Filter from "../Filter";
import io from "socket.io-client";
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
  const [postsPerPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(indexOfLastPost);
  console.log(indexOfFirstPost);
  console.log(currentPosts);
  return (
    <>
      <section className="home container">
        <div className="  mt-[3%] ">
          <Filter />
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
