import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getPromoData} from '../../store/movies-data/selectors';
import {useAppSelector} from '../../hooks';
import MyListButton from '../my-list-button/my-list-button';
import PlayerLink from '../player-link/player-link';

function Promo (): JSX.Element {
  const promoMovie = useAppSelector(getPromoData);
  const {
    backgroundImage,
    name,
    posterImage,
    genre,
    released,
    id
  } = promoMovie;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <>
      <div className="film-card__bg">
        <img
          src={backgroundImage}
          alt={name}
        />
      </div>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={posterImage}
              alt={name}
              width="218"
              height="327"
            />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>
            <div className="film-card__buttons">
              <PlayerLink movieID={id}/>
              {authorizationStatus === AuthorizationStatus.Auth && <MyListButton movie={promoMovie}/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Promo;
