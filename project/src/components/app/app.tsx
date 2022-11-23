import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import {AppRoute, AuthorizationStatus} from '../../const';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Comments} from '../../types/comments';
import {HelmetProvider} from 'react-helmet-async';
import MainScreen from '../../pages/main-screen/main-screen';
import MoviePageScreen from '../../pages/movie-page-screen.tsx/movie-page-screen';
import {Movies} from '../../types/movies';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';

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
              />
            }
          />
          <Route
            path={`${AppRoute.Film}:id`}
            element={<MoviePageScreen movies={movies} comments={comments}/>}
          />
          <Route
            path={`${AppRoute.Player}:id`}
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
