import {ALL_GENRES_LINK} from '../../const';
import GenreLink from './genre-link';
import {getMoviesData} from '../../store/movies-data/selectors';
import {useAppSelector} from '../../hooks';


function GenreList (): JSX.Element {
  const movies = useAppSelector(getMoviesData);

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
