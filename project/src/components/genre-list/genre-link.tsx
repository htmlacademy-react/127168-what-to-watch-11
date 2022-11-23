// import cn from 'classnames';
import {Link} from 'react-router-dom';

type GenreLinkProps = {
  dataValue: string;
  captionValue: string;
}

// catalog__genres-item--active - класс активности

function GenreLink ({dataValue, captionValue}: GenreLinkProps): JSX.Element {
  return (
    <li
      className="catalog__genres-item"
    >
      <Link
        to=""
        className="catalog__genres-link"
        data-genre={dataValue}
      >
        {captionValue}
      </Link>
    </li>
  );
}

export default GenreLink;
