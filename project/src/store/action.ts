import {createAction} from '@reduxjs/toolkit';
import {Movies} from '../types/movies';

export const changeGenre = createAction<{selectedGenre: string}>('mainList/changeGenre');

export const filterMovies = createAction('mainList/filterMovies');

export const addMovieCount = createAction('mainList/addMovieCount');

export const resetMovieCount = createAction('mainList/resetMovieCount');

export const loadMovies = createAction<Movies>('data/loadMovies');

export const setMoviesDataLoadingStatus = createAction<boolean>('data/setMoviesDataLoadingStatus');
