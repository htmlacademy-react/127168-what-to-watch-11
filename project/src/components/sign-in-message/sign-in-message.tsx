import {getAuthErrorStatus} from '../../store/service-state-process/selectors';
import {useAppSelector} from '../../hooks';

function SignInMessage(): JSX.Element {
  const errorMessage = useAppSelector(getAuthErrorStatus);

  return (
    <div className="sign-in__message">
      <p>{errorMessage}</p>
    </div>
  );
}

export default SignInMessage;
