import React from 'react'
import Child from './4.Props/Child'
const App = () => {
  const name="Hitesh"
  const place="India"

  function changeTheme(){
    document.body.style.backgroundColor="black"
    document.body.style.color="white" 

  }
  return (
    <div>
      <Child name={name} place={place} changeTheme={changeTheme}/>

    </div>
  )
}

export default App