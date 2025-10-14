import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Row.css'
const baseURL = "https://api.themoviedb.org/3/"

const Row = ({ url, title }) => {
  const [movies, setMovies] = useState([])
  const navigate=useNavigate()
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`${baseURL}${url}`)
      setMovies(response.data.results)
    }

    if (url) {
      fetchMovies()
    }
  }, [url])
 
  function handleClick(id){
    navigate(`/movie/${id}`)
  }
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="scroll-container">
        {movies.map((item) => (
          <div className="poster-wrap" key={item.id} onClick={()=>handleClick(item.id)} tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter') handleClick(item.id)}}>
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`}
              alt={item.title || item.name || 'movie poster'}
            />
            <div className="poster-overlay">
              <div className="poster-title">{item.title || item.name}</div>
            </div>
            <div className="poster-actions" aria-hidden="true">
              <button className="action-btn play" onClick={(e)=>{e.stopPropagation(); window.location.hash = `trailer`;}}>▶</button>
              <div className="action-row">
                <button className="action-btn" onClick={(e)=>{e.stopPropagation(); handleClick(item.id)}}>Details</button>
                <button className="action-btn" onClick={(e)=>{e.stopPropagation(); /* TODO: add to list */}}>+ My List</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Row
