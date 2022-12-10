import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type PlayerLinkProps = {
  movieID: string;
}

function PlayerLink ({movieID}: PlayerLinkProps): JSX.Element {
  return (
    <Link
      to={`${AppRoute.Player}${movieID}`}
      className="btn btn--play film-card__button"
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </Link>
  );
}

export default PlayerLink;
