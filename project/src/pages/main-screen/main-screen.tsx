import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import {MovieListModeCount, LogoPositionClass} from '../../const';
import MovieList from '../../components/movie-list/movie-list';
import GenreList from '../../components/genre-list/genre-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import {useAppSelector} from '../../hooks';
import Loading from '../../components/loading/loaging';
import UserBlock from '../../components/user-block/user-block';

type MainScreenProps = {
  title: string;
  genre: string;
  year: number;
}

function MainScreen({title, genre, year}: MainScreenProps): JSX.Element {
  const filteredMovies = useAppSelector((state) => state.filteredMovies);
  const movieCounter = useAppSelector((state) => state.movieCounter);
  const isButtonActive = filteredMovies.length > movieCounter;
  const isMoviesDataLoading = useAppSelector((state) => state.isMoviesDataLoading);

  return (
    <>
      {isMoviesDataLoading && <Loading />}
      <section className="film-card">
        <Helmet>
          <title>WTW. Main</title>
        </Helmet>
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo positionClass={LogoPositionClass.Header}/>
          <UserBlock />
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <MovieList
            mode={MovieListModeCount.Main}
          />
          {isButtonActive && <ShowMoreButton />}
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

export default MainScreen;
