import {APIRoute, AuthorizationStatus} from '../const';
import {AppDispatch, State} from '../types/state';
import {AuthData, UserDataResponse} from '../types/user';
import {AxiosInstance} from 'axios';
import {convertUserData} from './user-data-converter';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {dropToken, saveToken} from './token';
import {
  filterMovies,
  loadMovies,
  requireAuthorization,
  setMoviesDataLoadingStatus,
  setUserData
} from '../store/action';
import {Movies} from '../types/movies';

const createSuccessfulActions = (dispatch: AppDispatch, data: UserDataResponse) => {
  const userData = convertUserData(data);
  dispatch(setUserData(userData));
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
};

export const fetchMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovies',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setMoviesDataLoadingStatus(true));
    const {data} = await api.get<Movies>(APIRoute.Movies);
    dispatch(loadMovies(data));
    dispatch(filterMovies());
    dispatch(setMoviesDataLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserDataResponse>(APIRoute.Login);
      createSuccessfulActions(dispatch, data);
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data, data: {token}} = await api.post<UserDataResponse>(APIRoute.Login, {email, password});
    saveToken(token);
    createSuccessfulActions(dispatch, data);
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
