import { useState, useEffect } from 'react';
import { fetchPopularFilms } from 'servises';
import MovieList from 'components/MovieList';

const Home = () => {
  const [moviesTrand, setMoviesTrand] = useState([]);

  useEffect(() => {
    fetchPopularFilms()
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
