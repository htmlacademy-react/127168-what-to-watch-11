import {getAuthErrorMessage} from '../../store/user-process/selectors';
import {useAppSelector} from '../../hooks';

function SignInMessage(): JSX.Element {
  const errorMessage = useAppSelector(getAuthErrorMessage);

  return (
    <div className="sign-in__message">
      <p>{errorMessage}</p>
    </div>
  );
}

export default SignInMessage;
