import FilmCard from '../film-card/film-card';
import {INACTIVE_NUMBER_ID} from '../../const';
import {Movie, Movies} from '../../types/movies';
import {useState} from 'react';

type MovieListProps = {
  movies: Movies;
}

function MovieList({movies}: MovieListProps): JSX.Element {
  // В состояние будет передаваться ID активной карточки, неактивное состояние зарезервировано нулём
  // Переменную activeCardId пока не назначали, чтобы линтер не ругался
  const [, setActiveCardId] = useState(INACTIVE_NUMBER_ID);
  const changeActiveCardId = (id: string): void => setActiveCardId(id);

  return (
    <div className="catalog__films-list">
      {movies.map(
        (movie: Movie) => (
          <FilmCard
            key={movie.id}
            movie={movie}
            onHoverCurrentCard={changeActiveCardId}
          />
        )
      )}
    </div>
  );
}

export default MovieList;
