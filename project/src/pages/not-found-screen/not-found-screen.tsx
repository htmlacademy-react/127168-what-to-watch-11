import {LogoPositionClass} from '../../const';
import Logo from '../../components/logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg not-found__bg">
        <img
          src="img/travolta.jpg"
          alt="The Grand Budapest Hotel"
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <Logo positionClass={LogoPositionClass.Header}/>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" href="#todo">Sign out</a>
          </li>
        </ul>
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
