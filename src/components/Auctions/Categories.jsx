import React from "react"

const Categories = () => {
  const data = [
    {
      
      cateName: "Fashion",
    },
    {
     
      cateName: "Electronic",
    },
    {
     
      cateName: "Cars",
    },
    {
      
      cateName: "Home & Garden",
    },
    {
    
      cateName: "Gifts",
    },
    {
   
      cateName: "Music",
    },
    {
     
      cateName: "Health & Beauty",
    },
    {
     cateName: "Pets",
    },
    {
    
      cateName: "Baby Toys",
    },
    {
     
      cateName: "Groceries",
    },
    {
      
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
             
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
