import {AuthorizationStatus, LogoPositionClass} from '../../const';
import Catalog from '../../components/catalog/catalog';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import Promo from '../../components/promo/promo';
import {selectUserBlock} from '../../user-block-selector';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import { getFavoriteDownloadedStatus } from '../../store/service-state-process/selectors';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFavoriteDownloadedStatus = useAppSelector(getFavoriteDownloadedStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth && !isFavoriteDownloadedStatus) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authorizationStatus, dispatch, isFavoriteDownloadedStatus]);


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
