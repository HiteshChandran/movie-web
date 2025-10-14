import React, { useRef } from 'react'

const App = () => {
  const inputRef= useRef(null)

  function handleClick(){
    inputRef.current.focus()
    console.log(inputRef);
    console.log(inputRef.current.value);
    
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default App