import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../asserts/Logo.png";

const Search = () => {
  const products=useSelector(state=> state.products.products)
  const [search,setSearch]=useState()
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };
const filterContent=(products, search)=>{
const result= products.filter((products)=>(products.name.includes(search)))
}
const handleText=(e)=>{
const searchText=e.target.value()
filterContent(products, searchText)
}

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  return (
    <>
      <section className="search  mx-[2%]">
        {screenSize.dynamicWidth >= 786 ? (
          <div className="">
            
            <div className="search-box f_flex">
              <i className="fa fa-search"></i>
              <input type="text" placeholder="Search and hit enter..." 
              onChange={()=>{
               handleText()
              }}/>
              <button className="py-2 px-4 rounded-none border">
                Search
              </button>
            </div>
           
          </div>
        ) : (
          <div class="md:hidden">
           
            <div class="col mt-3">
              <div className="search-box flex h-10">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Search and hit enter..." />
                <button className="py-2 px-4 rounded-none border">
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Search;
