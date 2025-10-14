import React, {useReducer} from 'react'


const App = () => {
  const initializerArg = 0
  function reducer(state,action) {
    switch (action) {
      case "add":
        return state + 1

      case "sub":
        return state - 1
        
      case "mul":
        return state *2
    
      default:
        return state;

    }
    
  }
  const [state, dispatch] = useReducer(reducer, initializerArg)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch("add")}>Add</button>
      <button onClick={()=>dispatch("sub")} >Sub</button>
      <button onClick={()=> dispatch("mul")}>Mul</button>

    </div>
  )
}

export default App