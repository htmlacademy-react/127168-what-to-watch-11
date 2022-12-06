import {AuthorizationStatus} from '../const';
import {Movie, Movies} from './movies';
import {store} from '../store/index';
import {UserData} from './user';
import { Comments } from './comments';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | Record<string, never>;
  authError: string | undefined;
};

export type MoviesData = {
  sourceMovies: Movies;
  isDataLoading: boolean;
};

export type CurrentMoovieData = {
  currentMovie: Movie;
  currentComments: Comments;
  recommendedMovies: Movies;
  isDataLoading: boolean;
  isError404: boolean;
};
