// import { lazy } from 'react';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Link } from './App-styled';
import Home from 'pages/Home';
import MovieDetail from 'pages/MovieDetail';
import Movies from 'pages/Movies';
import Cast from './Cast';
import Reviews from './Reviews';

// const createAsyncComponent = path => lazy(() => import(path));
// const Home = createAsyncComponent('../pages/Home');
// const Movies = createAsyncComponent('../pages/Movies');
// const MovieDetail = createAsyncComponent('../pages/MovieDetail');
// const Cast = createAsyncComponent('./Cast');
// const Reviews = createAsyncComponent('./Reviews');

export const App = () => {
  const [movieId, setMovieId] = useState(null);
  const onMovieClick = id => {
    setMovieId(id);
  };
  console.log(movieId);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home onMovieCl={onMovieClick} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetail id={movieId} />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
