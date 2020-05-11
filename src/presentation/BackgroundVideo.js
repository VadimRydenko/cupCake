import React from 'react';
import styled from 'styled-components/native';
import Video from 'react-native-video';

const BackgroundVideo = () => {
  return (
    <VideoItem
      source={require('../assets/video/cupcake.mp4')}
      muted
      repeat
      resizeMode="cover"
      rate={0.2}
      ignoreSilentSwitch="obey"
    />
  );
};

const VideoItem = styled(Video)`
   position: absolute;
    top: 0;
    left: 0;
    align-items: stretch;
    bottom: 0;
    right: 0;
`;

export default BackgroundVideo;
