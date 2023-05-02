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
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const categories = useSelector((state) => state.categories.categories);
  
  return (
    <div>


        <section className="flash container">
        <div className="  mt-[3%] ">
        <div>
            {" "}
            <div className="flex  flex-col mt-10">
              <div className=" flex bg-pink  flex-col md:flex-row p-2 items-center shadow-sm justify-between mt-3">
                <div className="flex  ">
                  <div className="flex flex-col ml-8 md:ml-2 md:flex-row">
                    <p className="my-3 md:mb-1 font-bold text-orange">
                      Categories
                    </p>
                    {categories ? (
                      <select
                      onChange={(e) => {
                        if (e.target.value === "") {
                          dispatch(auctionProducts(id));
                        } else {
                         
                        }
                      }}
                        className="md:ml-3 border text-sm p-2 rounded-sm hover:border-orange"
                      >
                        <option value="" selected>
                          Select
                        </option>

                        {categories.map((value, index) => {
                          return (
                            <option
                              value={value._id}
                              className="box f_flex"
                              key={index}
                            >
                              {value.name}
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
