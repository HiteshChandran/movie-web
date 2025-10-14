import React, { useEffect, useState } from 'react'

const App = () => {
  const[data,setData]= useState([])
  const[search,setSearch] = useState("")

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then((d)=>setData(d))
  },[])
  return (
    <div>
      <input onChange={(e)=>setSearch(e.target.value)} placeholder='search products'/>
      {
        data
        .filter((item,index)=>item.title.toLowerCase().includes(search))
        .map((item,index)=>{
          return(
            <div key={item.id}>
              <div>{item.title}</div>
              <img src={item.image} height={"250px"} width={"250px"}/>

            </div>
          )
        })
      }
    </div>
  )
}

export default App