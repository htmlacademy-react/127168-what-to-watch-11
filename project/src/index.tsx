import App from './components/app/app';
import {comments} from './mocks/comments';
import {movies} from './mocks/movies';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const FilmProperty = {
  Title: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: 2014
} as const;

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        title={FilmProperty.Title}
        genre={FilmProperty.Genre}
        year={FilmProperty.Year}
        movies={movies}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>,
);
