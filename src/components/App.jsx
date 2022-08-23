import { lazy, Suspense } from 'react';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Link } from './App-styled';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetail = lazy(() => import('../pages/MovieDetail'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home onMovieCl={onMovieClick} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetail id={movieId} />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
