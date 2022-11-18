import dayjs from 'dayjs';
import {Comment} from '../../types/comments';

type ReviewProps = {
  review: Comment;
};

function Review({review}: ReviewProps): JSX.Element {
  const {comment, user: {name}, date, rating} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time
            className="review__date"
            dateTime={dayjs(date).format('YYYY-MM-DD')}
          >
            {dayjs(date).format('MMMM DD, YYYY')}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
