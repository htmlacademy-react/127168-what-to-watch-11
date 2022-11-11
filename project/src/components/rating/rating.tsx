import React, {ChangeEvent} from 'react';

const MIN_RATING = 1;
const MAX_RATING = 10;

type RatingStar = (starValue: number) => void;

type RatingProps = {
  rating: number;
  onRateStar: RatingStar;
}

const createStars = (rating: number, onRateStar: RatingStar): JSX.Element[] => {
  const stars: JSX.Element[] = [];

  for (let i = MAX_RATING; i >= MIN_RATING; i--) {
    stars.push(
      <React.Fragment key={i}>
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
      </React.Fragment>
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
