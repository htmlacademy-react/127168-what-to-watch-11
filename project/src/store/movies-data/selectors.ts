import {Movies} from '../../types/movies';
import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getMoviesData = (state: State): Movies => state[NameSpace.MoviesData].sourceMovies;
export const getMoviesDataLoadingStatus = (state: State): boolean => state[NameSpace.MoviesData].isDataLoading;
