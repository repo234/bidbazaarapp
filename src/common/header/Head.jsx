import React from "react"

const Head = () => {
  
  return (
    <>
      <section className='bg-orange  text-white '>
        <div className='container  d_flex '>
          <div className='md:left  mt-3 md:row'>
            <i className='m-1 fa  fa-phone'></i>
            <label className="text-m mr-6 "> +88012 3456 7894</label>
            <i className='m-1  fa   fa-envelope'></i>
            <label className="text-m "> support@ui-lib.com</label>
          </div>
          <div className='right md:row md:RText mt-3'>
            <label >Need Help?</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
