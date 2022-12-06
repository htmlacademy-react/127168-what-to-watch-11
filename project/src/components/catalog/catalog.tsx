import {filterMovies} from '../../store/catalog-process/catalog-process';
import GenreList from '../genre-list/genre-list';
import {getCounter, getFilteredMovies} from '../../store/catalog-process/selectors';
import {getMoviesData} from '../../store/movies-data/selectors';
import MovieList from '../movie-list/movie-list';
import {MovieListModeCount} from '../../const';
import ShowMoreButton from '../show-more-button/show-more-button';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';

function Catalog (): JSX.Element {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getMoviesData);
  const counter = useAppSelector(getCounter);
  const filteredMovies = useAppSelector(getFilteredMovies);

  const isButtonActive = filteredMovies.length > counter;

  useEffect(() => {
    dispatch(filterMovies({sourceMovies: movies}));
  }, [dispatch, movies]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList />
      <MovieList
        mode={MovieListModeCount.Main}
      />
      {isButtonActive && <ShowMoreButton />}
    </section>
  );
}

export default Catalog;
