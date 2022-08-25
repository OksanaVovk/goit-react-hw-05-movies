import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchFilm from 'fetchFilms';
import CastList from './CastList';

const Cast = () => {
  const [castArrey, setCastArrey] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === '') {
      return;
    } else {
      const KEY_API = '024bf82d4805f650033dc69997860333';
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY_API}&language=en-US`;
      fetchFilm(url)
        .then(actors => {
          setCastArrey(actors.cast);
        })
        .catch(error => console.log(error));
    }
  }, [movieId]);

  return (
    <section>
      <CastList castAr={castArrey} />
    </section>
  );
};
export default Cast;
