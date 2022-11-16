import {AppRoute, INACTIVE_NUMBER_ID} from '../../const';
import {Link} from 'react-router-dom';
import {Movie} from '../../types/movies';
import {useState} from 'react';
import VideoPreview from '../../components/video-preview/video-preview';

type FilmCardProps = {
  movie: Movie;
  onHoverCurrentCard: (id:string) => void;
  activeCardId: string;
}

function FilmCard({movie, onHoverCurrentCard, activeCardId}: FilmCardProps): JSX.Element {
  const [isPlayerActive, changePlayerActivity] = useState(false);
  const switchCardImage = () => changePlayerActivity(!isPlayerActive);

  const {id, name, previewImage, previewVideoLink} = movie;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onHoverCurrentCard(id)}
      onMouseLeave={() => onHoverCurrentCard(INACTIVE_NUMBER_ID)}
    >
      <div className="small-film-card__image">
        {activeCardId === id &&
          <VideoPreview
            link={previewVideoLink}
            isPlayerActive={isPlayerActive}
            switchCardImage={switchCardImage}
          />}
        {!isPlayerActive &&
          <img
            src={previewImage}
            alt={name}
            width="280"
            height="175"
          />}
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
