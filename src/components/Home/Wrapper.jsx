import React from "react"
import "./Wrapper.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
    <section className="my-[10%]">
      <div class=" container px-5  mx-auto">
        <div class="  flex flex-wrap -m-4">
    {data.map((val, index) => {
            return (
                <div class=" lg:w-1/4 md:w-1/2 lg:p-2 p-4 ">
              <div className='product ' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
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
