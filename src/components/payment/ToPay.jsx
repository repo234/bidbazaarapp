import React, { useState } from "react";
import { useEffect } from "react";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { getunpaidProducts , expiredProduct} from "../../actions";
import Expired from "./Expired";

const renderer = ({  completed ,props }) => {
  
  if (completed) {
  return <Expired product={props.product}/>
 
  } else {
    return ( 
     
        <div className="  flex flex-wrap -m-4 ml-2  ">
       { props.expiry}
        
        </div>
    );
  }
}; 
export default function ToPay() {
  const [isChecked, setisChecked] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalShipping, setShipping] = useState(0);
  const user = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getunpaidProducts(user));
  }, []);
  const unpaidproducts = useSelector((state) => state.history.unpaid);
 
  const handlecheckbox = (e, price, shipping) => {
    const { value, checked } = e.target;
    console.log(price);
    if (checked) {
      setisChecked([...isChecked, value]);
      setTotal(price + total);
      setShipping(shipping +totalShipping)
    } else {
      setisChecked(isChecked.filter((e) => e !== value));
      setTotal(price - total);
      setShipping(shipping - totalShipping)
    }
  };

  return (
    <div className="  container">
      <div className="border  w-full product">
        <div class="w-[90%]  mx-auto bg-white  ">
          <header class="px-3 py-4 shadow-none ">
            <h2 class="font-semibold text-lg text-orange">Products to pay</h2>
            <div class=" text-orange text-sm">
              If you don't pay the product within one day you may loss it
            </div>
          </header>
          <div class="p-3 mt-5">
            <div class="overflow-x-auto">
              <table class="table-auto w-full">
                <thead class="text-xs font-semibold uppercase ">
                  <tr>
                    <th class="p-2  px-3 whitespace-nowrap">
                      <div class="font-semibold text-center ">#</div>
                    </th>
                    <th class="p-2  px-3 whitespace-nowrap">
                      <div class="font-semibold text-center ">Product</div>
                    </th>
                    <th class="p-2  px-3 whitespace-nowrap">
                      <div class="font-semibold text-center">Price</div>
                    </th>
                    <th class="p-2  px-3 whitespace-nowrap">
                      <div class="font-semibold text-center">shipping</div>
                    </th>
                    <th class="p-2  px-3 whitespace-nowrap">
                      <div class="font-semibold text-center">totalbids</div>
                    </th>
                    <th class="p-2  px-3 whitespace-nowrap">
                      <div class="font-semibold text-center">winning date</div>
                    </th>
                    <th class="p-2 px-3 whitespace-nowrap">
                      <div class="font-semibold text-center">
                        Expiration date
                      </div>
                    </th>

                    <th class="p-2  px-3 whitespace-nowrap">
                      <div class="font-semibold text-center">
                        payment Status
                      </div>
                    </th>
                  </tr>
                </thead>
                {unpaidproducts.length === 0 ? (
                  <div className="text-sm text-orange">no products yet</div>
                ) : (
                  <>
                    {unpaidproducts.map((data) => {
                      return (
                        <tbody class="text-sm divide-y divide-gray-100 ">
                          <tr className="border-b border-orange shadow-sm-b">
                            <td>
                              <input
                                type="checkbox"
                                value={data._id}
                                checked={data.isChecked}
                                onChange={(e) => handlecheckbox(e, data.price, data.shipping)}
                              />
                            </td>
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
                              <div class="text-center ">{data.price}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              <div class="text-center ">{data.shipping}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              <div class="text-center ">{data.totalBids}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap ">
                              <div class="text-center font-medium text-green-500">
                                {data.winningDate}
                              </div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              <div class="text-sm text-center">
                              <Countdown date={data.duration} expiry={data.expirationDate} product={data._id} renderer={renderer} />

                              </div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              <div class="text-sm text-center">
                                {data.paymentStatus}
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
  
        <div className="flex-col mt-2 container">
        <div className="  container   relative top-2 flex ">
            <div className=" ml-2">shipping</div>
            <div className=" absolute right-2 font-bold">RS: {totalShipping}</div>
          </div>
          <div className="  container relative top-2 flex ">
            <div className=" ml-2">total</div>
            <div className=" absolute right-2 font-bold">RS: {total}</div>
          </div>
          ----------------------------------------------------------------------------------------------------------------------
          <div className=" py-2 container relative top-2 flex ">
            <div className=" ml-2">grand total</div>
            <div className=" absolute right-2 font-bold">RS: {total+totalShipping}</div>
          </div>
          <button className=" p-1 text-sm mt-4 ml-[90%] ">Checkout</button>
        </div>
      </div>
    </div>
  );
}
