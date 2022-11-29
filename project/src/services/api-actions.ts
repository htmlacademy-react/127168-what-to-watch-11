import {APIRoute} from '../const';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {filterMovies, loadMovies, setMoviesDataLoadingStatus} from '../store/action';
import {Movies} from '../types/movies';

export const fetchMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovies',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setMoviesDataLoadingStatus(true));
    const {data} = await api.get<Movies>(APIRoute.Movies);
    dispatch(setMoviesDataLoadingStatus(false));
    dispatch(loadMovies(data));
    dispatch(filterMovies());
  },
);
