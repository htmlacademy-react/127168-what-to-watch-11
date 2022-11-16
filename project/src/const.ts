enum AppRoute {
  Film = '/films/',
  Login = '/login',
  Main = '/',
  MyList = '/mylist',
  Player = '/player/',
  Review = '/films/:id/review'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const DEFAULT_RATING = 0;

const INACTIVE_NUMBER_ID = '0';

const MAX_RATING = 10;

const MIN_RATING = 1;

enum LogoPositionClass {
  Header = 'logo__link',
  Footer = 'logo__link logo__link--light'
}

const PREVIEW_START_TIME = 1000;

const REVIEW_PAGE = 'review';

export {
  AppRoute,
  AuthorizationStatus,
  DEFAULT_RATING,
  INACTIVE_NUMBER_ID,
  MAX_RATING,
  MIN_RATING,
  LogoPositionClass,
  PREVIEW_START_TIME,
  REVIEW_PAGE
};
