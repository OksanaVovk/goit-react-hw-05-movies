import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Movies = ({ onSubmit, moviesArrey }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSearchChange = event => {
    setInputValue(event.currentTarget.value.toLowerCase());
    setSearchParams({ query: event.currentTarget.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue === '') {
      return Notify.info('Please enter search data.');
    } else if (query) {
      onSubmit(query);
    } else {
      onSubmit(inputValue);
    }
  };

  return (
    <main>
      <form onClick={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleSearchChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      <MovieList moviesAr={moviesArrey}></MovieList>
    </main>
  );
};

export default Movies;
