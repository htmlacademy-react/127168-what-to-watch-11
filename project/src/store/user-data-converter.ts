import {UserData, UserDataResponse} from '../types/user';

const convertUserData = (serverUserData: UserDataResponse): UserData => {
  const convertedUserData:
    Partial<Pick<UserDataResponse, 'token' | 'email'>>
    & Omit<UserDataResponse, 'token' | 'email'>
    = {...serverUserData};

  delete convertedUserData.token;
  delete convertedUserData.email;

  return convertedUserData;
};

export {convertUserData};
