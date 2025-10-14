import React, { useState ,createContext} from 'react'
import Child from "./Child1"
import "./App.scss"

const ThemeContext = createContext()

const App = () => {
  const [theme,setTheme] = useState("light")
  function changeTheme() {
    setTheme((prev)=>prev === "light"?"dark":"light")
    
  }
  return (
    <div className={theme}>

      <ThemeContext.Provider value={{theme,changeTheme}}>
        <Child/>
      </ThemeContext.Provider>
    </div>
  )
}

export {ThemeContext}
export default App