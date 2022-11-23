import GenreLink from './genre-link';
import {useAppSelector} from '../../hooks';
import { ALL_GENRES_LINK } from '../../const';


function GenreList (): JSX.Element {
  const movies = useAppSelector((state) => state.sourceMovies);

  const genres = new Set([ALL_GENRES_LINK]);
  movies.forEach((movie) => genres.add(movie.genre));

  return (
    <ul className="catalog__genres-list">
      {
        [...genres]
          .map((genreLink) => (
            <GenreLink
              key={genreLink}
              dataValue={genreLink}
            />))
      }
    </ul>
  );
}

export default GenreList;
