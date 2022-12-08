import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchCurrentMovieDataAction, fetchFavoriteFilmsAction, fetchStartAppAction, loginAction, logoutAction } from '../api-actions';
import {NameSpace} from '../../const';
import {ServiceStateProcess} from '../../types/state';

const initialState: ServiceStateProcess = {
  authError: undefined,
  isDataLoading: false,
  isError404: false,
  isFavoriteDownloaded: false,
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
      .addCase(fetchStartAppAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchStartAppAction.fulfilled, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state) => {
        state.isFavoriteDownloaded = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.isFavoriteDownloaded = false;
      });
  }
});

export const {setError404, setAuthError, setDataLoading} = serviceStateProcess.actions;
