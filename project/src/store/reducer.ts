import {
  addMovieCount,
  changeGenre,
  filterMovies,
  loadMovies,
  resetMovieCount,
  requireAuthorization,
  setError,
  setDataLoadingStatus,
  setUserData,
  removeUserData,
  loadCurrentMovie,
  loadCurrentComments,
  loadRecomendedMovies,
  setDefaultCurrentMovieData,
  setError404
} from './action';
import {ALL_GENRES_LINK, AuthorizationStatus, MOVIE_STEP} from '../const';
import {Comments} from '../types/comments';
import {createReducer} from '@reduxjs/toolkit';
import {Movie, Movies} from '../types/movies';
import {UserData} from '../types/user';

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
  currentGenre: string;
  movieCounter: number;
  filteredMovies: Movies;
  sourceMovies: Movies;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | Record<string, never>;
  error: string | null;
  isError404: boolean;
  currentMovie: Movie;
  currentComments: Comments;
  recommendedMovies: Movies;
}

const initialState: InitalState = {
  currentGenre: ALL_GENRES_LINK,
  movieCounter: MOVIE_STEP,
  filteredMovies: [],
  sourceMovies: [],
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {},
  error: null,
  isError404: false,
  currentMovie: emptyMovie,
  currentComments: [],
  recommendedMovies: []
};

const onFilterMovies = (state: typeof initialState) => {
  if (state.currentGenre === ALL_GENRES_LINK) {
    state.filteredMovies = [...state.sourceMovies];
  } else {
    state.filteredMovies = state.sourceMovies.filter(
      (currentMovie) => (
        currentMovie.genre === state.currentGenre
      )
    );
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.selectedGenre;
    })
    .addCase(filterMovies, onFilterMovies)
    .addCase(addMovieCount, (state) => {
      state.movieCounter += MOVIE_STEP;
    })
    .addCase(resetMovieCount, (state) => {
      state.movieCounter = MOVIE_STEP;
    })
    .addCase(loadMovies, (state, action) => {
      state.sourceMovies = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(removeUserData, (state) => {
      state.userData = {};
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
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
