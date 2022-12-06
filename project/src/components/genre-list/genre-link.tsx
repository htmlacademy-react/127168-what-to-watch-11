import cn from 'classnames';
import {Link} from 'react-router-dom';

type GenreLinkProps = {
  dataValue: string;
}

function GenreLink ({dataValue}: GenreLinkProps): JSX.Element {
  // TODO - состояние смены жанра
  // const currentGenre = useAppSelector((state) => state.currentGenre);

  // TODO - обработать смену жанра и фильтр
  // const onGenreClick = () => {
  //   dispatch(changeGenre({selectedGenre: dataValue}));
  //   dispatch(filterMovies());
  //   dispatch(resetMovieCount());
  // };

  return (
    <li
      className={cn(
        'catalog__genres-item',
        // TODO - логика активной ссылки
        // {'catalog__genres-item--active': dataValue === currentGenre}
      )}
    >
      <Link
        to=""
        className="catalog__genres-link"
        data-genre={dataValue}
        // onClick={onGenreClick}
      >
        {dataValue}
      </Link>
    </li>
  );
}

export default GenreLink;
