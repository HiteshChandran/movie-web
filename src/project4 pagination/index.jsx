import React, { useState } from 'react'
import Data from "./Data.json"

const index = () => {
    const recordsPerPage=10;
    const TotalPages= Math.ceil(Data.length/recordsPerPage)
    const[currentPage,setCurrentPage]= useState(1)

    function getRecords() {
        const firstIndex=(currentPage-1)*recordsPerPage;
        const lastIndex=firstIndex+recordsPerPage;
        const records=Data.slice(firstIndex,lastIndex)
        return records;
    }
    function handleNext() {
        setCurrentPage(currentPage+1)    
    }
    function handlePrev() {
         setCurrentPage(currentPage-1) 
    }
    

  return (
    <div>
        {getRecords().map((items,index)=>{
            return(
                <div>
                    {items.id} 
                    
                    {items.name}
                    
                </div>
            )}
    )}
     <button onClick={handlePrev} disabled={currentPage===1}>next</button>

    <button onClick={handleNext} disabled={currentPage===TotalPages}>prev</button>
   
    </div>
  )
}

export default index