import Catalog from '../../components/catalog/catalog';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import {LogoPositionClass} from '../../const';
import Promo from '../../components/promo/promo';
import {selectUserBlock} from '../../user-block-selector';
import {useAppSelector} from '../../hooks';

function MainScreen(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <>
      <section className="film-card">
        <Helmet>
          <title>WTW. Main</title>
        </Helmet>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo positionClass={LogoPositionClass.Header}/>
          {selectUserBlock(authorizationStatus)}
        </header>
        <Promo />
      </section>

      <div className="page-content">
        <Catalog />
        <footer className="page-footer">
          <Logo positionClass={LogoPositionClass.Footer}/>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainScreen;
