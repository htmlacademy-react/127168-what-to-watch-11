import {AppRoute} from '../../const';
import {getCurrentMovie} from '../../store/current-movie-data/selectors';
import {Link} from 'react-router-dom';
import {REVIEW_PAGE} from '../../const';
import {useAppSelector} from '../../hooks';

function AddReviewButton (): JSX.Element {
  const movie = useAppSelector(getCurrentMovie);

  return (
    <Link
      className="btn film-card__button"
      to={`${AppRoute.Film}${movie.id}/${REVIEW_PAGE}`}
    >
      Add review
    </Link>
  );
}


export default AddReviewButton;
