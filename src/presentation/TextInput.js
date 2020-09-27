import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { lGColors, colors, fonts } from '../core/styleguide';

const { width } = Dimensions.get('window');

const TextInput = ({
  placeholder,
  onChangeText,
}) => (
  <Button>
    <Input
      colors={[lGColors.start, lGColors.end]}
      fontFamily={fonts.INTER_SEMIBOLD.TINY.fontFamily}
      fontSize={fonts.INTER_SEMIBOLD.TINY.fontSize}
      letterSpacing={fonts.INTER_SEMIBOLD.TINY.letterSpacing}
      lineHeight={fonts.INTER_SEMIBOLD.TINY.lineHeight}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  </Button>
);

const Button = styled.View`
  align-items: center;
  justify-content: center;
  width: ${width - 48}px;
  border-radius: 10px;
  margin: 10px;
  height: 40px;
`;

const Input = styled.TextInput`
  border-color: white;
  border-width: 2px;
  background-color: ${colors.gray};
  height: 40px;
  width: 100%;
  border-radius: 10px;
  color: ${({ color }) => color || colors.white};
  text-align: center;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight || '0'}px;
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '0'}px;
`;


export default TextInput;
