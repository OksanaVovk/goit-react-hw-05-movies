import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCasts } from 'fetchFilms';
import CastList from './CastList';

const Cast = () => {
  const [castArrey, setCastArrey] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === '') {
      return;
    } else {
      fetchCasts(movieId)
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
