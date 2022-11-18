import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {Fragment} from 'react';
import {Movie} from '../../types/movies';

dayjs.extend(duration);

type FilmDetailsProps = {
  movie: Movie;
}

function FilmDetails({movie}: FilmDetailsProps): JSX.Element {
  const {
    director,
    starring,
    runTime,
    genre,
    released
  } = movie;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starring.map((actor) => (
              <Fragment key={`${actor}`}>
                {actor}, <br />
              </Fragment>
            ))}
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">
            {dayjs.duration(runTime, 'minutes').format('H[h] mm[m]')}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmDetails;
