import React, { Component } from 'react';
import { Image, Animated, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

const MainIcon = () => (
    <ImageLoader
      style={styles.image}
      source={require('../assets/icons/cup2.png')}
    />
);

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export default MainIcon;
