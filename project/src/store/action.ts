import {AuthorizationStatus} from '../const';
import {Comments} from '../types/comments';
import {createAction} from '@reduxjs/toolkit';
import {Movie, Movies} from '../types/movies';
import {UserData} from '../types/user';

export const changeGenre = createAction<{selectedGenre: string}>('mainList/changeGenre');

export const filterMovies = createAction('mainList/filterMovies');

export const addMovieCount = createAction('mainList/addMovieCount');

export const resetMovieCount = createAction('mainList/resetMovieCount');

export const loadMovies = createAction<Movies>('data/loadMovies');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserData = createAction<UserData>('user/setUserData');

export const removeUserData = createAction('user/removeUserData');

export const setError = createAction<string | null>('error/setError');

export const loadCurrentMovie = createAction<Movie>('data/loadCurrentMovie');

export const loadCurrentComments = createAction<Comments>('data/loadCurrentComments');

export const loadRecomendedMovies = createAction<Movies>('data/loadRecomendedMovies');

export const setDefaultCurrentMovieData = createAction('data/setDefaultCurrentMovieData');

export const redirectToRoute = createAction<string>('redirect/redirectToRoute');

export const setError404 = createAction<boolean>('error/setError404');
