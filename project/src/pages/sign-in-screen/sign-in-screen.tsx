import {AppRoute, AuthorizationStatus, LogoPositionClass} from '../../const';
import {AuthData} from '../../types/user';
import {FormEvent, useEffect, useRef} from 'react';
import {Helmet} from 'react-helmet-async';
import {loginAction} from '../../store/api-actions';
import Logo from '../../components/logo/logo';
import {Navigate} from 'react-router-dom';
import {setError} from '../../store/action';
import SignInMessage from '../../components/sign-in-message/sign-in-message';
import {useAppDispatch, useAppSelector} from '../../hooks';

function SignInScreen(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const errorMessage = useAppSelector((state) => state.error);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  useEffect(() => {
    dispatch(setError(null));
  }, [dispatch]);

  const isNoAuthStatus = (status: AuthorizationStatus) => status === AuthorizationStatus.NoAuth;

  const signInScreenComponent = (
    <div className="user-page">
      <Helmet>
        <title>WTW. Sign in</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo positionClass={LogoPositionClass.Header}/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form
          action=""
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          {errorMessage ? <SignInMessage /> : null}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                required
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                required
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
            Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <footer className="page-footer">
        <Logo positionClass={LogoPositionClass.Footer}/>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );

  return isNoAuthStatus(authorizationStatus) ? signInScreenComponent : <Navigate to={AppRoute.Main}/>;
}

export default SignInScreen;
