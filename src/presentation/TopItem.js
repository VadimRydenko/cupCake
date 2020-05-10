import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { LGColors, colors } from '../core/styleguide';

import MainIcon from './MainIcon';
import ItemWithText from './ItemWithText';

const { width } = Dimensions.get('window');
const TopItem = () => {
  return (
    <Wrapper colors={[LGColors.start, LGColors.end]}>
      <MainIcon />
      <ItemWithText
        itemHeight={29}
        marginTop={12}
        fontFamily="Inter-Medium"
        fontSize={19}
        text={'Homer Premium'}
      />
      <ItemWithText
        itemWidth={300}
        itemHeight={102}
        marginTop={68}
        fontFamily="Inter-SemiBold"
        fontSize={28}
        lineHeight={34}
        letterSpacing={-0.9}
        text={'Powerful features. Even better control. Unlimited access.'}
      />
      <Button>
        <TextItem
          fontFamily="Inter-SemiBold"
          fontSize={17}
          lineHeight={24}
          letterSpacing={-0.2}
        >
          {'Try for free'}
        </TextItem>
      </Button>
      <ItemWithText 
        itemHeight={16}
        marginBottom={24}
        color={colors.gray}
        fontFamily="Inter-Regular"
        fontSize={12}
        lineHeight={16}
        text={'One month free, then 5,9 USD/month'}
      />
    </Wrapper>
  );
};

const Wrapper = styled(LinearGradient)`
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  height: ${width * 1.5};
`;
/* height: ${height - getStatusBarHeight() - getBottomSpace()}; */

const Button = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #007AFF;
  width: ${width - 48}px;
  border-radius: 10px;
  height: 50px;
  margin: 20px;
`;

const TextItem = styled.Text`
  color: ${({ color }) => color || 'white'};
  text-align: center;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight || '0'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '0'};
`;

export default TopItem;
