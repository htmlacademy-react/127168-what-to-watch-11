type PlayButtonProps = {
  isPlay: boolean;
  handleButtonClick: () => void;
};

function PlayButton({isPlay, handleButtonClick}: PlayButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="player__play"
      onClick={handleButtonClick}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref={isPlay ? '#pause' : '#play-s'} />
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayButton;
