import { lazy, Suspense } from 'react';
// import { useState, useEffect } from 'react';
// import fetchFilm from 'fetchFilms';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Link } from './App-styled';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetail = lazy(() => import('../pages/MovieDetail'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  // const [searchWord, setSearchWord] = useState('');
  // const [moviesSearch, setMoviesSearch] = useState([]);

  // const handleFormSubmit = searchWord => {
  //   setSearchWord(searchWord);
  // };

  // useEffect(() => {
  //   if (searchWord === '') {
  //     return;
  //   } else {
  //     const KEY_API = '024bf82d4805f650033dc69997860333';
  //     const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&language=en-US&page=1&include_adult=false&query=${searchWord}`;
  //     fetchFilm(url)
  //       .then(movie => {
  //         setMoviesSearch(movie.results);
  //       })
  //       .catch(error => console.log(error));
  //   }
  // }, [searchWord]);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
