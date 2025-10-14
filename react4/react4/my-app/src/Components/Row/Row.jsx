import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = "https://api.themoviedb.org/3/movie/"

const Row = ({ url, title }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`${baseURL}${url}`)
      setMovies(response.data.results)
    }

    if (url) {
      fetchMovies()
    }
  }, [url])

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="scroll-container">
        {movies.map((item) => (
          <img
            key={item.id}
            src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            height="200px"
            width="300px"
          
          />
        ))}
      </div>
    </div>
  )
}

export default Row
