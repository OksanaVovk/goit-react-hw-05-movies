import { lazy } from 'react';
import SharedLayout from './SharedLayout';
import { Route, Routes, Navigate } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetail = lazy(() => import('../pages/MovieDetail'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
