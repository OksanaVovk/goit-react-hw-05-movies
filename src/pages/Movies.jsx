import { useState, useEffect } from 'react';
import fetchFilm from 'fetchFilms';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSearchChange = event => {
    setInputValue(event.currentTarget.value.toLowerCase());
  };

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     if (inputValue === '') {
  //       return Notify.info('Please enter search data.');
  //     } else if (query) {
  //       onSubmit(query);
  //     } else {
  //       onSubmit(inputValue);
  //     }
  //     };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue === '') {
      return Notify.info('Please enter search data.');
    } else {
      setSearchWord(inputValue);
      setSearchParams({ query: inputValue });
    }
  };

  useEffect(() => {
    if (query) {
      setSearchWord(query);
    }
  }, [query]);

  useEffect(() => {
    if (searchWord === '') {
      return;
    } else {
      const KEY_API = '024bf82d4805f650033dc69997860333';
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&language=en-US&page=1&include_adult=false&query=${searchWord}`;
      fetchFilm(url)
        .then(movie => {
          setMoviesSearch(movie.results);
          setSearchWord('');
          setInputValue('');
        })
        .catch(error => console.log(error));
    }
  }, [searchWord]);

  return (
    <main>
      <form onClick={handleSubmit}>
        <input
          type="text"
          name="query"
          value={inputValue}
          onChange={handleSearchChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      <MovieList moviesAr={moviesSearch}></MovieList>
    </main>
  );
};

export default Movies;
