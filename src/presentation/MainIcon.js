import React, { Component } from 'react';
import { Animated, StyleSheet } from 'react-native';

const imageSrc = require('../assets/icons/cup2.png');

const styles = StyleSheet.create({
  image: {
    marginBottom: -40,
    width: 150,
    height: 100,
  },
});

class ImageLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
    };
  }

  onLoad = () => {
    const { opacity } = this.state;
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const { opacity } = this.state;
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity,
            transform: [
              {
                scale: opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
            ],
          },
          styles.image,
        ]}
      />
    );
  }
}

const MainIcon = () => (
  <ImageLoader
    source={imageSrc}
  />
);

export default MainIcon;
