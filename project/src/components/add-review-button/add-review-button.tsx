import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {REVIEW_PAGE} from '../../const';
import {useAppSelector} from '../../hooks';

function AddReviewButton (): JSX.Element {
  const movie = useAppSelector((state) => state.currentMovie);

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
