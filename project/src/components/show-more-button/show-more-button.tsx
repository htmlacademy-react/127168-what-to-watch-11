function ShowMoreButton (): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        // TODO - обработать логику добавления счётчика
        // onClick={() => dispatch(addMovieCount())}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
