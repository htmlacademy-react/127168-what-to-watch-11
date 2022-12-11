import {ChangeEvent, Fragment} from 'react';
import {RatingNumber} from '../../const';

type RatingStar = (starValue: number) => void;

type RatingProps = {
  rating: number;
  onRateStar: RatingStar;
}

const createStars = (rating: number, onRateStar: RatingStar): JSX.Element[] => {
  const stars: JSX.Element[] = [];

  for (let i = RatingNumber.MaxRating; i >= RatingNumber.MinRating; i--) {
    stars.push(
      <Fragment key={`star-${i}`}>
        <input
          className="rating__input"
          id={`star-${i}`}
          type="radio"
          name="rating"
          value={i}
          checked={rating === i}
          onChange={({target}: ChangeEvent<HTMLInputElement>) => {onRateStar(Number(target.value));}}
        />
        <label
          className="rating__label"
          htmlFor={`star-${i}`}
        >
          Rating {i}
        </label>
      </Fragment>
    );
  }

  return stars;
};

function Rating({rating, onRateStar}: RatingProps): JSX.Element {
  return (
    <div className="rating">
      <div className="rating__stars">
        {createStars(rating, onRateStar)}
      </div>
    </div>
  );
}

export default Rating;
