type FullScreenButtonProps = {
  handleButtonClick: () => void;
}

function FullScreenButton({handleButtonClick}: FullScreenButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="player__full-screen"
      onClick={handleButtonClick}
    >
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen" />
      </svg>
      <span>Full screen</span>
    </button>
  );
}

export default FullScreenButton;
