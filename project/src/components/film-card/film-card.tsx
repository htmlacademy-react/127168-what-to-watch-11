import {AppRoute, INACTIVE_NUMBER_ID} from '../../const';
import {Link} from 'react-router-dom';
import {Movie} from '../../types/movies';

type FilmCardProps = {
  movie: Movie;
  onHoverCurrentCard: (id:string) => void;
}

function FilmCard({movie, onHoverCurrentCard}: FilmCardProps): JSX.Element {
  const {id, name, previewImage} = movie;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onHoverCurrentCard(id)}
      onMouseLeave={() => onHoverCurrentCard(INACTIVE_NUMBER_ID)}
    >
      <div className="small-film-card__image">
        <img
          src={previewImage}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`${AppRoute.Film}${id}`}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
