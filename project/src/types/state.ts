import {AuthorizationStatus} from '../const';
import {store} from '../store/index';
import {UserData} from './user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | Record<string, never>;
  authError: string | undefined;
};
