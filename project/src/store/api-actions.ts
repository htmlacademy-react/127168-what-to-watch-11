import {APIRoute, AuthorizationStatus} from '../const';
import {AppDispatch, State} from '../types/state';
import {AuthData, UserDataResponse} from '../types/user';
import {AxiosInstance} from 'axios';
import {Comments, NewReview} from '../types/comments';
import {convertUserData} from '../services/user-data-converter';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {dropToken, saveToken} from '../services/token';
import {
  filterMovies,
  loadCurrentComments,
  loadCurrentMovie,
  loadMovies,
  loadRecomendedMovies,
  removeUserData,
  requireAuthorization,
  setError,
  setMoviesDataLoadingStatus,
  setUserData
} from './action';
import {Movie, Movies} from '../types/movies';

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
    dispatch(setError(null));
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
    dispatch(removeUserData());
  },
);

export const fetchCurrentMovieAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentMovie',
  async (id, {dispatch, extra: api}) => {
    const route = `${APIRoute.Movies}/${id}`;

    dispatch(setMoviesDataLoadingStatus(true));
    const {data} = await api.get<Movie>(route);
    dispatch(loadCurrentMovie(data));
    dispatch(setMoviesDataLoadingStatus(false));
  },
);

export const fetchCurrentCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentComments',
  async (id, {dispatch, extra: api}) => {
    const route = `${APIRoute.Comments}/${id}`;

    dispatch(setMoviesDataLoadingStatus(true));
    const {data} = await api.get<Comments>(route);
    dispatch(loadCurrentComments(data));
    dispatch(setMoviesDataLoadingStatus(false));
  },
);

export const fetchRecomendedMoviesAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchRecomendedMovies',
  async (id, {dispatch, extra: api}) => {
    const route = `${APIRoute.Movies}/${id}/${APIRoute.Similar}`;

    dispatch(setMoviesDataLoadingStatus(true));
    const {data} = await api.get<Movies>(route);
    dispatch(loadRecomendedMovies(data));
    dispatch(setMoviesDataLoadingStatus(false));
  },
);

export const sendReviewAction = createAsyncThunk<void, NewReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/sendReview',
  async ({comment, rating, filmId}, {extra: api}) => {
    await api.post(`${APIRoute.Comments}/${filmId}`, {comment, rating});
  },
);
