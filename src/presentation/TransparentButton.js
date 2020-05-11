import React, { Component } from 'react';
import { Image, Animated, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import TextItem from './TextItem';
import { lGColors } from '../core/styleguide';

const { width } = Dimensions.get('window');

const TransparentButton = ({
  color,
  fontFamily,
  fontSize,
  lineHeight,
  letterSpacing,
  onPress,
  isSelected,
  text,
}) => {
  return (
    <TouchableOpacity
    style={{ width: 100}}
      onPress={onPress}
    >
      <TextItem
        colors={[lGColors.start, lGColors.end]}
        fontFamily="Inter-Medium"
        fontSize={20}
        letterSpacing={-0.2}
        lineHeight={20}
        text={text}
      />
      {isSelected && <Border />}
    </TouchableOpacity>
  );
};

const Border = styled.View`
  height: 1px;
  width: 100px;
  background-color: white;
`;

export default TransparentButton;
