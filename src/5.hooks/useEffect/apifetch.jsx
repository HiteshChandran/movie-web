import React, { useEffect, useState } from 'react'


const App = () => {
  const[data,setData]= useState([])
  useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((respons)=>respons.json())
    .then((d)=>setData(d.categories))
  })
  return (
    <div>
        {
          data.map((item,index)=>{
            return(
              <div key={item,index}>
                <p>{item.strCategory}</p>
                <img src={item.strCategoryThumb} height={"50%"} width={"50%"} />

              </div>
            )
          })
        }
    </div>
  )
}

export default App