import {changeGenre, getFilteredMovies} from './action';
import {createReducer} from '@reduxjs/toolkit';
import {GenreLinkProperty} from '../const';
import {movies} from '../mocks/movies';

const sourceMovies = movies;

const initialState = {
  currentGenre: GenreLinkProperty.All.Data,
  filteredMovies: [...sourceMovies],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.selectedGenre;
    })
    .addCase(getFilteredMovies, (state) => {
      //  WIP
    });
});

export {reducer};
