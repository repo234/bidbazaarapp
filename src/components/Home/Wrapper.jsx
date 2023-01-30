import React from "react"
import "./Wrapper.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i className='fa-solid fa-truck-fast'></i>,
      title: "All over Delivery in Pakistan ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
    <section className="my-[6%]">
      <div className=" container px-5  mx-auto">
        <div className="  flex flex-wrap -m-4">
    {data.map((val, index) => {
            return (
                <div className=" lg:w-1/4 md:w-1/2 lg:p-2 p-4  ">
              <div className='product ' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3 className="font-semibold ">{val.title}</h3>
                <p>{val.decs}</p>
                 
      </div>
              </div>
            )
          })}
    

     
    </div>
  </div>
</section>
      
    </>
  )
}

export default Wrapper
