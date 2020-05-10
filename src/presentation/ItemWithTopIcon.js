import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../core/styleguide';

import ItemWithText from './ItemWithText';

const ItemWithTopIcon = ({
  itemWidth,
  itemHeight,
  marginTop,
  marginBottom,
  color,
  fontFamily,
  fontSize,
  lineHeight,
  letterSpacing,
  header,
  description,
  icon,
}) => {
  return (
    <>
      <Icon
        source={icon}
      />
      <ItemWithText 
        marginTop={6}
        justifyContent="center"
        alignItems="center"
        fontFamily="Inter-SemiBold"
        fontSize={19}
        letterSpacing={-0.3}
        textAlign="center"
        color={colors.black}
        text={header}
      />
      <ItemWithText 
        marginTop={8}
        marginBottom={68}
        justifyContent="center"
        alignItems="center"
        marginLeft={24}
        marginRight={24}
        textAlign="center"
        color={colors.descriptionColor}
        fontFamily="Inter-Medium"
        fontSize={15}
        letterSpacing={-0.24}
        lineHeight={18}
        text={description}
      />
    </> 
  );
};

const Icon = styled.Image`
  width: 40px;
  height: 40px;
`;

export default ItemWithTopIcon;
