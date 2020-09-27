import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import TextItem from './TextItem';
import { lGColors, colors } from '../core/styleguide';

const TransparentButton = ({
  onPress,
  isSelected,
  text,
}) => (
  <TouchableOpacity
    style={{ width: 100 }}
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

const Border = styled.View`
  height: 1px;
  width: 100px;
  background-color: ${colors.white};
`;

export default TransparentButton;
