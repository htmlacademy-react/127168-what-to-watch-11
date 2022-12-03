import {BACKEND_URL, REQUEST_TIMEOUT} from '../const';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';
import {getToken} from './token';
import {setError} from '../store/action';
import {store} from '../store';
import {StatusCodes} from 'http-status-codes';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        store.dispatch(setError(error.response.data.error));
      }

      throw error;
    }
  );

  return api;
};
