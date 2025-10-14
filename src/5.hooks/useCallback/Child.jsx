import React from 'react'

const Child = ({dark}) => {
    console.log("im herere");
    
  return (
    <div>
        <button onClick={dark}>Dark</button>
    </div>
  )
}

export default React.memo(Child)