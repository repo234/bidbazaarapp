import React from 'react'
import HotSellingPro from "./HotSellingPro"
export default function HotSelling({ producctItems }) {
  return (
    <>

    <section className="flash ">
      <div >
        <div className="heading  flex">
          <div className="flex w-full">
            {" "}
            <i className="fa fa-bolt"></i>
            <h1>Hot Selling</h1>
          </div>
          <div className="text-right text-orange underline  hover:cursor-pointer hover:hover:underline-offset-4 mx-4 pr-4  w-[10%]">See all</div>
        </div>
        <HotSellingPro producctItems={producctItems} />
      </div>
    </section>
  </>
  )
}
