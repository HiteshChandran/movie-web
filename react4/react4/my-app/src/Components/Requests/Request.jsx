import React from 'react'

const api_key = "you_dumb_smash_your_head_if_no_tmdb_account"; // replace with your TMDB API key

const Request = {
  fetchPopularMovies: `popular?api_key=${api_key}&language=en-US&page=1`,
  fetchUpcomingMovies: `upcoming?api_key=${api_key}&language=en-US&page=1`,
  fetchTopRatedMovies: `top_rated?api_key=${api_key}&language=en-US&page=1`
}

export default Request
