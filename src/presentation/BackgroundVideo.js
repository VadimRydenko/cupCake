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
    top: 0px;
    left: 0px;
    align-items: stretch;
    bottom: 0px;
    right: 0px;
`;

export default BackgroundVideo;
