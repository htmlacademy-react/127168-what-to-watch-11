import {Movie} from '../../types/movies';

type FilmOverviewProps = {
  movie: Movie;
}

function FilmOverview({movie}: FilmOverviewProps): JSX.Element {
  const {
    description,
    director,
    rating,
    starring
  } = movie;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          {/* Это пока не понял, как заполнять */}
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>
          {description}
        </p>
        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
          Starring: {starring.join(', ')} and other
          </strong>
        </p>
      </div>
    </>
  );
}

export default FilmOverview;
