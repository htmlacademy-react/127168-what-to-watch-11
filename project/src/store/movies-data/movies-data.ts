import {createSlice} from '@reduxjs/toolkit';
import {
  fetchFavoriteFilmsAction,
  fetchStartAppAction,
  logoutAction,
  postFavoriteFilm
} from '../api-actions';
import {MoviesData} from '../../types/state';
import {emptyMovie, NameSpace} from '../../const';

const initialState: MoviesData = {
  sourceMovies: [],
  promoMovie: emptyMovie,
  favoriteMovies: [],
};

export const moviesData = createSlice({
  name: NameSpace.MoviesData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStartAppAction.fulfilled, (state, action) => {
        state.sourceMovies = action.payload.movies;
        state.promoMovie = action.payload.promoMovie;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteMovies = action.payload;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.favoriteMovies = [];
      })
      .addCase(postFavoriteFilm.fulfilled, (state, action) => {
        const indexElementSource = state.sourceMovies.findIndex((movie) => movie.id === action.payload.id);
        state.sourceMovies[indexElementSource].isFavorite = action.payload.isFavorite;

        if (action.payload.isFavorite) {
          state.favoriteMovies.push(action.payload);
        } else {
          const amountElements = 1;
          const indexElementFavorites = state.favoriteMovies.findIndex((movie) => movie.id === action.payload.id);
          state.favoriteMovies.splice(indexElementFavorites, amountElements);
        }
      });
  }
});
