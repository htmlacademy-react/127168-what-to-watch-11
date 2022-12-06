import {Comments} from '../types/comments';
import {createAction} from '@reduxjs/toolkit';
import {Movie, Movies} from '../types/movies';

export const loadMovies = createAction<Movies>('data/loadMovies');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const loadCurrentMovie = createAction<Movie>('data/loadCurrentMovie');

export const loadCurrentComments = createAction<Comments>('data/loadCurrentComments');

export const loadRecomendedMovies = createAction<Movies>('data/loadRecomendedMovies');

export const setDefaultCurrentMovieData = createAction('data/setDefaultCurrentMovieData');

export const redirectToRoute = createAction<string>('redirect/redirectToRoute');

export const setError404 = createAction<boolean>('error/setError404');
