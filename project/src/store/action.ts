import {AuthorizationStatus} from '../const';
import {createAction} from '@reduxjs/toolkit';
import {Movies} from '../types/movies';
import {UserData} from '../types/user';

export const changeGenre = createAction<{selectedGenre: string}>('mainList/changeGenre');

export const filterMovies = createAction('mainList/filterMovies');

export const addMovieCount = createAction('mainList/addMovieCount');

export const resetMovieCount = createAction('mainList/resetMovieCount');

export const loadMovies = createAction<Movies>('data/loadMovies');

export const setMoviesDataLoadingStatus = createAction<boolean>('data/setMoviesDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserData = createAction<UserData>('user/setUserData');

export const removeUserData = createAction('user/removeUserData');
