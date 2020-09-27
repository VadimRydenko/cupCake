import React from 'react';
import { Animated } from 'react-native';
import Animation from 'lottie-react-native';
import styled from 'styled-components/native';

export default class LottieAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.runAnimation();
  }

  runAnimation() {
    const { progress } = this.state;
    Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }),
      { iterations: -1 },
    ).start();
  }

  render() {
    const { animation, animationHeight, animationWidth } = this.props;
    const { progress } = this.state;
    return (
      <AnimatedIcon
        source={animation}
        progress={progress}
        width={animationWidth}
        height={animationHeight}
      />
    );
  }
}

const AnimatedIcon = styled(Animation)`
  width: ${({ width }) => (width || 150)}px;
  height: ${({ height }) => (height || 80)}px;
`;
