import FilmCard from '../film-card/film-card';
import {getCurrentMovie, getRecommendedMovies} from '../../store/current-movie-data/selectors';
import {INACTIVE_NUMBER_ID, MovieListModeCount} from '../../const';
import {Movie} from '../../types/movies';
import {useAppSelector} from '../../hooks';
import {useState} from 'react';
import { getCounter, getFilteredMovies } from '../../store/catalog-process/selectors';
import { getFavoriteMovies } from '../../store/movies-data/selectors';

type MovieListProps = {
  mode: MovieListModeCount;
}

function MovieList({mode}: MovieListProps): JSX.Element {
  const movie = useAppSelector(getCurrentMovie);
  const filteredMovies = useAppSelector(getFilteredMovies);
  const counter = useAppSelector(getCounter);
  const recommendedMovies = useAppSelector(getRecommendedMovies);
  const favoriteMovies = useAppSelector(getFavoriteMovies);

  const [activeCardId, setActiveCardId] = useState(INACTIVE_NUMBER_ID);
  const changeActiveCardId = (id: string): void => setActiveCardId(id);

  const prepareMovies = (preparingMode: MovieListModeCount) => {
    switch (preparingMode) {
      case MovieListModeCount.Main:
        return filteredMovies.slice(0, counter);
      case MovieListModeCount.Recommended:
        return recommendedMovies.filter((currentMovie) => (currentMovie.id !== movie.id))
          .slice(0, MovieListModeCount.Recommended);
      case MovieListModeCount.MyList:
        return favoriteMovies;
    }
  };

  return (
    <div className="catalog__films-list">
      {prepareMovies(mode)?.map(
        (currentMovie: Movie) => (
          <FilmCard
            key={currentMovie.id}
            movie={currentMovie}
            onHoverCurrentCard={changeActiveCardId}
            activeCardId={activeCardId}
          />
        )
      )}
    </div>
  );
}

export default MovieList;
