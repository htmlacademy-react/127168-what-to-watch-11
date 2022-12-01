import SignInBlock from './components/sign-in-block/sign-in-block';
import UserBlock from './components/user-block/user-block';
import {AuthorizationStatus} from './const';

const selectUserBlock = (status: AuthorizationStatus) => {
  switch (status) {
    case AuthorizationStatus.Auth:
      return <UserBlock />;
    case AuthorizationStatus.NoAuth:
      return <SignInBlock />;
    default:
      return '';
  }
};

export {selectUserBlock};
