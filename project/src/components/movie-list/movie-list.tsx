import FilmCard from '../film-card/film-card';
import {INACTIVE_NUMBER_ID, MovieListModeCount} from '../../const';
import {Movie} from '../../types/movies';
import {useAppSelector} from '../../hooks';
import {useState} from 'react';

type MovieListProps = {
  mode: MovieListModeCount;
  movie?: Movie;
}

function MovieList({mode, movie}: MovieListProps): JSX.Element {
  const filteredMovies = useAppSelector((state) => state.filteredMovies);
  const sourceMovies = useAppSelector((state) => state.sourceMovies);
  const movieCounter = useAppSelector((state) => state.movieCounter);

  const [activeCardId, setActiveCardId] = useState(INACTIVE_NUMBER_ID);
  const changeActiveCardId = (id: string): void => setActiveCardId(id);

  const prepareMovies = (preparingMode: MovieListModeCount) => {
    switch (preparingMode) {
      case MovieListModeCount.Main:
        return filteredMovies.slice(0, movieCounter);
      case MovieListModeCount.Recomended:
        if (movie) {
          const filtredMovies = sourceMovies.filter((currentMovie) =>
            currentMovie.genre === movie?.genre && currentMovie.id !== movie?.id
          );
          return filtredMovies.slice(0, MovieListModeCount.Recomended);
        }
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
