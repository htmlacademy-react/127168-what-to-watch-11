import {Movie, Movies} from '../../types/movies';
import FilmCard from '../film-card/film-card';

type MovieListProps = {
  movies: Movies;
}

function MovieList({movies}: MovieListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {movies.map(
        (movie: Movie) =>
          <FilmCard key={movie.id} movie={movie}/>
      )}
    </div>
  );
}

export default MovieList;
