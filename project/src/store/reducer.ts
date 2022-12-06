import {
  loadMovies,
  setDataLoadingStatus,
  loadCurrentMovie,
  loadCurrentComments,
  loadRecomendedMovies,
  setDefaultCurrentMovieData,
  setError404
} from './action';
import {Comments} from '../types/comments';
import {createReducer} from '@reduxjs/toolkit';
import {Movie, Movies} from '../types/movies';

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
  isFavorite: false
};

type InitalState = {
  sourceMovies: Movies;
  isDataLoading: boolean;
  isError404: boolean;
  currentMovie: Movie;
  currentComments: Comments;
  recommendedMovies: Movies;
}

const initialState: InitalState = {
  sourceMovies: [],
  isDataLoading: false,
  isError404: false,
  currentMovie: emptyMovie,
  currentComments: [],
  recommendedMovies: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      state.sourceMovies = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(loadCurrentMovie, (state, action) => {
      state.currentMovie = action.payload;
    })
    .addCase(loadCurrentComments, (state, action) => {
      state.currentComments = action.payload;
    })
    .addCase(loadRecomendedMovies, (state, action) => {
      state.recommendedMovies = action.payload;
    })
    .addCase(setDefaultCurrentMovieData, (state) => {
      state.currentMovie = emptyMovie;
      state.currentComments = [];
      state.recommendedMovies = [];
    })
    .addCase(setError404, (state, action) => {
      state.isError404 = action.payload;
    });
});

export {reducer};
