enum AppRoute {
  Film = '/films/:id',
  Login = '/login',
  Main = '/',
  MyList = '/mylist',
  Player = '/player/:id',
  Review = '/films/:id/review'
}

enum LogoPositionClass {
  Header = 'logo__link',
  Footer = 'logo__link logo__link--light'
}

export {
  AppRoute,
  LogoPositionClass
};
