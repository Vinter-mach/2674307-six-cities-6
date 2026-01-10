import ReviewItem from './ReviewItem.tsx';
import {Review} from '../mocks/reviews.ts';

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewList({reviews}: ReviewsListProps) {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
