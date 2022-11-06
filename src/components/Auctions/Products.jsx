import React from 'react'
import Product from './Product'
export default function Products({ producctItems }) {
  return (
    <>

    <section className="flash ">
     
        <div className=" heading flex">
          <div className=" w-full ">
         
           <div className='text-[25px] flex'>   <i className="fa fa-bolt"></i>
            <h1>On Auction</h1></div>
           <Product productItems={producctItems} />
         </div>
        
      </div>
    </section>
  </>
  )
}
