import cn from 'classnames';
import {FavoritePost, Movie} from '../../types/movies';
import {getDataPostingStatus} from '../../store/service-state-process/selectors';
import {getFavoriteMovies} from '../../store/movies-data/selectors';
import {postFavoriteFilm} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import './my-list-button.css';

type MyListButtonProps = {
  movie: Movie;
};

function MyListButton ({movie: {id, isFavorite}}: MyListButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteMovies);
  const isPosting = useAppSelector(getDataPostingStatus);

  const filmData: FavoritePost = {
    filmId: id,
    isFavorite: !isFavorite,
  };

  return (
    <button
      className={cn(
        'btn',
        'btn--list',
        'film-card__button',
        {'film-card__button--disabled': isPosting}
      )}
      type="button"
      disabled={isPosting}
      onClick={() => {
        dispatch(postFavoriteFilm(filmData));
      }}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'} />
      </svg>
      <span>{isPosting ? 'Wait' : 'My list'}</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

export default MyListButton;
