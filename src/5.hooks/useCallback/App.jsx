import React, { useCallback, useState } from 'react'
import Child from "./Child"

const App = () => {
  const[add,setAdd]= useState(0)

  function handleAdd() {
    setAdd(add+1)
    
  }

  const dark= useCallback(()=>{
    let body=document.body;
    body.style.backgroundColor="black";
    body.style.color="white";
  },[])
  return (
    <div>
      <h1>add:{add}</h1>
      <button onClick={handleAdd}>add</button>
      <Child dark={dark}/>
    </div>
  )
}

export default App