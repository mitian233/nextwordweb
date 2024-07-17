import { VideoPlayer } from "@videojs-player/react";
import "video.js/dist/video-js.css";

interface UVideoPlayerProps {
  src: string;
  loop: boolean | undefined;
  onPlay: (event: Event) => void;
  onPause: (event: Event) => void;
}

const UVideoPlayer: React.FC<UVideoPlayerProps> = ({
  src,
  loop,
  onPlay,
  onPause,
}) => {
  function handlePlay(event: Event): void {
    if (event !== null) {
      onPlay(event);
    }
    console.log("Video Played");
  }

  function handlePause(event: Event): void {
    if (event !== null) {
      onPause(event);
    }
    console.log("Video Paused");
  }
  return (
    <VideoPlayer
      src={src}
      controls
      loop={loop}
      volume={0.6}
      // more props...
      // onMounted={/*...*/}
      // onReady={/*...*/}
      onPlay={handlePlay}
      onpause={handlePause}
      // onEnded={/*...*/}
      // onSeeking={/*...*/}
      // // more events...
    />
  );
};

export default UVideoPlayer;
