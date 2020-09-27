import React from 'react';
import { Animated, Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { colors } from '../core/styleguide';
import LottieAnimation from './LottieAnimation';

const { height } = Dimensions.get('window');
const animationSrc = require('../assets/animation/13819-icon-error');

const AnimatedModal = ({ handleCloseAlert, animatedStyle }) => (
  <AnimatedModalWrapper style={animatedStyle}>
    <ModalTextWrapper>
      <LottieAnimation
        animation={animationSrc}
        animationHeight={50}
        animationWidth={50}
      />
      <ModalBoldText>Oops</ModalBoldText>
      <Text>Your password is incorrect</Text>
    </ModalTextWrapper>
    <CloseButton
      onPress={handleCloseAlert}
    >
      <Icon name="times" size={50} color={colors.white} />
    </CloseButton>
  </AnimatedModalWrapper>
);

const AnimatedModalWrapper = styled(Animated.View)`
  position: absolute;
  width: 227;
  height: 150;
  alignSelf: center;
  bottom: ${height / 2};
  backgroundColor: ${colors.white};
  borderRadius: 30;
  justifyContent: flex-start;
  alignItems: center;
`;

const ModalTextWrapper = styled(Animated.View)`
  height: 125;
  justifyContent: center;
  alignItems: center;
`;

const ModalBoldText = styled.Text`
  fontWeight: bold;
`;

const CloseButton = styled(TouchableWithoutFeedback)`
  border-radius: 20;
  background-color: ${colors.violet};
  width: 50;
  height: 50;
  justify-content: center;
  align-items: center;
`;


export default AnimatedModal;
