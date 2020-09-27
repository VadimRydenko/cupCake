import React from 'react';
import styled from 'styled-components/native';

import ItemWithText from './ItemWithText';
import ItemWithTopIcon from './ItemWithTopIcon';

import { colors } from '../core/styleguide';
import { features } from '../core/const/features';

const bottomHeaderText = ['All these features', 'are included in the', 'premium package'];

const BottomItem = () => (
  <Wrapper>
    <HeaderWrapper>
      <ItemWithText
        fontFamily="Inter-SemiBold"
        fontSize={28}
        letterSpacing={-0.9}
        lineHeight={34}
        text={bottomHeaderText}
        color={colors.black}
      />
    </HeaderWrapper>
    {features.map((feature) => {
      const {
        animation, header, description, animationWidth, animationHeight,
      } = feature;
      return (
        <ItemWithTopIcon
          key={header}
          animation={animation}
          header={header}
          description={description}
          animationWidth={animationWidth}
          animationHeight={animationHeight}
        />
      );
    })}

  </Wrapper>
);

const Wrapper = styled.View`
  background-color: ${colors.white};
  align-items: center;
`;

const HeaderWrapper = styled.View`
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
`;

export default BottomItem;
