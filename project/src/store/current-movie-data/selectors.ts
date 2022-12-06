import {Comments} from '../../types/comments';
import {Movie, Movies} from '../../types/movies';
import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getCurrentMovie = (state: State): Movie => state[NameSpace.CurrentMovieData].currentMovie;
export const getCurrentComments = (state: State): Comments => state[NameSpace.CurrentMovieData].currentComments;
export const getRecommendedMovies = (state: State): Movies => state[NameSpace.CurrentMovieData].recommendedMovies;
export const getCurrentMovieLoadingStatus = (state: State): boolean => state[NameSpace.CurrentMovieData].isDataLoading;
export const getCurrentMovieError404 = (state: State): boolean => state[NameSpace.CurrentMovieData].isError404;
