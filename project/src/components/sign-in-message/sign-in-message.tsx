import {useAppSelector} from '../../hooks';

function SignInMessage(): JSX.Element {
  const errorMessage = useAppSelector((state) => state.error);

  return (
    <div className="sign-in__message">
      <p>{errorMessage}</p>
    </div>
  );
}

export default SignInMessage;
