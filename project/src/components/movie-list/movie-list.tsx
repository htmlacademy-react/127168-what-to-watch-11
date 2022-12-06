import FilmCard from '../film-card/film-card';
import {INACTIVE_NUMBER_ID, MovieListModeCount} from '../../const';
import {Movie} from '../../types/movies';
import {useAppSelector} from '../../hooks';
import {useState} from 'react';

type MovieListProps = {
  mode: MovieListModeCount;
}

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
  const movie = useAppSelector((state) => state.currentMovie);
  const filteredMovies = useAppSelector((state) => state.filteredMovies);
  const recommendedMovies = useAppSelector((state) => state.recommendedMovies);
  const movieCounter = useAppSelector((state) => state.movieCounter);

  const [activeCardId, setActiveCardId] = useState(INACTIVE_NUMBER_ID);
  const changeActiveCardId = (id: string): void => setActiveCardId(id);

  const prepareMovies = (preparingMode: MovieListModeCount) => {
    switch (preparingMode) {
      case MovieListModeCount.Main:
        return filteredMovies.slice(0, movieCounter);
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
