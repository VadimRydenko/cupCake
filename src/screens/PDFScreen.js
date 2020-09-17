import React, { useState, useEffect, Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { SafeAreaView, View, StyleSheet, Dimensions, Animated, Image, Easing } from 'react-native';
import PDFView from 'react-native-view-pdf';
import Spinner from 'react-native-spinkit';
import BackgroundVideo from '../presentation/BackgroundVideo';
import TopItem from '../presentation/TopItem';
import BottomItem from '../presentation/BottomItem';
import KeyboardAvoid from '../presentation/KeyboardAvoid';
import { signIn } from '../store/Auth/actions';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');

class PDFScreen extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
    this.moveRightValue = new Animated.Value(-15);
    this.opacityValue = new Animated.Value(0);
  }

  componentDidMount () {
    setTimeout(() => {
      this.startAnim()
    }, 2000);
  }

  startAnim = () => {
    this.move();
    this.animate();
  };
  
  move = () => {
    this.moveRightValue.setValue(0);
    Animated.timing(
      this.moveRightValue,
      {
        toValue: 50,
        duration: 300,
        easing: Easing.linear,
      },
    ).start();
  };

  animate = () => {
    this.opacityValue.setValue(0);
    Animated.timing(
      this.opacityValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
      },
    ).start();
  }

  render(){
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <StyledPDFView
          onLoad={() => this.setState({isLoading: false})}
          fadeInDuration={500}
          resource={'RV.pdf'}
          resourceType={'file'}
          height={height}
          width={width}
        />
        {this.state.isLoading && (
          <Spinner 
            style={{ position: 'absolute', alignSelf: 'center', marginTop: height / 2 }} 
            isVisible 
            size={100} 
            type={'ThreeBounce'} 
            color={'blue'}
          />
        )}
       
        <Animated.View 
        style={{
          position: 'absolute',
          width: 50,
          height: 50,
          // bottom: 50,
          backgroundColor: 'magenta',
          right: this.moveRightValue,
          opacity: this.opacityValue,
        }}
        >
           <BackButton 
          onPress={() => this.props.navigation.goBack()}
        />
        </Animated.View>
      </SafeAreaView>
    );
  };
};

const StyledPDFView = styled(PDFView)`
  width: ${({ width }) => width};
  height: ${({ height }) => height - 200};
`;

const BackButton = styled(TouchableOpacity)`
  background-color: red;
  width: 50;
  height: 50;
`;

export default PDFScreen;

