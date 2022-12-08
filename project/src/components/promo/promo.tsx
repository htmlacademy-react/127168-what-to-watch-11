import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getPromoData} from '../../store/movies-data/selectors';
import {useAppSelector} from '../../hooks';
import MyListButton from '../my-list-button/my-list-button';

function Promo (): JSX.Element {
  const {
    backgroundImage,
    name,
    posterImage,
    genre,
    released
  } = useAppSelector(getPromoData);

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
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              {authorizationStatus === AuthorizationStatus.Auth && <MyListButton />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Promo;
