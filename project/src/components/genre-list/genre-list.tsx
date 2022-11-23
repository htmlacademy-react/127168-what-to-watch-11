import GenreLink from './genre-link';
import {GenreLinkProperty} from '../../const';

function GenreList (): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {
        Object.keys(GenreLinkProperty)
          .map((genreLinkKey) => {
            const genreLinkValue = GenreLinkProperty[genreLinkKey as keyof typeof GenreLinkProperty];
            const dataValue = genreLinkValue.Data;
            const captionValue = genreLinkValue.Caption;

            return (
              <GenreLink
                key={dataValue}
                dataValue={dataValue}
                captionValue={captionValue}
              />);
          })
      }
    </ul>
  );
}

export default GenreList;
