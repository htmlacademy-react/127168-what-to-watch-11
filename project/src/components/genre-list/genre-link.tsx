import cn from 'classnames';
import {changeGenre, filterMovies, resetMovieCount } from '../../store/catalog-process/catalog-process';
import {Link} from 'react-router-dom';
import {getCurrentGenre} from '../../store/catalog-process/selectors';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { getMoviesData } from '../../store/movies-data/selectors';

type GenreLinkProps = {
  dataValue: string;
}

function GenreLink ({dataValue}: GenreLinkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getMoviesData);
  const currentGenre = useAppSelector(getCurrentGenre);

  const onGenreClick = () => {
    dispatch(changeGenre({currentGenre: dataValue}));
    dispatch(filterMovies({sourceMovies: movies}));
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
