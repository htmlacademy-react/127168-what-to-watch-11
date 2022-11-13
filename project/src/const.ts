const INACTIVE_NUMBER_ID = '0';

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

enum LogoPositionClass {
  Header = 'logo__link',
  Footer = 'logo__link logo__link--light'
}

export {
  AppRoute,
  AuthorizationStatus,
  INACTIVE_NUMBER_ID,
  LogoPositionClass
};
