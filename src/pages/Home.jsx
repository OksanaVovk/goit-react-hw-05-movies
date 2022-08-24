import { useState, useEffect } from 'react';
import fetchFilm from 'fetchFilms';
import MovieList from 'components/MovieList';

const Home = () => {
  const [moviesTrand, setMoviesTrand] = useState([]);

  useEffect(() => {
    const KEY_API = '024bf82d4805f650033dc69997860333';
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY_API}`;
    fetchFilm(url)
      .then(movie => {
        setMoviesTrand(movie.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <MovieList moviesAr={moviesTrand} />
    </main>
  );
};

export default Home;
