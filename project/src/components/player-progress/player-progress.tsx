import dayjs from 'dayjs';
import {duration} from 'dayjs';
import {SECONDS_IN_HOUR} from '../../const';

dayjs.extend(duration);

type PlayerProgressProps = {
  currentTime: number;
  filmDuration: number;
}

const prepareTimeLeft = (time: number) => {
  if (time >= SECONDS_IN_HOUR) {
    return dayjs.duration(time, 'seconds').format('HH:mm:ss');
  }

  return dayjs.duration(time, 'seconds').format('mm:ss');
};

function PlayerProgress({currentTime, filmDuration}: PlayerProgressProps): JSX.Element {
  return (
    <>
      <div className="player__time">
        <progress
          className="player__progress"
          value={`${currentTime / filmDuration * 100}`}
          max="100"
        />
        <div
          className="player__toggler"
          style={{ left: `${currentTime / filmDuration * 100}%` }}
        >
        Toggler
        </div>
      </div>
      <div className="player__time-value">
        {`-${prepareTimeLeft(filmDuration - currentTime)}`}
      </div>
    </>
  );
}

export default PlayerProgress;
