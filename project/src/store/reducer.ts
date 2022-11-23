import {changeGenre, filterMovies} from './action';
import {createReducer} from '@reduxjs/toolkit';
import {GenreLinkProperty} from '../const';
import {movies} from '../mocks/movies';

const sourceMovies = movies;

const initialState = {
  currentGenre: GenreLinkProperty.All.Data,
  filteredMovies: [...sourceMovies],
  sourceMovies
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.selectedGenre;
    })
    .addCase(filterMovies, (state) => {
      if (state.currentGenre === GenreLinkProperty.All.Data) {
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
