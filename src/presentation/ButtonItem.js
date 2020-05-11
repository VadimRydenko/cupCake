import React, { Component } from 'react';
import { Image, Animated, StyleSheet, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import TextItem from './TextItem';
import { lGColors } from '../core/styleguide';

const { width } = Dimensions.get('window');

const ButtonItem = ({
  color,
  fontFamily,
  fontSize,
  lineHeight,
  letterSpacing,
  text,
}) => {
  return (
    <Button>
      <Gradient
        colors={[lGColors.buttonStart, lGColors.buttonEnd]}
      >
        <TextItem
          fontFamily="Inter-SemiBold"
          fontSize={18}
          lineHeight={24}
          letterSpacing={-0.2}
          text={'Sign In'}
        />
      </Gradient>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${width - 48}px;
  border-radius: 10px;
  background-color: blue;
  height: 50px;
  margin: 10px;
`;

const Gradient = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 50px;
  width: 100%;
`;



// const TextItem = styled.Text`
//   color: ${({ color }) => color || 'white'};
//   text-align: center;
//   font-family: ${({ fontFamily }) => fontFamily};
//   font-size: ${({ fontSize }) => fontSize}px;
//   line-height: ${({ lineHeight }) => lineHeight || '0'}px;
//   letter-spacing: ${({ letterSpacing }) => letterSpacing || '0'}px;
// `;

export default ButtonItem;
