import FilmCard from '../film-card/film-card';
import {getCurrentMovie, getRecommendedMovies} from '../../store/current-movie-data/selectors';
import {getMoviesData} from '../../store/movies-data/selectors';
import {INACTIVE_NUMBER_ID, MovieListModeCount} from '../../const';
import {Movie} from '../../types/movies';
import {useAppSelector} from '../../hooks';
import {useState} from 'react';

type MovieListProps = {
  mode: MovieListModeCount;
}
// TODO - продумать фильтрацию
// const onFilterMovies = (state: typeof initialState) => {
//   if (state.currentGenre === ALL_GENRES_LINK) {
//     state.filteredMovies = [...state.sourceMovies];
//   } else {
//     state.filteredMovies = state.sourceMovies.filter(
//       (currentMovie) => (
//         currentMovie.genre === state.currentGenre
//       )
//     );
//   }
// };

function MovieList({mode}: MovieListProps): JSX.Element {
  // TODO - временно. Здесь будут отфильтрованные фильмы
  const movie = useAppSelector(getCurrentMovie);
  const filteredMovies = useAppSelector(getMoviesData);
  const recommendedMovies = useAppSelector(getRecommendedMovies);
  // TODO - состояние счётчика
  // const movieCounter = useAppSelector((state) => state.movieCounter);

  const [activeCardId, setActiveCardId] = useState(INACTIVE_NUMBER_ID);
  const changeActiveCardId = (id: string): void => setActiveCardId(id);

  const prepareMovies = (preparingMode: MovieListModeCount) => {
    switch (preparingMode) {
      case MovieListModeCount.Main:
        // TODO - временно slice до 8
        return filteredMovies.slice(0, MovieListModeCount.Main);
      case MovieListModeCount.Recommended:
        return recommendedMovies.filter((currentMovie) => (currentMovie.id !== movie.id))
          .slice(0, MovieListModeCount.Recommended);
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
