import React from "react";  
import "./App.scss";

const App = () => {
  function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  function lightMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  return (
    <div>
      <h1>Java script in react</h1>
      <button onClick={darkMode}>Dark</button>
      <button onClick={lightMode}>Light</button>
    </div>

  )
}
export default App;