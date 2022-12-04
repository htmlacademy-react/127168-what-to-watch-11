import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {setError} from '../../store/action';
import {useAppDispatch} from '../../hooks';

function SignInBlock (): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="user-block">
      <Link
        className="user-block__link"
        to={AppRoute.Login}
        onClick={() => dispatch(setError(null))}
      >
        Sign in
      </Link>
    </div>
  );
}

export default SignInBlock;
