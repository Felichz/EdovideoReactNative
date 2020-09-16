import React, {useState, useRef} from 'react';

import PlayerLayout from '../components/PlayerLayout';

const Player = () => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [inFullscreen, setInFullscreen] = useState(false);
  const [paused, setPaused] = useState(false);
  const onLoad = () => setLoading(false);

  const togglePlay = () => setPaused(!paused);

  const toggleFullscreen = () => {
    inFullscreen
      ? videoRef.current.dismissFullscreenPlayer()
      : videoRef.current.presentFullscreenPlayer();

    setInFullscreen(!inFullscreen);
  };

  return (
    <PlayerLayout
      videoUri={'https://anderssonfelix.com/edovideo/testVideoMobile.mp4'}
      videoProps={{
        onLoad,
        paused,
        ref: videoRef,
      }}
      controlProps={{
        togglePlay,
        paused,
        toggleFullscreen,
        inFullscreen,
      }}
      loading={loading}
    />
  );
};

export default Player;
