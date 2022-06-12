import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Cards from './components/Cards';
import BackToTop from './components/BackToTop';

import './App.css';

//5db94f24
const api_url = 'https://www.omdbapi.com?apikey=5db94f24';

function App() {
  //set states for movies and the search term
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  //load defalt movies at the beginning
  useEffect(() => {
    searchMovies('star wars');
  }, []);

  //fetch movies through API
  const searchMovies = async (title) => {
    const res = await fetch(`${api_url}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  };

  //handle eventlistener
  function handleClick() {
    searchMovies(searchTerm);
  }

  //handle eventlistener
  function handleChange() {
    setSearchTerm(document.getElementById('search-bar').value);
  }

  //event for BackToTop button
  function toTop() {
    window.scrollTo(0, 0);
  }

  //set array of card components
  const cardList = movies ? (
    movies.map((movie) => {
      return (
        <Cards
          key={movie.Poster}
          id={`https://www.imdb.com/title/${movie.imdbID}/`}
          poster={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/300x400.png?text=Image+Not+Found'
          }
          title={movie.Title}
          year={movie.Year}
          type={movie.Type}
        />
      );
    })
  ) : (
    <div className='empty'>
      <h1 className='col-12'>No moives found...</h1>
    </div>
  );

  return (
    <div className='app'>
      <Header handleClick={handleClick} handleChange={handleChange} />
      <div className='row cards-container'>{cardList}</div>
      <BackToTop toTop={toTop} />
    </div>
  );
}

export default App;
