import {createSlice} from '@reduxjs/toolkit';
import {CurrentMoovieData} from '../../types/state';
import {fetchCurrentMovieDataAction} from '../api-actions';
import {Movie} from '../../types/movies';
import {NameSpace} from '../../const';

const emptyMovie: Movie = {
  id: '',
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: false,
};

const initialState: CurrentMoovieData = {
  currentMovie: emptyMovie,
  currentComments: [],
  recommendedMovies: [],
  isDataLoading: false,
  isError404: false,
};

export const currentMoviesData = createSlice({
  name: NameSpace.CurrentMovieData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentMovieDataAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchCurrentMovieDataAction.fulfilled, (state, action) => {
        state.currentMovie = action.payload.movie;
        state.currentComments = action.payload.comments;
        state.recommendedMovies = action.payload.recommendedMovies;

        state.isDataLoading = false;
      })
      .addCase(fetchCurrentMovieDataAction.rejected, (state) => {
        state.isError404 = true;
      });
  }
});
