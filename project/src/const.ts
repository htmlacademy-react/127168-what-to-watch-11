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

const GenreLinkProperty = {
  All: {
    Caption: 'All genres',
    Data: 'All'
  },
  Comedy: {
    Caption: 'Comedies',
    Data: 'Comedy'
  },
  Crime: {
    Caption: 'Crime',
    Data: 'Crime'
  },
  Documentary: {
    Caption: 'Documentary',
    Data: 'Documentary'
  },
  Drama: {
    Caption: 'Dramas',
    Data: 'Drama'
  },
  Horror: {
    Caption: 'Horror',
    Data: 'Horror'
  },
  Family: {
    Caption: 'Kids & Family',
    Data: 'Kids & Family'
  },
  Romance: {
    Caption: 'Romance',
    Data: 'Romance'
  },
  SciFi: {
    Caption: 'Sci-Fi',
    Data: 'Sci-Fi'
  },
  Thriller: {
    Caption: 'Thrillers',
    Data: 'Thriller'
  },
  // Недостающие жанры
  // Adventure,
  // Fantasy,
  // Action,
};

const INACTIVE_NUMBER_ID = '0';

const MAX_RATING = 10;

const MIN_RATING = 1;

enum MovieListModeCount {
  // Временно отрисовываем всё
  Main = 19,
  Recomended = 4
}

enum LogoPositionClass {
  Header = 'logo__link',
  Footer = 'logo__link logo__link--light'
}

const PREVIEW_START_TIME = 1000;

const REVIEW_PAGE = 'review';

export {
  AppRoute,
  AuthorizationStatus,
  ColumnSortType,
  DEFAULT_RATING,
  DescriptionTab,
  GenreLinkProperty,
  INACTIVE_NUMBER_ID,
  MAX_RATING,
  MIN_RATING,
  MovieListModeCount,
  LogoPositionClass,
  PREVIEW_START_TIME,
  REVIEW_PAGE
};
