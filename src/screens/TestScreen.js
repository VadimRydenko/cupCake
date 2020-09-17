
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { SafeAreaView, View, StyleSheet, Dimensions, TouchableOpacity, Animated,
  Image, Easing, Text } from 'react-native';
import PDFView from 'react-native-view-pdf';
import Spinner from 'react-native-spinkit';
import BackgroundVideo from '../presentation/BackgroundVideo';
import TopItem from '../presentation/TopItem';
import BottomItem from '../presentation/BottomItem';
import KeyboardAvoid from '../presentation/KeyboardAvoid';
import { signIn } from '../store/Auth/actions';

class PDFScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAAA: true,
    };
    this.spinValue = new Animated.Value(0);
    this.timingValue = new Animated.Value(0);
  }

  componentDidMount () {
    this.spin();
    this.animate();
  }

  spin () {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.cubic,
      },
    ).start(() => this.spin());
  }

  animate () {
    this.timingValue.setValue(0);
    Animated.timing(
      this.timingValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
      },
    ).start(() => this.animate());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const marginLeft = this.timingValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    })
    const opacity = this.timingValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })
    const movingMargin = this.timingValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    })
    const textSize = this.timingValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    })
    const rotateX = this.timingValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    })
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Animated.View 
          style={{ 
            width: 30,
             height: 30, 
            backgroundColor: 'red',
            transform: [{rotate: spin}],
          }}
        />
        <Animated.View 
          style={{ 
            width: 30,
             height: 30, 
            backgroundColor: 'red',
            marginLeft,
          }}
        /> */}
           {/* <Animated.View
        style={{
          opacity,
          marginTop: 10,
          height: 30,
          width: 40,
          backgroundColor: 'blue'}} /> */}
      <Animated.View
        style={{
          marginLeft: movingMargin,
          marginTop: 10,
          height: 30,
          width: 40,
          backgroundColor: 'orange'}} />
      {/* <Animated.Text
        style={{
          fontSize: textSize,
          marginTop: 10,
          color: 'green'}} >
          Animated Text!
      </Animated.Text> */}
      {/* <Animated.View
        style={{
          transform: [{rotateX}],
          marginTop: 50,
          height: 30,
          width: 40,
          backgroundColor: 'black'}}>
        <Text style={{color: 'white'}}>Hello from TransformX</Text>
      </Animated.View> */}
      </SafeAreaView>
    );
  }
}

export default PDFScreen;
