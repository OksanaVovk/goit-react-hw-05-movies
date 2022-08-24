import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ moviesAr }) => {
  const location = useLocation();
  return (
    <ul>
      {moviesAr.map(movie => (
        <li>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            key={movie.id}
          >
            {movie.title ? movie.title : movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
