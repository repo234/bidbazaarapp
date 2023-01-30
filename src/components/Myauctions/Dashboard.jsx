import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auctionProducts } from "../../actions/index";
import Products from "./Products";
import Filter from "../Filter";
import Pagination from "../Pagination";
import { useState } from "react";
export default function Dashboard() {
  const id = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auctionProducts(id));
  }, []);
  const products = useSelector((state) => state.userproducts.activeproducts);
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
    <div>


        <section className="flash container">
        <div className="  mt-[3%] ">
          <Filter />
        </div>
         <div className="my-5">
          {products.length !== 0  ? (
            <div className="mt-1 border-t-2 border-orange flex">
              <div className=" w-full">
                <div className=" bg-sky ">
                  <Products products={currentPosts}/>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-sky my-1 border-t-2 border-orange flex">no products on auction yet</div>
          )}
          
           <Pagination 
            postsPerPage={postsPerPage}
            totalPosts={products.length}
            paginate={paginate}
            firstPost={indexOfFirstPost}
            lastPost={indexOfLastPost}
          />
          </div>
        </section>
  
    </div>
  );
}
