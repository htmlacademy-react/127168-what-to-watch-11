import FilmCard from '../film-card/film-card';
import {INACTIVE_NUMBER_ID, MovieListModeCount} from '../../const';
import {Movie, Movies} from '../../types/movies';
import {useState} from 'react';

type MovieListProps = {
  movies: Movies;
  mode: MovieListModeCount;
  movie?: Movie;
}

function MovieList({movies, mode, movie}: MovieListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(INACTIVE_NUMBER_ID);
  const changeActiveCardId = (id: string): void => setActiveCardId(id);

  const prepareMovies = (preparingMode: MovieListModeCount) => {
    switch (preparingMode) {
      case MovieListModeCount.Main:
        return movies.slice(0, MovieListModeCount.Main);
      case MovieListModeCount.Recomended:
        if (movie) {
          const filtredMovies = movies.filter((currentMovie) =>
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
