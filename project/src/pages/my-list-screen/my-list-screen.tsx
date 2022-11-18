import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import {MovieListModeCount, LogoPositionClass} from '../../const';
import {Movies} from '../../types/movies';
import MovieList from '../../components/movie-list/movie-list';

type MyListScreenProps = {
  movies: Movies;
}

function MyListScreen({movies}: MyListScreenProps): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. My list</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo positionClass={LogoPositionClass.Header}/>
        <h1 className="page-title user-page__title">
            My list <span className="user-page__film-count">9</span>
        </h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" href="#todo">Sign out</a>
          </li>
        </ul>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieList
          movies={movies}
          mode={MovieListModeCount.Main}
        />
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
