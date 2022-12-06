import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ServiceStateProcess} from '../../types/state';
import {NameSpace} from '../../const';
import { fetchCurrentMovieDataAction, fetchMoviesAction, loginAction } from '../api-actions';

const initialState: ServiceStateProcess = {
  authError: undefined,
  isDataLoading: false,
  isError404: false,
};

export const serviceStateProcess = createSlice({
  name: NameSpace.CurrentMovieData,
  initialState,
  reducers: {
    setError404: (state, action: PayloadAction<boolean>) => {
      state.isError404 = action.payload;
    },
    setAuthError: (state, action: PayloadAction<string | undefined>) => {
      state.authError = action.payload;
    },
    setDataLoading: (state, action: PayloadAction<boolean>) => {
      state.isDataLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentMovieDataAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchCurrentMovieDataAction.fulfilled, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchCurrentMovieDataAction.rejected, (state) => {
        state.isError404 = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authError = undefined;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.authError = action.error.message;
      })
      .addCase(fetchMoviesAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchMoviesAction.fulfilled, (state) => {
        state.isDataLoading = false;
      });
  }
});

export const {setError404, setAuthError, setDataLoading} = serviceStateProcess.actions;
