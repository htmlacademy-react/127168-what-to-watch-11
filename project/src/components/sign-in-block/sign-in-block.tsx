import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {setAuthError} from '../../store/service-state-process/service-state-process';
import {useAppDispatch} from '../../hooks';

function SignInBlock (): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="user-block">
      <Link
        className="user-block__link"
        to={AppRoute.Login}
        onClick={() => dispatch(setAuthError(undefined))}
      >
        Sign in
      </Link>
    </div>
  );
}

export default SignInBlock;
