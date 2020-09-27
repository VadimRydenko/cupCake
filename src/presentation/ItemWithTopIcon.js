import React from 'react';
import { colors } from '../core/styleguide';

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
      fontFamily="Inter-SemiBold"
      fontSize={19}
      letterSpacing={-0.24}
      lineHeight={18}
      text={header}
    />

    <ItemWithText
      marginTop={8}
      marginBottom={68}
      marginLeft={24}
      marginRight={24}
      textAlign="center"
      color={colors.descriptionColor}
      fontFamily="Inter-Medium"
      fontSize={15}
      letterSpacing={-0.3}
      lineHeight={18}
      text={description}
    />
  </>
);

export default ItemWithTopIcon;
