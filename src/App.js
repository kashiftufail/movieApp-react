
// import { useState ,useEffect } from 'react';

import React from "react";
import { useEffect,useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import Movie from "./Movie";


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=25f29436"

const App = () => {

  const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

  const [movies,setMovies] = useState([]);

  const serachMovies = async (title) =>{

    const result = await fetch(`${API_URL}&s=${title}`);  
    const data = await result.json();
    setMovies(data.Search);
    console.log(data.Search)

  }

  useEffect( () => {
  
    serachMovies('Superman')

  },[])
  
  return (
    <div className="app">
      <h1>Movie Lisr</h1>
      <div className="srarch">
        <input placeholder="search for movie" value='superman' onChange={() => {}} />
        <img src="{SearchIcon}" alt="search" onClick={ ()=> {} } />
      </div>

      <div className="container">
        <Movie movie={movie1} />       
      </div>

    </div>
  );
}

export default App;
