import App from './components/app/app';
import {fetchMoviesAction} from './services/api-actions';
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

store.dispatch(fetchMoviesAction());

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        title={FilmProperty.Title}
        genre={FilmProperty.Genre}
        year={FilmProperty.Year}
      />
    </Provider>
  </React.StrictMode>,
);
