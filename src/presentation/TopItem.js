import React from 'react';
import { Dimensions, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { TouchableOpacity } from 'react-native-gesture-handler';

import MainIcon from './MainIcon';
import ItemWithText from './ItemWithText';
import ButtonItem from './ButtonItem';
import AnimatedHeightContainer from './AnimatedHeightContainer';

import { lGColors, colors, container, fonts } from '../core/styleguide';

const { height, width } = Dimensions.get('window');

const TopItem = ({ signIn, addLogin, addPassword, navigation, userSignIn }) => {
  return (
    <Wrapper colors={[lGColors.videoStart, lGColors.videoEnd]}>
      <MainIcon />
      <Image
        style={{ width: 200, height: 100 }}
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
      <AnimatedHeightContainer 
        addLogin={addLogin}
        addPassword={addPassword}
      />
      <ButtonItem 
        onPress={signIn}
        userSignIn={userSignIn}
      />
      <ReadMoreWrapper
        onPress={() => navigation.navigate('PDF')}
      >
        <ItemWithText
          itemHeight={16}
          color={colors.gray}
          fontFamily="Inter-Regular"
          fontSize={12}
          lineHeight={16}
          text={'Terms of use'}
        />
      </ReadMoreWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(LinearGradient)`
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  height: ${height - getStatusBarHeight() - getBottomSpace()};
`;

const ReadMoreWrapper = styled(TouchableOpacity)`
    width: ${width - 48}px;
    justify-content: center;
    align-items: center;
    margin-bottom: 24;
`;

export default TopItem;
