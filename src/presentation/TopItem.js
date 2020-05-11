import React from 'react';
import { Dimensions, View, TouchableOpacity, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import MainIcon from './MainIcon';
import ItemWithText from './ItemWithText';
import ButtonItem from './ButtonItem';
import TextInput from './TextInput';
import TransparentButton from './TransparentButton';
import AnimatedHeightContainer from './AnimatedHeightContainer';

import { lGColors, colors, container } from '../core/styleguide';

const { height, width } = Dimensions.get('window');

const TopItem = () => {
  return (
    <Wrapper colors={[lGColors.videoStart, lGColors.videoEnd]}>
      <MainIcon />
      <Image style={{ width: 200, height: 100 }}
        source={require('../assets/icons/tt.png')}
      />
      <ItemWithText
        itemHeight={102}
        fontFamily="Inter-SemiBold"
        fontSize={20}
        lineHeight={34}
        letterSpacing={-0.9}
        text={'Make cupcake better for you'}
      />
      <AnimatedHeightContainer>
      </AnimatedHeightContainer>
      <ButtonItem />
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

const TransparentButtonContainer = styled.View`
  width: ${width - container.marginHorizontal}px;
  height: 30;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 50px;
`;

export default TopItem;
