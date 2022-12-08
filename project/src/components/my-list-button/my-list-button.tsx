import {getFavoriteMovies} from '../../store/movies-data/selectors';
import {useAppSelector} from '../../hooks';

function MyListButton (): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteMovies);

  return (
    <button className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add" />
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

export default MyListButton;
