import React from 'react'
import Request from './Components/Requests/Request'
import Row from './Components/Row/Row'
import "./App.css"

const App = () => {
  return (
    <div>
      <Row url={Request.fetchPopularMovies} title="Popular Movies" />
      <Row url={Request.fetchUpcomingMovies} title="Upcoming Movies" />
      <Row url={Request.fetchTopRatedMovies} title="Top Rated Movies" />
    </div>
  )
}

export default App
