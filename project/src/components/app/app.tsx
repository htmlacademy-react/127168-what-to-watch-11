import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import {AppRoute} from '../../const';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import {Comments} from '../../types/comments';
import {HelmetProvider} from 'react-helmet-async';
import Loading from '../loading/loaging';
import MainScreen from '../../pages/main-screen/main-screen';
import MoviePageScreen from '../../pages/movie-page-screen.tsx/movie-page-screen';
// import {Movies} from '../../types/movies';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
// import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import { useAppSelector } from '../../hooks';

type AppScreenProp = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: AppScreenProp): JSX.Element {
  const isMoviesDataLoading = useAppSelector((store) => store.isMoviesDataLoading);

  return (
    <HelmetProvider>
      {isMoviesDataLoading && <Loading />}
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
            element={<MoviePageScreen />}
          />
          {/* <Route
            path={`${AppRoute.Player}:id`}
            element={<PlayerScreen movies={movies}/>}
          /> */}
          <Route
            path={AppRoute.Login}
            element={<SignInScreen />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyListScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Review}
            element={
              <PrivateRoute>
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
    </HelmetProvider>
  );
}

export default App;
