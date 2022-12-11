import {DefaultPlayerTime, PlayerStatusMessage} from '../../const';
import ExitButton from '../../components/exit-button/exit-button';
import {fetchCurrentMovieDataAction} from '../../store/api-actions';
import FullScreenButton from '../../components/full-screen-button/full-screen-button';
import {getCurrentMovie} from '../../store/current-movie-data/selectors';
import {getError404Status} from '../../store/service-state-process/selectors';
import {Helmet} from 'react-helmet-async';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayButton from '../../components/play-button/play-button';
import PlayerProgress from '../../components/player-progress/player-progress';
import {requestFullScreen} from './fullscreen';
import {setError404} from '../../store/service-state-process/service-state-process';
import {store} from '../../store';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../../components/loading/loaging';

type InitialPlayerState = {
  isPlay: boolean;
  isLoading: boolean;
  isAutoplayError: boolean;
  statusMessage: PlayerStatusMessage;
  currentTime: number;
  duration: number;
}

const initialPlayerState: InitialPlayerState = {
  isPlay: true,
  isLoading: true,
  isAutoplayError: false,
  statusMessage: PlayerStatusMessage.Transpotting,
  currentTime: DefaultPlayerTime.CurrentTime,
  duration: DefaultPlayerTime.Duration,
};

function PlayerScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [playerState, setPlayerState] = useState(initialPlayerState);

  const isError404 = useAppSelector(getError404Status);
  const movie = useAppSelector(getCurrentMovie);

  const {
    name,
    videoLink,
    id: movieID
  } = movie;

  useEffect(() => {
    const currentMovieId = store.getState().CURRENT_MOVIE_DATA.currentMovie.id;

    if (id && Number(id) !== Number(currentMovieId)) {
      dispatch(fetchCurrentMovieDataAction(id));
    }

    const promiseAutoplay = playerRef.current?.play();

    if (playerState.isPlay) {
      promiseAutoplay?.then(() => {
        playerRef.current?.play();

        setPlayerState((prevState) => ({
          ...prevState,
          statusMessage: PlayerStatusMessage.GoodStatus,
          isAutoplayError: false
        }));
      }).catch(() => {
        setPlayerState((prevState) => ({
          ...prevState,
          isPlay: false,
          isAutoplayError: true
        }));
      });
    } else {
      playerRef.current?.pause();
    }

    return () => {
      if (isError404) {
        dispatch(setError404(false));
      }
    };
  }, [
    dispatch,
    id,
    isError404,
    playerState.isPlay
  ]);

  const onPlayButtonClick = () => {
    setPlayerState((prevState) => ({
      ...prevState,
      isPlay: !prevState.isPlay
    }));
  };

  const onFullScreenButtonClick = () => {
    if (playerRef.current) {
      requestFullScreen(playerRef.current);
    }
  };

  if (isError404) {
    return <NotFoundScreen />;
  }

  return (
    <div className="player">
      {playerState.isLoading && <Loading isPlayer/>}
      <Helmet>
        <title>{name} is playing</title>
      </Helmet>
      <video
        src={videoLink}
        className="player__video"
        ref={playerRef}
        onTimeUpdate={() => {
          const currentTime = playerRef.current?.currentTime || DefaultPlayerTime.CurrentTime;
          const duration = playerRef.current?.duration || DefaultPlayerTime.Duration;

          setPlayerState((prevState) => ({
            ...prevState,
            currentTime,
            duration
          }));
        }}
        onLoadedData={() => {
          setPlayerState((prevState) => {
            const currentStatus =
              prevState.isAutoplayError ?
                PlayerStatusMessage.ErrorAutoplay :
                PlayerStatusMessage.GoodStatus;

            return {
              ...prevState,
              isLoading: false,
              statusMessage: currentStatus
            };
          });
        }}
      />
      <ExitButton movieID={movieID}/>
      <div className="player__controls">
        <div className="player__controls-row">
          <PlayerProgress
            currentTime={playerState.currentTime}
            filmDuration={playerState.duration}
          />
        </div>
        <div className="player__controls-row">
          <PlayButton
            isPlay={playerState.isPlay}
            handleButtonClick={onPlayButtonClick}
          />
          <div className="player__name">{playerState.statusMessage}</div>
          <FullScreenButton
            handleButtonClick={onFullScreenButtonClick}
          />
        </div>
      </div>
    </div>
  );
}


export default PlayerScreen;
