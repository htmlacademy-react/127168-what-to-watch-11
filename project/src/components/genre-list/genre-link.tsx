import {changeGenre, filterMovies, resetMovieCount} from '../../store/action';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';

type GenreLinkProps = {
  dataValue: string;
}

function GenreLink ({dataValue}: GenreLinkProps): JSX.Element {
  const currentGenre = useAppSelector((state) => state.currentGenre);
  const dispatch = useAppDispatch();

  const onGenreClick = () => {
    dispatch(changeGenre({selectedGenre: dataValue}));
    dispatch(filterMovies());
    dispatch(resetMovieCount());
  };

  return (
    <li
      className={cn(
        'catalog__genres-item',
        {'catalog__genres-item--active': dataValue === currentGenre}
      )}
    >
      <Link
        to=""
        className="catalog__genres-link"
        data-genre={dataValue}
        onClick={onGenreClick}
      >
        {dataValue}
      </Link>
    </li>
  );
}

export default GenreLink;
