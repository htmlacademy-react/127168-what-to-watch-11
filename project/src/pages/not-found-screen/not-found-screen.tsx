import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import {LogoPositionClass} from '../../const';
import {selectUserBlock} from '../../user-block-selector';
import {useAppSelector} from '../../hooks';
import './not-found-screen.css';

function NotFoundScreen(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="film-card">
      <Helmet>
        <title>WTW. Ooops! 404!</title>
      </Helmet>
      <div className="film-card__bg not-found__bg">
        <img
          src="img/travolta.jpg"
          alt="The Grand Budapest Hotel"
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <Logo positionClass={LogoPositionClass.Header}/>
        {selectUserBlock(authorizationStatus)}
      </header>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__desc">
            <h2 className="film-card__title">404<br />Page not founded.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundScreen;
