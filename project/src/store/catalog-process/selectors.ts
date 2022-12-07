import {Movies} from '../../types/movies';
import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getCurrentGenre = (state: State): string => state[NameSpace.Catalog].currentGenre;
export const getFilteredMovies = (state: State): Movies => state[NameSpace.Catalog].filteredMovies;
export const getCounter = (state: State): number => state[NameSpace.Catalog].counter;
