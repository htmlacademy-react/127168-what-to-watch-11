import {APIRoute, AppRoute} from '../const';
import {AppDispatch, State} from '../types/state';
import {AuthData, UserDataResponse} from '../types/user';
import {AxiosInstance} from 'axios';
import {Comments, NewReview} from '../types/comments';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {dropToken, saveToken} from '../services/token';
import {Movie, Movies} from '../types/movies';
import {redirectToRoute} from './action';

export const fetchStartAppAction = createAsyncThunk<{
  movies: Movies;
  promoMovie: Movie;
}, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchStartApp',
  async (_arg, {extra: api}) => {
    const {data: movies} = await api.get<Movies>(APIRoute.Movies);
    const {data: promoMovie} = await api.get<Movie>(APIRoute.Promo);
    return {movies, promoMovie};
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

export const fetchCurrentMovieDataAction = createAsyncThunk<{
  movie: Movie;
  comments: Comments;
  recommendedMovies: Movies;
}, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentMovieData',
  async (id, {extra: api}) => {
    const routeMovie = `${APIRoute.Movies}/${id}`;
    const routeComments = `${APIRoute.Comments}/${id}`;
    const routeRecommended = `${APIRoute.Movies}/${id}/${APIRoute.Similar}`;

    const {data: movie} = await api.get<Movie>(routeMovie);
    const {data: comments} = await api.get<Comments>(routeComments);
    const {data: recommendedMovies} = await api.get<Movies>(routeRecommended);
    return {movie, comments, recommendedMovies};
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

export const fetchFavoriteFilmsAction = createAsyncThunk<Movies, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Movies>(APIRoute.Favorite);
    return data;
  },
);
