import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const MainIcon = () => {
  return (
    <Icon
      source={require('../assets/icons/HomerIcon.png')}
    />
  );
};

const Icon = styled(Image)`
 width: 36;
 height: 36;
`;

export default MainIcon;
