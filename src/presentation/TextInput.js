import React, { Component } from 'react';
import { Image, Animated, StyleSheet, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import { lGColors } from '../core/styleguide';

const { width } = Dimensions.get('window');

const TextInput = ({
  color,
  fontFamily,
  fontSize,
  lineHeight,
  letterSpacing,
  text,
  placeholder,
}) => {
  return (
    <Button>
      <Input
        colors={[lGColors.start, lGColors.end]}
        fontFamily="Inter-SemiBold"
        fontSize={17}
        letterSpacing={-0.2}
        placeholder={placeholder}
      />
    </Button>
  );
};

const Button = styled.View`
  align-items: center;
  justify-content: center;
  width: ${width - 48}px;
  border-radius: 10px;
  /* background-color: blue; */
  margin: 10px;
  height: 40px;
`;

const Input = styled.TextInput`
  border-color: white;
  border-width: 2px;
  background-color: 'rgba(255, 255, 255, 0.6)';
  height: 40px;
  width: 100%;
  border-radius: 10px;
  color: ${({ color }) => color || 'white'};
  text-align: center;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight || '0'}px;
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '0'}px;
`;


export default TextInput;
