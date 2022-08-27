import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'fetchFilms';
import ReviewsList from './ReviewsList';

const Reviews = () => {
  const [reviewsArrey, setReviewsArrey] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === '') {
      return;
    } else {
      fetchReviews(movieId)
        .then(review => {
          setReviewsArrey(review.results);
        })
        .catch(error => console.log(error));
    }
  }, [movieId]);

  return (
    <section>
      <ReviewsList revArrey={reviewsArrey} />
    </section>
  );
};

export default Reviews;
