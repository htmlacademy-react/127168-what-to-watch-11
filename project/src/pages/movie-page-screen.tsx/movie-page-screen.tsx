import AddReviewButton from '../../components/add-review-button/add-review-button';
import {
  AppRoute,
  AuthorizationStatus,
  LogoPositionClass,
  MINIMUM_RECOMMENDED_FILMS,
  MovieListModeCount,
} from '../../const';
import {
  fetchCurrentCommentsAction,
  fetchCurrentMovieAction,
  fetchRecomendedMoviesAction
} from '../../store/api-actions';
import FilmTabs from '../../components/film-tabs/film-tabs';
import {Helmet} from 'react-helmet-async';
import {Link, useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import MovieList from '../../components/movie-list/movie-list';
import {selectUserBlock} from '../../user-block-selector';
import {setDefaultCurrentMovieData} from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';

function MoviePageScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.currentMovie);
  const recommendedMovies = useAppSelector((state) => state.recommendedMovies);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentMovieAction(id));
      dispatch(fetchCurrentCommentsAction(id));
      dispatch(fetchRecomendedMoviesAction(id));
    }

    return () => {
      dispatch(setDefaultCurrentMovieData());
    };
  }, [dispatch, id]);

  return (
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
            {selectUserBlock(authorizationStatus)}
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
                {authorizationStatus === AuthorizationStatus.Auth && <AddReviewButton />}
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
            <FilmTabs />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">
            {
              recommendedMovies.length > MINIMUM_RECOMMENDED_FILMS ?
                'More like this' :
                'There are no recommended films'
            }
          </h2>
          <MovieList
            mode={MovieListModeCount.Recommended}
          />
        </section>
        <footer className="page-footer">
          <Logo positionClass={LogoPositionClass.Footer}/>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}


export default MoviePageScreen;
