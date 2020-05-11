import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import MainIcon from './MainIcon';
import ItemWithText from './ItemWithText';

import { LGColors, colors } from '../core/styleguide';

const { height, width } = Dimensions.get('window');
const TopItem = () => {
  return (
    <Wrapper colors={[LGColors.start, LGColors.end]}>
      <MainIcon />
      <ItemWithText
        itemHeight={29}

        fontFamily="Inter-Medium"
        fontSize={19}
        lineHeight={34}
        letterSpacing={-0.9}
        text={'Cupcake constructor'}
      />
      <ItemWithText
        itemHeight={102}
        fontFamily="Inter-SemiBold"
        fontSize={20}
        lineHeight={34}
        letterSpacing={-0.9}
        text={'Make cupcake better for you'}
      />
      <Button>
        <TextItem
          fontFamily="Inter-SemiBold"
          fontSize={17}
          lineHeight={24}
          letterSpacing={-0.2}
        >
          {'Login'}
        </TextItem>
      </Button>
      <Button>
        <TextItem
          fontFamily="Inter-SemiBold"
          fontSize={17}
          lineHeight={24}
          letterSpacing={-0.2}
        >
          {'Password'}
        </TextItem>
      </Button>
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
        text={'Terms of use'}
      />
    </Wrapper>
  );
};

const Wrapper = styled(LinearGradient)`
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  height: ${height - getStatusBarHeight() - getBottomSpace()};
`;

const Button = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #007AFF;
  width: ${width - 48}px;
  border-radius: 10px;
  height: 50px;
  margin: 10px;
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