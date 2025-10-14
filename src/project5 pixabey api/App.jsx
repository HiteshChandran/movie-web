import React, { useEffect, useState } from 'react'
import "./App.scss"

const App = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("yellow flowers") // ✅ default search
  const [page, setPage] = useState(1) // ✅ track current page
  const perPage = 10                  // ✅ how many results per page

  useEffect(() => {
    // ✅ API link updated with page & per_page
    fetch(`https://pixabay.com/api/?key=52345682-9fcaef0a7c644820ebd75d430&q=${encodeURIComponent(search)}&image_type=photo&page=${page}&per_page=${perPage}`)
      .then(res => res.json())
      .then(d => setData(d.hits))
  }, [search, page]) // ✅ re-run when search or page changes

  return (
    <div>
      {/* ✅ typing updates search term, reset page to 1 */}
      <input 
        onChange={(e) => {
          setSearch(e.target.value)
          setPage(1)
        }} 
        placeholder='search here' 
      />

      {/* ✅ show images */}
      <div className='main'>
        {
        data.map((item) => (
          <div key={item.id}>
            <img src={item.webformatURL} alt={item.tags} width={200}/>
          </div>
        ))
      }
      </div>

      {/* ✅ pagination buttons */}
      <div style={{ marginTop: "20px" }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}> Page {page} </span>
        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  )
}

export default App
