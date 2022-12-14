import {ColumnSortType} from '../../const';
import {Comments} from '../../types/comments';
import Review from '../review/review';
import ReviewsEmpty from '../reviews-empty/reviews-empty';

type FilmReviewsProps = {
  comments: Comments;
};

function FilmReviews({comments}: FilmReviewsProps): JSX.Element {
  const renderReviews = (sortType: ColumnSortType) => (
    comments
      .filter((_, index) => (index + sortType) % 2)
      .map((comment) => (
        <Review
          key={comment.id}
          review={comment}
        />)
      )
  );

  return comments.length ? (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {renderReviews(ColumnSortType.Odd)}
      </div>
      <div className="film-card__reviews-col">
        {renderReviews(ColumnSortType.Even)}
      </div>
    </div>
  ) : <ReviewsEmpty />;
}

export default FilmReviews;
