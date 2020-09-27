import React, { Component } from 'react';
import { Animated } from 'react-native';
import AnimatedModal from '../presentation/AnimatedModal';


function withAnimatedAlert(ComponentWithAnimation) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.springValue = new Animated.Value(0);
    }

    showModalAnimatedModal = () => {
      this.setState({ alertModalIsOpen: true });
      this.spring();
    };

    spring = () => {
      this.springValue.setValue(0.8);
      Animated.spring(
        this.springValue,
        {
          toValue: 1,
          friction: 2,
          useNativeDriver: false,
        },
      ).start();
    };

    closeAlert = () => {
      this.springValue.setValue(0);
    };

    render() {
      return (
        <>
          <ComponentWithAnimation
            showModalAnimatedModal={this.showModalAnimatedModal}
            {...this.props}
          />
          <AnimatedModal
            animatedStyle={{ transform: [{ scale: this.springValue }] }}
            handleCloseAlert={this.closeAlert}
          />
        </>
      );
    }
  };
}

export default withAnimatedAlert;
