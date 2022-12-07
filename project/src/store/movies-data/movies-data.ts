import {createSlice} from '@reduxjs/toolkit';
import {fetchMoviesAction} from '../api-actions';
import {MoviesData} from '../../types/state';
import {NameSpace} from '../../const';

const initialState: MoviesData = {
  sourceMovies: [],
};

export const moviesData = createSlice({
  name: NameSpace.MoviesData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMoviesAction.fulfilled, (state, action) => {
        state.sourceMovies = action.payload;
      });
  }
});
