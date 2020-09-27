import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { lGColors, colors } from '../core/styleguide';

const { width } = Dimensions.get('window');

const TextInput = ({
  placeholder,
  onChangeText,
}) => (
  <Button>
    <Input
      colors={[lGColors.start, lGColors.end]}
      fontFamily="Inter-SemiBold"
      fontSize={17}
      letterSpacing={-0.2}
      lineHeight={19}
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
  /* background-color: blue; */
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
