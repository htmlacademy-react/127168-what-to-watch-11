import FilmCard from '../film-card/film-card';
import {INACTIVE_NUMBER_ID} from '../../const';
import {Movie, Movies} from '../../types/movies';
import {useState} from 'react';

type MovieListProps = {
  movies: Movies;
}

function MovieList({movies}: MovieListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(INACTIVE_NUMBER_ID);
  const changeActiveCardId = (id: string): void => setActiveCardId(id);

  return (
    <div className="catalog__films-list">
      {movies.map(
        (movie: Movie) => (
          <FilmCard
            key={movie.id}
            movie={movie}
            onHoverCurrentCard={changeActiveCardId}
            activeCardId={activeCardId}
          />
        )
      )}
    </div>
  );
}

export default MovieList;
