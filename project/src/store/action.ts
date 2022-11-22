import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction('mainList/changeGenre');

export const getFilteredMovies = createAction('mainList/getFilteredMovies');
