import {
  AppRoute,
  CommentLength,
  DEFAULT_RATING,
  LogoPositionClass,
} from '../../const';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getCurrentMovie} from '../../store/current-movie-data/selectors';
import {getError404Status} from '../../store/service-state-process/selectors';
import {fetchCurrentMovieDataAction, sendReviewAction} from '../../store/api-actions';
import {Helmet} from 'react-helmet-async';
import {Link, useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Rating from '../../components/rating/rating';
import {selectUserBlock} from '../../user-block-selector';
import {useAppDispatch, useAppSelector } from '../../hooks';

const defaultUserReviewState = {
  comment: '',
  rating: DEFAULT_RATING,
  filmId: '',
};

function AddReviewScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(getCurrentMovie);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isError404 = useAppSelector(getError404Status);
  const [userReview, setUserReview] = useState({...defaultUserReviewState});

  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentMovieDataAction(id));
      setUserReview({...defaultUserReviewState, filmId: id});
    }
  }, [dispatch, id]);

  if (isError404) {
    return <NotFoundScreen />;
  }

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
        <form
          action="#"
          className="add-review__form"
          onSubmit={(evt: FormEvent<HTMLFormElement>) => {
            evt.preventDefault();
            dispatch(sendReviewAction(userReview));
          }}
        >
          <Rating
            rating={userReview.rating}
            onRateStar={(starValue: number) => setUserReview((oldUserReview) => ({...oldUserReview, rating: starValue}))}
          />
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
              <button
                className="add-review__btn"
                type="submit"
                disabled={
                  userReview.rating === DEFAULT_RATING ||
                  userReview.comment.length <= CommentLength.Min ||
                  userReview.comment.length >= CommentLength.Max
                }
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddReviewScreen;
