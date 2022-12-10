import {createSlice} from '@reduxjs/toolkit';
import {CurrentMoovieData} from '../../types/state';
import {fetchCurrentMovieDataAction, postFavoriteFilm} from '../api-actions';
import {emptyMovie, NameSpace} from '../../const';

const initialState: CurrentMoovieData = {
  currentMovie: emptyMovie,
  currentComments: [],
  recommendedMovies: [],
};

export const currentMoviesData = createSlice({
  name: NameSpace.CurrentMovieData,
  initialState,
  reducers: {
    setDefaultCurrentMovieData: (state) => {
      state.currentMovie = emptyMovie;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentMovieDataAction.fulfilled, (state, action) => {
        state.currentMovie = action.payload.movie;
        state.currentComments = action.payload.comments;
        state.recommendedMovies = action.payload.recommendedMovies;
      })
      .addCase(postFavoriteFilm.fulfilled, (state, action) => {
        state.currentMovie.isFavorite = action.payload.isFavorite;
      });
  }
});

export const {setDefaultCurrentMovieData} = currentMoviesData.actions;
