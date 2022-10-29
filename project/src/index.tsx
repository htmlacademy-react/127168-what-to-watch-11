import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

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
    <App title={FilmProperty.Title} genre={FilmProperty.Genre} year={FilmProperty.Year}/>
  </React.StrictMode>,
);
