import React, { useState } from 'react'

const App = () => {
  const[name,setname] = useState("")
  return (
    <div>
      <input onChange={(e)=>setname(e.target.value)} />
      <h1> My name is {name} </h1>
    </div>
  )
}

export default App