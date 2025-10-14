
import React from 'react'

const child = ({name,place,changeTheme}) => {
  return (
    <div>
        <h1>my name is {name} and im from {place}</h1>
        <button onClick={changeTheme}>Dark</button>
    </div>
  )
}

export default child