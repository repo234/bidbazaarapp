import React  from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { singleProduct } from "../../actions";


export default function Product() {

 const products = useSelector(state=>state.products.products)
 const navigate =useNavigate()
const dispatch=useDispatch()
  return (
    <div>
      
      <section >
        <div className="  mx-auto  ml-[20%]  md:ml-1">
          <div className="  flex flex-wrap -m-4  ">
            {products.map((product) => {
           
              return (
                <div className=" lg:w-1/4 md:w-1/2 ">
                  <div className=" product mtop " style={{height: "400px"}}>
                    <div className="overflow-hidden  " key={product.id}>
                      <div className=" border-b-2  border-orange">
                        <div className=" overflow-hidden" style={{height: "200px"}}>
    
                        <img src={`http://localhost:3000/uploads/${product.images[0].img}`} alt="" />
                        </div>
                        <div className="product-like">
                          <i className="fa-regular fa-heart"></i>
                        </div>
                      </div>
                      <div className="product-details  ">
                        <h3 className="underline ">{product.name}</h3>
                        <div className="price font-semibold ">
                          <h4>RS {product.price}</h4>
                        </div>
                        <div className="flex mt-3 text-sm  ">
                          <div className="pr-6 ">
                            <p>bids: </p>
                          </div>
                          <div>
                            <p>time-left: {product.time}</p>
                          </div>
                        </div>
                       <button className=" w-full" onClick={()=>{
                       dispatch( singleProduct(product._id))
                       navigate("/productDetail")
                       }}>add bid</button>
                     
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
