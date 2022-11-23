import {ALL_GENRES_LINK} from '../const';
import {changeGenre, filterMovies} from './action';
import {createReducer} from '@reduxjs/toolkit';
import {movies} from '../mocks/movies';

const sourceMovies = movies;

const initialState = {
  currentGenre: ALL_GENRES_LINK,
  filteredMovies: [...sourceMovies],
  sourceMovies
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.selectedGenre;
    })
    .addCase(filterMovies, (state) => {
      if (state.currentGenre === ALL_GENRES_LINK) {
        state.filteredMovies = [...sourceMovies];
      } else {
        state.filteredMovies = state.sourceMovies.filter(
          (currentMovie) => (
            currentMovie.genre === state.currentGenre
          )
        );
      }
    });
});

export {reducer};
