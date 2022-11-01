import React from "react";

export default function Ctegories() {
  return (
    <div>
      {" "}
      <div className="divide-y divide-grey-200 space-y-5 ">
        <div>
          <h3 className="text-xl text-grey-800 mb-3 uppercase font-medium">
            Categories
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="cat-1"></input>
              <label
                htmlFor="cat-1"
                className="text-grey-600 ml-3 cursor-pointer"
              >
                Electronics
              </label>
              <div className=" ml-auto text-grey-600 tetx-sm">(15)</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cat-2"></input>
              <label
                htmlFor="cat-2"
                className="text-grey-600 ml-3 cursor-pointer"
              >
                Households
              </label>
              <div className=" ml-auto text-grey-600 tetx-sm">(15)</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cat-3"></input>
              <label
                htmlFor="cat-3"
                className="text-grey-600 ml-3 cursor-pointer"
              >
                Jwellery
              </label>
              <div className=" ml-auto text-grey-600 tetx-sm">(15)</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cat-4"></input>
              <label
                htmlFor="cat-4"
                className="text-grey-600 ml-3 cursor-pointer"
              >
                Clothes accessories
              </label>
              <div className=" ml-auto text-grey-600 tetx-sm">(15)</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cat-5"></input>
              <label
                htmlFor="cat-5"
                className="text-grey-600 ml-3 cursor-pointer"
              >
                Musical instrument
              </label>
              <div className=" ml-auto text-grey-600 tetx-sm">(15)</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cat-6"></input>
              <label
                htmlFor="cat-6"
                className="text-grey-600 ml-3 cursor-pointer"
              >
                Books
              </label>
              <div className=" ml-auto text-grey-600 tetx-sm">(15)</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cat-7"></input>
              <label
                htmlFor="cat-7"
                className="text-grey-600 ml-3 cursor-pointer"
              >
                Antiques
              </label>
              <div className=" ml-auto text-grey-600 tetx-sm">(15)</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cat-8"></input>
              <label
                htmlFor="cat-8"
                className="text-grey-600 ml-3 cursor-pointer"
              >
                Handmade
              </label>
              <div className=" ml-auto text-grey-600 tetx-sm">(15)</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cat-9"></input>
              <label
                htmlFor="cat-9"
                className="text-grey-600 ml-3 cursor-pointer"
              >
                Toys
              </label>
              <div className=" ml-auto text-grey-600 tetx-sm">(15)</div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl text-grey-800 mb-3 uppercase font-medium">
            Sort
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="lh"></input>
              <label htmlFor="lh" className="text-grey-600 ml-3 cursor-pointer">
                Lower to higher
              </label>
              <div className=" ml-auto text-grey-600 tetx-sm">(15)</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="hl"></input>
              <label htmlFor="hl" className="text-grey-600 ml-3 cursor-pointer">
                higher to lower
              </label>
              <div className=" ml-auto text-grey-600 tetx-sm">(15)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
