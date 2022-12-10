const ALL_GENRES_LINK = 'All genres';

export enum APIRoute {
  Movies = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Similar = 'similar',
  Promo = '/promo',
  Favorite = '/favorite',
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

const DEFAULT_CURRENT_TIME = 0;

const DEFAULT_DURATION = 0;

const DEFAULT_RATING = 0;

enum DescriptionTab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

const emptyMovie = {
  id: '',
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: false,
};

enum LogoPositionClass {
  Header = 'logo__link',
  Footer = 'logo__link logo__link--light'
}

const INACTIVE_NUMBER_ID = '0';

const MAX_COMMENT_LENGTH = 400;

const MAX_RATING = 10;

const MIN_COMMENT_LENGTH = 50;

const MIN_RATING = 1;

const MINIMUM_RECOMMENDED_FILMS = 2;

const MOVIE_STEP = 8;

enum MovieListModeCount {
  Main = MOVIE_STEP,
  Recommended = 4,
  MyList = 12,
}

enum NameSpace {
  User = 'USER',
  MoviesData = 'MOVIES_DATA',
  CurrentMovieData = 'CURRENT_MOVIE_DATA',
  Catalog = 'CATALOG',
  ServiceStateProcess = 'SERVICE_STATE_PROCESS',
}

enum PlayerStatusMessage {
  GoodStatus = '',
  Transpotting = 'Transpotting',
  ErrorAutoplay = 'Autoplay is off'
}

const PREVIEW_START_TIME = 1000;

const REQUEST_TIMEOUT = 5000;

const REVIEW_PAGE = 'review';

const SECONDS_IN_HOUR = 3600;

export {
  ALL_GENRES_LINK,
  AppRoute,
  AUTH_TOKEN_KEY_NAME,
  AuthorizationStatus,
  BACKEND_URL,
  ColumnSortType,
  DEFAULT_CURRENT_TIME,
  DEFAULT_DURATION,
  DEFAULT_RATING,
  DescriptionTab,
  emptyMovie,
  INACTIVE_NUMBER_ID,
  LogoPositionClass,
  MAX_COMMENT_LENGTH,
  MAX_RATING,
  MIN_COMMENT_LENGTH,
  MIN_RATING,
  MINIMUM_RECOMMENDED_FILMS,
  MOVIE_STEP,
  NameSpace,
  MovieListModeCount,
  PlayerStatusMessage,
  PREVIEW_START_TIME,
  REQUEST_TIMEOUT,
  REVIEW_PAGE,
  SECONDS_IN_HOUR
};
