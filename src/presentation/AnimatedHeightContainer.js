import React from 'react';
import { Dimensions, Animated } from 'react-native';
import styled from 'styled-components/native';

import { container } from '../core/styleguide';
import TransparentButton from './TransparentButton';
import TextInput from './TextInput';

const { width } = Dimensions.get('window');

class AnimatedHeightContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.animatedTranslateY = new Animated.Value(150);
    this.animatedStyle = { height: this.animatedTranslateY };
  }

    toggleAnimation = (value) => {
      this.handleActionOpen(value);
      this.setState({ isOpen: value });
    };

    handleActionOpen = (isOpen) => {
      const height = isOpen ? 210 : 150;
      Animated.timing(this.animatedTranslateY, {
        toValue: height,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

    render() {
      const { isOpen } = this.state;
      const { addLogin, addPassword } = this.props;
      return (

        <AnimatedContainer
          style={[this.animatedStyle]}
        >
          <TransparentButtonContainer>
            <TransparentButton
              text="Login"
              onPress={() => this.toggleAnimation(false)}
              isSelected={!isOpen}
            />
            <TransparentButton
              text="Sign Up"
              onPress={() => this.toggleAnimation(true)}
              isSelected={isOpen}
            />
          </TransparentButtonContainer>
          <TextInput
            placeholder="Username"
            onChangeText={addLogin}
          />
          <TextInput
            placeholder="Password"
            onChangeText={addPassword}
          />
          <TextInput
            placeholder="Confirm Password"
          />
        </AnimatedContainer>
      );
    }
}

const AnimatedContainer = styled(Animated.View)`
 overflow: hidden;
`;

const TransparentButtonContainer = styled.View`
  width: ${width - container.marginHorizontal}px;
  height: 30px;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 50px;
`;

export default AnimatedHeightContainer;
