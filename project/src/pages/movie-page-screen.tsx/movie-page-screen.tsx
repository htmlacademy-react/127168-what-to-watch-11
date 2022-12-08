import AddReviewButton from '../../components/add-review-button/add-review-button';
import {
  AppRoute,
  AuthorizationStatus,
  LogoPositionClass,
  MINIMUM_RECOMMENDED_FILMS,
  MovieListModeCount,
} from '../../const';
import {fetchCurrentMovieDataAction} from '../../store/api-actions';
import FilmTabs from '../../components/film-tabs/film-tabs';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getCurrentMovie, getRecommendedMovies} from '../../store/current-movie-data/selectors';
import {getError404Status} from '../../store/service-state-process/selectors';
import {Helmet} from 'react-helmet-async';
import {Link, useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import MovieList from '../../components/movie-list/movie-list';
import MyListButton from '../../components/my-list-button/my-list-button';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {selectUserBlock} from '../../user-block-selector';
import {setDefaultCurrentMovieData} from '../../store/current-movie-data/current-movie-data';
import {setError404} from '../../store/service-state-process/service-state-process';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';

function MoviePageScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(getCurrentMovie);
  const recommendedMovies = useAppSelector(getRecommendedMovies);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isError404 = useAppSelector(getError404Status);
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentMovieDataAction(id));
    }

    return () => {
      dispatch(setDefaultCurrentMovieData());
      dispatch(setError404(false));
    };
  }, [dispatch, id]);

  if (isError404) {
    return <NotFoundScreen />;
  }

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
                <MyListButton />
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
