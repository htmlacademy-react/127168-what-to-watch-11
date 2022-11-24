import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<{selectedGenre: string}>('mainList/changeGenre');

export const filterMovies = createAction('mainList/filterMovies');

export const addMovieCount = createAction('mainList/addMovieCount');
