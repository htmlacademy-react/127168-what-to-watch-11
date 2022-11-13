import {AppRoute, LogoPositionClass, REVIEW_PAGE} from '../../const';
import {Comments} from '../../types/comments';
// import FilmCard from '../../components/film-card/film-card';
import FilmOverview from '../../components/film-information/film-overview';
import {Helmet} from 'react-helmet-async';
import {Movie, Movies} from '../../types/movies';
import {Link, useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type MoviePageScreenProps = {
  movies: Movies;
  comments: Comments;
}

function MoviePageScreen({movies, comments}: MoviePageScreenProps): JSX.Element {
  const {id} = useParams();
  const movie = movies.find((item: Movie) => item.id === id);

  return movie ? (
    <>
      <section className="film-card film-card--full" style={{background: movie.backgroundColor}}>
        <Helmet>
          <title>WTW. {movie.name}</title>
        </Helmet>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={movie.backgroundImage}
              alt={movie.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo positionClass={LogoPositionClass.Header}/>
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width="63"
                    height="63"
                  />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link" href="#todo">Sign out</a>
              </li>
            </ul>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.genre}</span>
                <span className="film-card__year">{movie.released}</span>
              </p>
              <div className="film-card__buttons">
                <Link to={`${AppRoute.Player}${movie.id}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link
                  className="btn film-card__button"
                  to={`${AppRoute.Film}${movie.id}/${REVIEW_PAGE}`}
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={movie.posterImage}
                alt={`${movie.name} poster`}
                width="218"
                height="327"
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#todo" className="film-nav__link">
                  Overview
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#todo" className="film-nav__link">
                  Details
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#todo" className="film-nav__link">
                  Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              <FilmOverview movie={movie}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {/* <div className="catalog__films-list">
            {Array.from({length: 4}, FilmCard)}
          </div> */}
        </section>
        <footer className="page-footer">
          <Logo positionClass={LogoPositionClass.Footer}/>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  ) : <NotFoundScreen/>;
}


export default MoviePageScreen;
