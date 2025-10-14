import React, { useMemo, useState } from 'react'

const App = () => {
  const[add,setAdd]= useState(0)
  const[sub,setSub]= useState(0)


  function handleAdd() {
    setAdd(add+1)
  }

  function handleSub() {
    setSub(sub-1)
  }

  const mul=useMemo(()=>{
    console.log("hey im here");
    return add*2
    
  },[add])


  return (
    <div>

      <h1>Add:{add}</h1>
      <h1>sub:{sub}</h1>
      <h1>mul:{mul}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </div>
  )
}

export default App