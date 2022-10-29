import ReviewComponent from './review-component';

function FilmOverviewComponent(): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {Array.from({length: 3}, ReviewComponent)}
      </div>
      <div className="film-card__reviews-col">
        {Array.from({length: 3}, ReviewComponent)}
      </div>
    </div>

  );
}

export default FilmOverviewComponent;
