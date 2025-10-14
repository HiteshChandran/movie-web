import React, { useContext } from 'react'
import { ThemeContext } from './App'

const Child1 = () => {

    const {theme,changeTheme} = useContext(ThemeContext)
  return (
    <div>
        <h1>im hitesh here how are you????</h1>
        <button onClick={changeTheme}>{theme === "light"?"light":"dark"}</button>

    </div>
  )
}

export default Child1