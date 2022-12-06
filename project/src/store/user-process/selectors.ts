import {AuthorizationStatus, NameSpace} from '../../const';
import {State} from '../../types/state';
import {UserData} from '../../types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserData = (state: State): UserData | Record<string, never> => state[NameSpace.User].userData;
export const getAuthErrorMessage = (state: State): string | undefined => state[NameSpace.User].authError;
