import {catalogProcess} from './catalog-process/catalog-process';
import {combineReducers} from '@reduxjs/toolkit';
import {currentMoviesData} from './current-movie-data/current-movie-data';
import {moviesData} from './movies-data/movies-data';
import {NameSpace} from '../const';
import {serviceStateProcess} from './service-state-process/service-state-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.MoviesData]: moviesData.reducer,
  [NameSpace.CurrentMovieData]: currentMoviesData.reducer,
  [NameSpace.Catalog]: catalogProcess.reducer,
  [NameSpace.ServiceStateProcess]: serviceStateProcess.reducer,
});
