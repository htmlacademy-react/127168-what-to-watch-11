import cn from 'classnames';
import {PREVIEW_START_TIME} from '../../const';
import {useEffect, useRef} from 'react';
import './video-preview.css';

type VideoPreviewProps = {
  link: string;
  isPlayerActive: boolean;
  switchCardImage: () => void;
};

function VideoPreview ({link, isPlayerActive, switchCardImage}: VideoPreviewProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    const startedTimeout = setTimeout(() => {
      if (!isPlayerActive) {
        switchCardImage();
        videoRef.current?.play();
      }
    }, PREVIEW_START_TIME);

    return () => {
      if (isPlayerActive) {
        switchCardImage();
      }
      clearTimeout(startedTimeout);
    };
  });

  return (
    <video
      className={cn(
        'small-film-card__video',
        {'visually-hidden': !isPlayerActive}
      )}
      src={link}
      loop
      muted
      width="280"
      height="175"
      ref={videoRef}
    >
      Your browser does not support the video tag.
      Download the {link}
    </video>
  );
}

export default VideoPreview;
