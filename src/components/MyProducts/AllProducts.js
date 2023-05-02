import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInactiveProduct,
  getInactiveProductbyCat,
} from "../../actions/index";
import InactiveProducts from "./InactiveProducts";
import Filter from "../Filter";
import Pagination from "../Pagination";
export default function AllProducts() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.id);

  useEffect(() => {
    dispatch(getInactiveProduct(id));
  }, []);

  const categories = useSelector((state) => state.categories.categories);
  const products = useSelector((state) => state.userproducts.inactivePro);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [category, setCategory] = useState("");

  return (
    <div>
      <section className="flash container">
        <div className="  my-[3%] ">
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
                            dispatch(getInactiveProduct(id));
                          } else {
                            dispatch(
                              getInactiveProductbyCat(id, e.target.value)
                            );
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
          {products.length !== 0 ? (
            <div className="mt-3 border-t-2 border-orange flex">
              <div className=" w-full ">
                <div className=" bg-sky ">
                  <InactiveProducts products={currentPosts} />
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-sky my-1 border-t-2 border-orange flex">
              you don't have any products yet
            </div>
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
