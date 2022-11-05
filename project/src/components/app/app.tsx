import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import {
  AppRoute,
  AuthorizationStatus
} from '../../const';

import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MoviePageScreen from '../../pages/movie-page-screen.tsx/movie-page-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';

import PrivateRoute from '../private-route/private-route';

type AppScreenProp = {
  title: string;
  genre: string;
  year: number;
}

const authorizationStatus = AuthorizationStatus.NoAuth;

function App({title, genre, year}: AppScreenProp): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              title={title}
              genre={genre}
              year={year}
            />
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route
          path={AppRoute.Login}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Review}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <AddReviewScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
