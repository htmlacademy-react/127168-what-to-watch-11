enum AppRoute {
  Film = '/films/:id',
  Login = '/login',
  Main = '/',
  MyList = '/mylist',
  Player = '/player/:id',
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
  LogoPositionClass
};
