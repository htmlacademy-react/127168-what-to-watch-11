import {fetchCurrentMovieDataAction} from '../../store/api-actions';
import {getCurrentMovie} from '../../store/current-movie-data/selectors';
import {getError404Status} from '../../store/service-state-process/selectors';
import {Helmet} from 'react-helmet-async';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {setDefaultCurrentMovieData} from '../../store/current-movie-data/current-movie-data';
import {setError404} from '../../store/service-state-process/service-state-process';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';

function PlayerScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const videoRef = useRef<HTMLVideoElement | null>(null);


  const isError404 = useAppSelector(getError404Status);
  const movie = useAppSelector(getCurrentMovie);

  const {
    name,
    backgroundImage,
    videoLink
  } = movie;

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentMovieDataAction(id));
    }

    return () => {
      dispatch(setDefaultCurrentMovieData());
      dispatch(setError404(false));
    };
  }, [dispatch, id]);

  if (isError404) {
    return <NotFoundScreen />;
  }

  return (
    <div className="player">
      <Helmet>
        <title>{name} is playing</title>
      </Helmet>
      <video
        src={videoLink}
        className="player__video"
        poster={backgroundImage}
        ref={videoRef}
        autoPlay
      />
      <button
        type="button"
        className="player__exit"
      >
          Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value="30"
              max="100"
            />
            <div
              className="player__toggler"
              style={{ left: '30%' }}
            >
                Toggler
            </div>
          </div>
          <div className="player__time-value">
            {movie.runTime}
          </div>
        </div>
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}


export default PlayerScreen;
