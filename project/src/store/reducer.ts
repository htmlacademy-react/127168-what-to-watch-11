import {
  addMovieCount,
  changeGenre,
  filterMovies,
  resetMovieCount
} from './action';
import {ALL_GENRES_LINK, MOVIE_STEP} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {movies} from '../mocks/movies';

const sourceMovies = movies;

const initialState = {
  currentGenre: ALL_GENRES_LINK,
  movieCounter: MOVIE_STEP,
  filteredMovies: [...sourceMovies],
  sourceMovies
};

const onFilterMovies = (state: typeof initialState) => {
  if (state.currentGenre === ALL_GENRES_LINK) {
    state.filteredMovies = [...sourceMovies];
  } else {
    state.filteredMovies = state.sourceMovies.filter(
      (currentMovie) => (
        currentMovie.genre === state.currentGenre
      )
    );
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.selectedGenre;
    })
    .addCase(filterMovies, onFilterMovies)
    .addCase(addMovieCount, (state) => {
      state.movieCounter += MOVIE_STEP;
    })
    .addCase(resetMovieCount, (state) => {
      state.movieCounter = MOVIE_STEP;
    });
});

export {reducer};
