import cn from 'classnames';
import './loading.css';

type LoadingProps = {
  isPlayer?: boolean;
};

function Loading ({isPlayer}: LoadingProps): JSX.Element {
  return (
    <div className={cn(
      'loading-page',
      {'loading-player-page': isPlayer})}
    >
      <figure className="figure-class">
        <div className="dot white"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </figure>
    </div>
  );
}

export default Loading;
