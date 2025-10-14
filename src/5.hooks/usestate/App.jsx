import React, { useState } from 'react'

const App = () => {
  const[isOpen,setIsOpen]=useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {

    setIsOpen(false)
    
  }
  return (
    <div>
      <button onClick={open}>open</button>
      {
        isOpen &&
        <div > <h1>hey u got me</h1>
        <button onClick={close}>close</button>
        </div>
      }
    </div>
  )
}

export default App