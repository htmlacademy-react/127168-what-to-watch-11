import App from './components/app/app';
import {checkAuthAction, fetchMoviesAction} from './store/api-actions';
import {Provider} from 'react-redux';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import {store} from './store';
import {ToastContainer} from 'react-toastify';

store.dispatch(checkAuthAction());

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
  <Provider store = {store}>
    <ToastContainer />
    <App
      title={FilmProperty.Title}
      genre={FilmProperty.Genre}
      year={FilmProperty.Year}
    />
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>,
);
