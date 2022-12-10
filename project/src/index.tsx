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

store.dispatch(fetchStartAppAction());

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
