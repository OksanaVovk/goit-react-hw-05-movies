import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchFilm from 'fetchFilms';

const Home = ({ onMovieCl }) => {
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
  console.log(moviesTrand);
  return (
    <div>
      <ul>
        {moviesTrand.map(movie => (
          <Link
            to="/movies/:movieId"
            key={movie.id}
            onClick={() => onMovieCl(movie.id)}
          >
            {movie.title ? movie.title : movie.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
