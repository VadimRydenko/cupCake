import React from 'react';
import styled from 'styled-components/native';

import ItemWithText from './ItemWithText';
import ItemWithTopIcon from './ItemWithTopIcon';

import { colors } from '../core/styleguide';
import { features } from '../core/const/features';

const bottomHeaderText = ['All these features', 'are included in the', 'premium package'];

const BottomItem = () => {
  return (
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
        const { icon, header, description } = feature;
        return (
          <ItemWithTopIcon 
            icon={icon}
            header={header}
            description={description}
          />
        );
      })}
      
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: white;
  align-items: center;
`;

const HeaderWrapper = styled.View`
  margin-top: 40;
  justify-content: center;
  align-items: center;
  margin-bottom: 68px;
`;

export default BottomItem;
