import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import fetchFilm from 'fetchFilms';

const MovieDetail = () => {
  const [movieDet, setMovieDet] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    if (movieId === '') {
      return;
    } else {
      const KEY_API = '024bf82d4805f650033dc69997860333';
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY_API}&language=en-US`;
      fetchFilm(url)
        .then(movie => {
          setMovieDet(movie);
        })
        .catch(error => console.log(error));
    }
  }, [movieId]);

  const { title, name, poster_path, genres, overview, vote_average } = movieDet;
  console.log(movieDet);
  if (movieDet === []) {
    return;
  } else {
    return (
      <main>
        <Link to={backLinkHref}>Go back</Link>
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
        <ul>
          Additional information
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </main>
    );
  }
};

export default MovieDetail;
