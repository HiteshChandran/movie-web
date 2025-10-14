import React,{ useState } from 'react'
import "./App.scss"
import Sachin from "./assets/Sachin.jpeg"
import Dhoni from "./assets/msd.jpeg"
import Rohit from "./assets/rohit.jpeg"
import Hardik from "./assets/hardik.jpeg"
import Virat from "./assets/vk.jpeg"
import Jaddu from "./assets/jaddu.jpeg"

const notification=[{name:"Sachin",age:25,image:Sachin},{name:"dhoni",age:30,image:Dhoni},{name:"rohit",age:"29",image:Rohit},{name:"Virat",age:27,image:Virat},{name:"hardik",age:"25",image:Hardik},{name:"jadeja",age:22,image:Jaddu}]

const App = () => {
    const [data,setData]=useState(notification);

  return (
    <div className='bg'>
        <div className='container'>
            <h1>Todays  birthday  {data.length}</h1>
        {data.map((item,index)=>{
            return(
                <div key={index} className='items'>
                    <img src={item.image} />
                    
                  <div className='text'>
                      <h2>{item.name}  </h2>
                    <p>{item.age} years old</p>
                  </div>
                    
                </div>
            )
        }
        )}
        <button onClick={()=>setData([])}>clear all</button>
        </div>
        
    </div>
  )
}

export default App