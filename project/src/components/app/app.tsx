import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import {
  AppRoute,
  AuthorizationStatus
} from '../../const';

import {Comments} from '../../types/comments';
import {Movies} from '../../types/movies';

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
  comments: Comments;
  movies: Movies;
}

const authorizationStatus = AuthorizationStatus.Auth;

function App({title, genre, year, comments, movies}: AppScreenProp): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainScreen
                title={title}
                genre={genre}
                year={year}
                movies={movies}
              />
            }
          />
          <Route
            path={AppRoute.Film}
            element={<MoviePageScreen />}
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerScreen movies={movies}/>}
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
                <MyListScreen movies={movies}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Review}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <AddReviewScreen movies={movies}/>
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
