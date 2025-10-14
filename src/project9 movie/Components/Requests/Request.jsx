import React from 'react'

const api_key = "f289e853081c540efd70ec89b382b275"; // replace with your TMDB API key

const Request = {
  fetchPopularMovies: `movie/popular?api_key=${api_key}&language=en-US&page=1`,
  fetchUpcomingMovies: `movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
  fetchTopRatedMovies: `movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
  searchMovies: (query) => `search/movie?api_key=${api_key}&language=en-US&query=${encodeURIComponent(query)}`
};

export default Request;
