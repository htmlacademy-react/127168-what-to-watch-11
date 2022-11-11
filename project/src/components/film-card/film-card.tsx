import {Movie} from '../../types/movies';
import {INACTIVE_NUMBER_ID} from '../../const';

type FilmCardProps = {
  movie: Movie;
  onCurrentCard: (id:number) => void;
}

function FilmCard({movie, onCurrentCard}: FilmCardProps): JSX.Element {
  const {id, name, previewImage} = movie;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onCurrentCard(id)}
      onMouseLeave={() => onCurrentCard(INACTIVE_NUMBER_ID)}
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
        <a className="small-film-card__link" href="film-page.html">
          {name}
        </a>
      </h3>
    </article>
  );
}

export default FilmCard;
