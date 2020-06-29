import * as React from "react";
import { useState, useEffect } from "react";

import "../App.css";

import Header from "../common/Header";
import Movie from "./Movie";
import Search from "./Search";

interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=59a43818";

const App = () => {
  const [movies, setMovies] = useState([] as IMovie[]);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
      });
  });

  return (
    <div className="container">
      <Header text="mini-movie-app" />
      <Search />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {movies.map(movie => (
          <Movie key={movie.Title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
