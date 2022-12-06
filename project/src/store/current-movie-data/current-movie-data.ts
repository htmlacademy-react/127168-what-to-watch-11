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
      });
  }
});

export const {setDefaultCurrentMovieData} = currentMoviesData.actions;
