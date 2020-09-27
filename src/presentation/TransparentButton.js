import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import TextItem from './TextItem';
import { lGColors, colors, fonts } from '../core/styleguide';

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
      fontStyle={fonts.INTER_MEDIUM.MEDIUM}
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
