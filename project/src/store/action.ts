import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<{selectedGenre: string}>('mainList/changeGenre');

export const getFilteredMovies = createAction('mainList/getFilteredMovies');
