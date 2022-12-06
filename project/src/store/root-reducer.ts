import {combineReducers} from '@reduxjs/toolkit';
import {currentMoviesData} from './current-movie-data/current-movie-data';
import {moviesData} from './movies-data/movies-data';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.MoviesData]: moviesData.reducer,
  [NameSpace.CurrentMovieData]: currentMoviesData.reducer,
});
