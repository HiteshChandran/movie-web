import React from 'react'
import{ BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./Project 8 firebase auth/Signup"
import Login from "./Project 8 firebase auth/Login"
import Home from "./Project 8 firebase auth/Home"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App