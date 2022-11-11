import {useState} from 'react';

import {Movie, Movies} from '../../types/movies';
import {INACTIVE_NUMBER_ID} from '../../const';
import FilmCard from '../film-card/film-card';

type MovieListProps = {
  movies: Movies;
}

function MovieList({movies}: MovieListProps): JSX.Element {
  // В состояние будет передаваться ID активной карточки, неактивное состояние зарезервировано нулём
  // Переменную activeCardId пока не назначали, чтобы линтер не ругался
  const [, setActiveCardId] = useState(INACTIVE_NUMBER_ID);
  const changeActiveCardId = (id: number): void => setActiveCardId(id);

  return (
    <div className="catalog__films-list">
      {movies.map(
        (movie: Movie) => (
          <FilmCard
            key={movie.id}
            movie={movie}
            onCurrentCard={changeActiveCardId}
          />
        )
      )}
    </div>
  );
}

export default MovieList;
