import ExitButton from '../../components/exit-button/exit-button';
import {fetchCurrentMovieDataAction} from '../../store/api-actions';
import {getCurrentMovie} from '../../store/current-movie-data/selectors';
import {getError404Status} from '../../store/service-state-process/selectors';
import {Helmet} from 'react-helmet-async';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {setError404} from '../../store/service-state-process/service-state-process';
import {store} from '../../store';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import PlayButton from '../../components/play-button/play-button';

function PlayerScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [playerState, setPlayerState] = useState({
    isPlay: true,
  });

  const isError404 = useAppSelector(getError404Status);
  const movie = useAppSelector(getCurrentMovie);

  const {
    name,
    backgroundImage,
    videoLink,
    id: movieID
  } = movie;

  useEffect(() => {
    const currentMovieId = store.getState().CURRENT_MOVIE_DATA.currentMovie.id;
    if (id && Number(id) !== Number(currentMovieId)) {
      dispatch(fetchCurrentMovieDataAction(id));
    }

    return () => {
      if (isError404) {
        dispatch(setError404(false));
      }
    };
  }, [dispatch, id, isError404]);

  if (isError404) {
    return <NotFoundScreen />;
  }

  const onPlayButtonClick = () => {
    setPlayerState((prevState) => ({
      ...prevState,
      isPlay: !prevState.isPlay
    }));

    if (playerRef.current) {
      if (playerState.isPlay) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }
    }
  };

  return (
    <div className="player">
      <Helmet>
        <title>{name} is playing</title>
      </Helmet>
      <video
        src={videoLink}
        className="player__video"
        poster={backgroundImage}
        ref={playerRef}
        autoPlay
      />
      <ExitButton movieID={movieID}/>
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
          <PlayButton
            isPlay={playerState.isPlay}
            handleButtonClick={onPlayButtonClick}
          />
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
