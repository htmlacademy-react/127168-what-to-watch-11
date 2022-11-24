import {addMovieCount} from '../../store/action';
import {useAppDispatch} from '../../hooks';

function ShowMoreButton (): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => dispatch(addMovieCount())}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
