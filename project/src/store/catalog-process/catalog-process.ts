import {ALL_GENRES_LINK, MOVIE_STEP, NameSpace} from '../../const';
import {CatalogProcess} from '../../types/state';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movies} from '../../types/movies';

const initialState: CatalogProcess = {
  currentGenre: ALL_GENRES_LINK,
  filteredMovies: [],
  counter: MOVIE_STEP,
};

export const catalogProcess = createSlice({
  name: NameSpace.Catalog,
  initialState,
  reducers: {
    addMovieCount: (state) => {
      state.counter += MOVIE_STEP;
    },
    changeGenre: (state, action: PayloadAction<string>) => {
      state.currentGenre = action.payload;
    },
    filterMovies: (state, action: PayloadAction<Movies>) => {
      if (state.currentGenre === ALL_GENRES_LINK) {
        state.filteredMovies = [...action.payload];
      } else {
        state.filteredMovies = [...action.payload].filter(
          (currentMovie) => (
            currentMovie.genre === state.currentGenre
          )
        );
      }
    },
    resetMovieCount: (state) => {
      state.counter = MOVIE_STEP;
    }
  },
});

export const {addMovieCount, changeGenre, filterMovies, resetMovieCount} = catalogProcess.actions;
