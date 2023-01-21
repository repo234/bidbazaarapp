import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  inprogressbidHistory,
  getCategory,
  getbidHistory,
  getAuction,
} from "../../actions";

export default function MyBids() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useSelector((state) => state.user.id);
  useEffect(() => {
    dispatch(inprogressbidHistory(id));
    dispatch(getbidHistory(id));
    console.log("yes");
  }, []);
  const proBiddata = useSelector((state) => state.history.bidHistory);
  const historyBid = useSelector((state) => state.history.getBidHistory);
  return (
    <div>
      <section class="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 my-[3%]">
        <div class="h-full">
          <div class="w-[90%]  mx-auto bg-white  ">
            <header class="px-2 py-4 shadow-sm ">
              <h2 class="font-semibold text-orange">In Progress</h2>
            </header>
            <div class="p-3">
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Product</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">My price</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">
                          Heighest Price
                        </div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Total bids</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Auctioned</div>
                      </th>

                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-center">Status</div>
                      </th>
                    </tr>
                  </thead>
                  {proBiddata.length === 0 ? (
                    <div className="text-sm text-orange">no products yet</div>
                  ) : (
                    <>
                      {proBiddata.map((data) => {
                        return (
                          <tbody class="text-sm divide-y divide-gray-100">
                            <tr
                              className="border-b border-orange shadow-sm-b"
                              onClick={() => {
                                dispatch(getAuction(data.productId));
                                dispatch(getCategory(data.categoryId));
                                navigate("/productDetail");
                              }}
                            >
                              <td class="p-2 whitespace-nowrap ">
                                <div class="flex items-center ">
                                  <div class="rounded-full  w-10 h-10 overflow-hidden flex-shrink-0 mr-2 sm:mr-3">
                                    <img
                                      src={`http://localhost:3000/uploads/${data.productImg.img}`}
                                      width="40"
                                      height="40"
                                      alt="Alex Shatov"
                                    />
                                  </div>
                                  <div class="font-medium text-gray-800">
                                    {data.productName}
                                  </div>
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left ">{data.myprice}</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left ">
                                  {data.highestPrice}
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left font-medium text-green-500">
                                  {data.totalBids}
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-sm text-left">
                                  {data.auctioned}
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-sm text-center">
                                  {data.status}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </>
                  )}
                </table>
              </div>
            </div>
          </div>
          <div class="w-[90%] mx-auto mt-5 bg-white ">
            <header class="px-2 py-4  shadow-sm">
              <h2 class="font-semibold text-orange">History</h2>
            </header>
            <div class="p-3">
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Product</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Price</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Total bids</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Auctioned</div>
                      </th>

                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-center">Status</div>
                      </th>
                    </tr>
                  </thead>
                  {historyBid.length === 0 ? (
                    <div className="text-sm text-orange">no products yet</div>
                  ) : (
                    <>
                      {historyBid.map((data) => {
                        return (
                          <tbody class="text-sm divide-y divide-gray-100">
                            <tr className="border-b">
                              <td class="p-2 whitespace-nowrap ">
                                <div class="flex items-center ">
                                  <div class="rounded-full  w-10 h-10 overflow-hidden flex-shrink-0 mr-2 sm:mr-3">
                                    <img
                                      src={`http://localhost:3000/uploads/${data.image}`}
                                      width="40"
                                      height="40"
                                      alt="Alex Shatov"
                                    />
                                  </div>
                                  <div class="font-medium text-gray-800">
                                    {data.name}
                                  </div>
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left ">{data.price}</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left font-medium text-green-500">
                                  {data.totalBids}
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-sm text-left">
                                  {data.auctioned}
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-sm text-center">
                                  {data.status}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
