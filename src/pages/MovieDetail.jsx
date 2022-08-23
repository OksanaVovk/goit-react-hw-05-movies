import { useState, useEffect } from 'react';
import fetchFilm from 'fetchFilms';

const MovieDetail = ({ id }) => {
  const [movieDet, setMovieDet] = useState([]);
  useEffect(() => {
    if (id === '') {
      return;
    } else {
      const KEY_API = '024bf82d4805f650033dc69997860333';
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY_API}&language=en-US`;
      fetchFilm(url)
        .then(movie => {
          setMovieDet(movie);
        })
        .catch(error => console.log(error));
    }
  }, [id]);

  console.log(movieDet);
  const { title, name, poster_path, genres, overview, vote_average } = movieDet;

  if (movieDet === []) {
    return;
  } else {
    return (
      <div>
        <img
          src={
            poster_path !== undefined
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://mysteriouswritings.com/wp-content/uploads/2017/02/movie.jpg`
          }
          alt=""
        />
        <div>
          <h1>{title ? title : name}</h1>
          <p>
            User Score:<span>{vote_average}</span>
          </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genre</h3>
          <p>
            {genres
              ? genres.map(genre => {
                  return genre.name + ' ';
                })
              : ' '}
          </p>
        </div>
      </div>
    );
  }
};

export default MovieDetail;
