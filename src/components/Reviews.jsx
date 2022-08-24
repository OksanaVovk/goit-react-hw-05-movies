import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchFilm from 'fetchFilms';
import ReviewsList from './ReviewsList';

const Reviews = () => {
  const [reviewsArrey, setReviewsArrey] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === '') {
      return;
    } else {
      const KEY_API = '024bf82d4805f650033dc69997860333';
      const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US&page=1`;
      fetchFilm(url)
        .then(review => {
          setReviewsArrey(review.results);
        })
        .catch(error => console.log(error));
    }
  }, [movieId]);
  console.log(reviewsArrey);

  return (
    <section>
      <ReviewsList revArrey={reviewsArrey} />
    </section>
  );
};

export default Reviews;
