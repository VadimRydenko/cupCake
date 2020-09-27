import React from 'react';
import { colors, fonts } from '../core/styleguide';

import ItemWithText from './ItemWithText';
import LottieAnimation from './LottieAnimation';

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
  animation,
  animationHeight,
  animationWidth,
}) => (
  <>
    <LottieAnimation
      animation={animation}
      animationHeight={animationHeight}
      animationWidth={animationWidth}
    />
    <ItemWithText
      marginTop={6}
      textAlign="center"
      color={colors.black}
      fontStyle={fonts.INTER_SEMIBOLD.SMALL}
      text={header}
    />

    <ItemWithText
      marginTop={8}
      marginBottom={68}
      marginLeft={24}
      marginRight={24}
      textAlign="center"
      color={colors.descriptionColor}
      fontStyle={fonts.INTER_MEDIUM.SMALL}
      text={description}
    />
  </>
);

export default ItemWithTopIcon;
