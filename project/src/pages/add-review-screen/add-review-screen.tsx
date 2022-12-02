import {ChangeEvent, useEffect, useState} from 'react';
import {AppRoute, DEFAULT_RATING, LogoPositionClass} from '../../const';
import {fetchCurrentMovieAction} from '../../services/api-actions';
import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import Rating from '../../components/rating/rating';
import {Link, useParams} from 'react-router-dom';
import {selectUserBlock} from '../../user-block-selector';
import {useAppDispatch, useAppSelector } from '../../hooks';

function AddReviewScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.currentMovie);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const [userReview, setUserReview] = useState({
    comment: '',
    rating: DEFAULT_RATING,
  });

  const {id} = useParams();
  useEffect(() => {
    if (id && id !== movie.id) {
      dispatch(fetchCurrentMovieAction(id));
    }
  }, [dispatch, id, movie.id]);

  return (
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
                <Link
                  className="breadcrumbs__link"
                  to={`${AppRoute.Film}${movie.id}`}
                >
                  {movie.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link
                  className="breadcrumbs__link"
                  to=""
                >
                  Add review
                </Link>
              </li>
            </ul>
          </nav>
          {selectUserBlock(authorizationStatus)}
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
  );
}

export default AddReviewScreen;
