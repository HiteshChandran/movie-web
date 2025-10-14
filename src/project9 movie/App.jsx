import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Request from './project9 movie/Components/Requests/Request';
import Row from './project9 movie/Components/Row/Row';
import Nav from "./project9 movie/Components/Navbar/Navbar";
import SearchRow from './project9 movie/Components/Row/SearchRow';
import Header from './project9 movie/Components/Header/index';
// 'Movie page' folder name contains a space in the repo — import must match the folder name
import MoviePage from "./project9 movie/Components/Movie page/index";

import "./App.css";


const baseURL = "https://api.themoviedb.org/3/";

const App = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const doSearch = async () => {
      if (!search.trim()) {
        setSearchList([]);
        return;
      }
      try {
        const res = await axios.get(`${baseURL}${Request.searchMovies(search)}`);
        console.log('Search response:', res.data);
        setSearchList(res.data.results || []);
      } catch (err) {
        console.error('Search API error:', err);
        setSearchList([]);
      }
    };

    doSearch();
  }, [search]);

  return (
    <div>
      <BrowserRouter>
        <Nav setsearch={setSearch} />

        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                {/* Show Header only when no search */}
                {!search.trim() && (
                  <Header url={Request.fetchPopularMovies} />
                )}

                {/* Search Results */}
                {search.length > 0 ? (
                  <SearchRow title={search} searchList={searchList} />
                ) : (
                  ""
                )}

                {/* Movie Rows */}
                <Row url={Request.fetchPopularMovies} title="Popular Movies" />
                <Row url={Request.fetchUpcomingMovies} title="Upcoming Movies" />
                <Row url={Request.fetchTopRatedMovies} title="Top Rated Movies" />
              </>
              
            }
          />
        <Route path="/movie/:id" element={<MoviePage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
