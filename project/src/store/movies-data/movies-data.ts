import {createSlice} from '@reduxjs/toolkit';
import {fetchStartAppAction} from '../api-actions';
import {MoviesData} from '../../types/state';
import {emptyMovie, NameSpace} from '../../const';

const initialState: MoviesData = {
  sourceMovies: [],
  promoMovie: emptyMovie,
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
      });
  }
});
