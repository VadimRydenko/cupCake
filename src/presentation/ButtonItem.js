import React, { Component } from 'react';
import { Image, Animated, StyleSheet, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../core/styleguide';
import LinearGradient from 'react-native-linear-gradient';
import { validateEmail } from '../core/func/validation';


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
  onPress,
  email,
  userSignIn,
}) => {
  return (
    <Button onPress={userSignIn}>
      <TextItem
        fontFamily="Inter-SemiBold"
        fontSize={18}
        lineHeight={24}
        letterSpacing={-0.2}
        text={'Sign In'}
      />
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${width - 48}px;
  border-radius: 10px;
  background-color: ${colors.violet};
  height: 50px;
  margin: 10px;
`;

export default ButtonItem;
