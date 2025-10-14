import React,{ UseState } from 'react'
const notification=[{name:"sachin"},{name:"dhoni"},{name:"rohit"},{name:"virat"},{name:"hardik"},{name:"jadeja"},{name:"bumrah"},{name:"ashwin"},{name:"shami"},{name:"siraj"}]

const UseState1 = () => {
    const [data,setData]=UseState(notification);

  return (
    <div>
        <h1>Todays  birthday{data.length}</h1>
        {data.map((item,index)=>{
            return(
                <div key={index}>
                    
                    <p>{item.name}</p>
                </div>
            )
        }
        )}
        <button onClick={()=>setData([])}>clear all</button>
    </div>
  )
}

export default UseState1