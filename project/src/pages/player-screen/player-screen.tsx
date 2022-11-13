import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';

import {Movie, Movies} from '../../types/movies';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type PlayerScreenProps = {
  movies: Movies;
}

function PlayerScreen({movies}: PlayerScreenProps): JSX.Element {
  const {id} = useParams();
  const movie = movies.find((item: Movie) => item.id === id);

  return movie ? (
    <div className="player">
      <Helmet>
        <title>{movie.name} is playing</title>
      </Helmet>
      <video src={movie.videoLink} className="player__video" poster="img/player-poster.jpg" />
      <button type="button" className="player__exit">
          Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100" />
            <div className="player__toggler" style={{ left: '30%' }}>
                Toggler
            </div>
          </div>
          {/* Здесь я так полагаю дальше поменяется вывод времени в следующих задания */}
          <div className="player__time-value">{movie.runTime}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play">
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
  ) : <NotFoundScreen />;
}


export default PlayerScreen;
