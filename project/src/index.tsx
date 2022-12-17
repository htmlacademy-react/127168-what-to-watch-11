import App from './components/app/app';
import {checkAuthAction, fetchStartAppAction} from './store/api-actions';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './store';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browser-history';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchStartAppAction());

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </ HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
