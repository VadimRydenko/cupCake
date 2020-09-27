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
  width: 227px;
  height: 150px;
  align-self: center;
  bottom: ${height / 2}px;
  backgroundColor: ${colors.white};
  border-radius: 30px;
  justify-content: flex-start;
  align-items: center;
`;

const ModalTextWrapper = styled(Animated.View)`
  height: 125px;
  justify-content: center;
  align-Items: center;
`;

const ModalBoldText = styled.Text`
  fontWeight: bold;
`;

const CloseButton = styled(TouchableWithoutFeedback)`
  border-radius: 20px;
  background-color: ${colors.violet};
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;


export default AnimatedModal;
