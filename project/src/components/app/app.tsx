import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import {AppRoute} from '../../const';
import {getDataLoadingStatus} from '../../store/service-state-process/selectors';
import {HelmetProvider} from 'react-helmet-async';
import Loading from '../loading/loaging';
import MainScreen from '../../pages/main-screen/main-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import {Route, Routes} from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import {useAppSelector} from '../../hooks';

function App(): JSX.Element {
  const isDataLoading = useAppSelector(getDataLoadingStatus);

  return (
    <HelmetProvider>
      {isDataLoading && <Loading />}
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen />
          }
        />
        <Route
          path={`${AppRoute.Film}:id`}
          element={<MoviePageScreen />}
        />
        <Route
          path={`${AppRoute.Player}:id`}
          element={<PlayerScreen />}
        />
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
    </HelmetProvider>
  );
}

export default App;
