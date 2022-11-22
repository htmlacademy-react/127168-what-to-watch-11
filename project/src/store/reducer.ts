import {changeGenre, getFilteredMovies} from './action';
import {createReducer} from '@reduxjs/toolkit';
import {movies} from '../mocks/movies';

const initialState = {
  currentGenre: 'All',
  movies,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state) => {
      //  WIP
    })
    .addCase(getFilteredMovies, (state) => {
      //  WIP
    });
});

export {reducer};
