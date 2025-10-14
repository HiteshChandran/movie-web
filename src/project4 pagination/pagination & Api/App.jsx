import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)   
  const recordsPerPage = 2                            

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((respons) => respons.json())
      .then((d) => setData(d.categories))
  }, []) 

  function getRecords() {
    const firstIndex = (currentPage - 1) * recordsPerPage
    const lastIndex = firstIndex + recordsPerPage
    const records = data.slice(firstIndex, lastIndex) 
    return records
  }

  const totalPages = Math.ceil(data.length / recordsPerPage)

  function handleNext() {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages)) 
  }

  function handlePrev() {
    setCurrentPage((prev) => Math.max(prev - 1, 1)) 
  }

  return (
    <div>
      {getRecords().map((item, index) => ( 
        <div key={index}>
          <center> <b> <p>{item.strCategory}</p> </b> </center>
         <center> <img src={item.strCategoryThumb} height={"250px"} width={"250px"} /></center>
        </div>
      ))}

      <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>

      <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
    </div>
  )
}

export default App
