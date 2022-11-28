import {APIRoute} from '../const';
import {AppDispatch, State} from '../types/state.js';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {loadMovies} from '../store/action.js';
import {Movies} from '../types/movies.js';

export const fetchMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovies',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Movies>(APIRoute.Movies);
    dispatch(loadMovies(data));
  },
);
