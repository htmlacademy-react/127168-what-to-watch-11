import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getFavoriteMovies} from '../../store/movies-data/selectors';
import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import MovieList from '../../components/movie-list/movie-list';
import {MovieListModeCount, LogoPositionClass} from '../../const';
import {selectUserBlock} from '../../user-block-selector';
import {useAppSelector} from '../../hooks';

function MyListScreen(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteMovies = useAppSelector(getFavoriteMovies);

  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. My list</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo positionClass={LogoPositionClass.Header}/>
        <h1 className="page-title user-page__title">
            My list <span className="user-page__film-count">{favoriteMovies.length}</span>
        </h1>
        {selectUserBlock(authorizationStatus)}
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {
          favoriteMovies.length === 0 ?
            <p>There are no favorite movies</p> :
            <MovieList
              mode={MovieListModeCount.MyList}
            />
        }
      </section>
      <footer className="page-footer">
        <Logo positionClass={LogoPositionClass.Footer}/>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;
