import {APIRoute, AppRoute} from '../const';
import {AppDispatch, State} from '../types/state';
import {AuthData, UserDataResponse} from '../types/user';
import {AxiosInstance} from 'axios';
import {Comments, NewReview} from '../types/comments';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {dropToken, saveToken} from '../services/token';
import {
  filterMovies,
  loadCurrentComments,
  loadCurrentMovie,
  loadMovies,
  loadRecomendedMovies,
  redirectToRoute,
  setDataLoadingStatus,
  setError404
} from './action';
import {Movie, Movies} from '../types/movies';

export const fetchMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovies',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Movies>(APIRoute.Movies);
    dispatch(loadMovies(data));
    dispatch(filterMovies());
    dispatch(setDataLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<UserDataResponse, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserDataResponse>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserDataResponse, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {extra: api}) => {
    const {data, data: {token}} = await api.post<UserDataResponse>(APIRoute.Login, {email, password});
    saveToken(token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchCurrentMovieAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentMovie',
  async (id, {dispatch, extra: api}) => {
    try {
      const route = `${APIRoute.Movies}/${id}`;

      dispatch(setDataLoadingStatus(true));
      const {data} = await api.get<Movie>(route);
      dispatch(loadCurrentMovie(data));
      dispatch(setDataLoadingStatus(false));
    } catch {
      dispatch(setError404(true));
    }
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

    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Comments>(route);
    dispatch(loadCurrentComments(data));
    dispatch(setDataLoadingStatus(false));
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

    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Movies>(route);
    dispatch(loadRecomendedMovies(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const sendReviewAction = createAsyncThunk<void, NewReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/sendReview',
  async ({comment, rating, filmId}, {dispatch, extra: api}) => {
    await api.post(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    dispatch(redirectToRoute(`${AppRoute.Film}${filmId}`));
  },
);
