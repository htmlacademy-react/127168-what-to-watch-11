import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

function SignInBlock (): JSX.Element {
  return (
    <div className="user-block">
      <Link
        className="user-block__link"
        to={AppRoute.Login}
        // TODO - обнуление ошибки. Надо подумать
        // onClick={() => dispatch(setError(null))}
      >
        Sign in
      </Link>
    </div>
  );
}

export default SignInBlock;
