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
};

export type MoviesData = {
  sourceMovies: Movies;
};

export type CurrentMoovieData = {
  currentMovie: Movie;
  currentComments: Comments;
  recommendedMovies: Movies;
};

export type CatalogProcess = {
  currentGenre: string;
  filteredMovies: Movies;
  counter: number;
}

export type ServiceStateProcess = {
  authError: string | undefined;
  isDataLoading: boolean;
  isError404: boolean;
}
