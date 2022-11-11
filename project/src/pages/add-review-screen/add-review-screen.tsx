import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {ChangeEvent, useState} from 'react';

import {LogoPositionClass} from '../../const';
import {Movie, Movies} from '../../types/movies';
import Logo from '../../components/logo/logo';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Rating from '../../components/rating/rating';

type AddReviewScreenProps = {
  movies: Movies;
}

const DEFAULT_RATING = 0;

function AddReviewScreen({movies}: AddReviewScreenProps): JSX.Element {
  const [userReview, setUserReview] = useState({
    comment: '',
    rating: DEFAULT_RATING,
  });

  const {id} = useParams();
  const movie = movies.find((item: Movie) => item.id === Number(id));

  return movie ? (
    // Здесь я так понял вставляется цвет
    <section className="film-card film-card--full" style={{background: movie.backgroundColor}}>
      <Helmet>
        <title>WTW. Add review to {movie.name}</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie.backgroundImage} alt={movie.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo positionClass={LogoPositionClass.Header}/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{movie.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="#todo">Add review</a>
              </li>
            </ul>
          </nav>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="#todo">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={movie.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>
      <div className="add-review">
        <form action="#" className="add-review__form">
          <Rating
            rating={userReview.rating}
            onRateStar={(starValue: number) => setUserReview((oldUserReview) => ({...oldUserReview, rating: starValue}))}
          />
          {/* Здесь не нашёл информацию о цвете поля */}
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              value={userReview.comment}
              onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
                setUserReview({...userReview, comment: target.value});
              }}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  ) : <NotFoundScreen />;
}

export default AddReviewScreen;
