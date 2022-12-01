const ALL_GENRES_LINK = 'All genres';

export enum APIRoute {
  Movies = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Similar = 'similar'
}

enum AppRoute {
  Film = '/films/',
  Login = '/login',
  Main = '/',
  MyList = '/mylist',
  Player = '/player/',
  Review = '/films/:id/review'
}

const AUTH_TOKEN_KEY_NAME = 'whattowatch-token';

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const BACKEND_URL = 'https://11.react.pages.academy/wtw';

enum ColumnSortType {
  Odd = 1,
  Even = 2
}

const DEFAULT_RATING = 0;

enum DescriptionTab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

const INACTIVE_NUMBER_ID = '0';

const MAX_RATING = 10;

const MIN_RATING = 1;

const MINIMUM_RECOMMENDED_FILMS = 2;

const MOVIE_STEP = 8;

enum MovieListModeCount {
  // Временно отрисовываем всё
  Main = MOVIE_STEP,
  Recommended = 4
}

enum LogoPositionClass {
  Header = 'logo__link',
  Footer = 'logo__link logo__link--light'
}

const PREVIEW_START_TIME = 1000;

const REQUEST_TIMEOUT = 5000;

const REVIEW_PAGE = 'review';

export {
  ALL_GENRES_LINK,
  AppRoute,
  AUTH_TOKEN_KEY_NAME,
  AuthorizationStatus,
  BACKEND_URL,
  ColumnSortType,
  DEFAULT_RATING,
  DescriptionTab,
  INACTIVE_NUMBER_ID,
  MAX_RATING,
  MIN_RATING,
  MINIMUM_RECOMMENDED_FILMS,
  MOVIE_STEP,
  MovieListModeCount,
  LogoPositionClass,
  PREVIEW_START_TIME,
  REQUEST_TIMEOUT,
  REVIEW_PAGE
};
