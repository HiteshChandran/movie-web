import React, { useState } from 'react'

const App = () => {
  const images=["https://cdn.pixabay.com/photo/2024/04/08/14/00/buildings-8683532_1280.jpg","https://cdn.pixabay.com/photo/2025/08/09/16/51/wildlife-9764923_1280.jpg","https://cdn.pixabay.com/photo/2025/06/22/19/27/back-lit-9674838_1280.jpg"]
  const [currentIndex,setCurrentIndex]=useState(0)

  function handleNext() {
    setCurrentIndex((currentIndex+1)%images.length)
  }

  function handlePrevious() {
    setCurrentIndex((currentIndex-1+images.length)%images.length)
  }

  return (
    <div>
      <center><img src={images[currentIndex]} height={"300px"} width={"300px"} alt="" />
      <button onClick={handleNext}>next</button>
      <button onClick={handlePrevious}>previous</button>
      </center>
    </div>
  )
}

export default App