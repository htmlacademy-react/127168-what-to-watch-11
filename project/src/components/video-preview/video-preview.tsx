import cn from 'classnames';
import {useEffect, useRef} from 'react';

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
    }, 1000);

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
