import App from './components/app/app';
import {checkAuthAction, fetchStartAppAction} from './store/api-actions';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './store';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const FilmProperty = {
  Title: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: 2014
} as const;

store.dispatch(fetchStartAppAction());

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
