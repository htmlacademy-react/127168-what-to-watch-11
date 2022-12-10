import {Movie, Movies} from '../../types/movies';
import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getMoviesData = (state: State): Movies => state[NameSpace.MoviesData].sourceMovies;
export const getPromoData = (state: State): Movie => state[NameSpace.MoviesData].promoMovie;
export const getFavoriteMovies = (state: State): Movies => state[NameSpace.MoviesData].favoriteMovies;
