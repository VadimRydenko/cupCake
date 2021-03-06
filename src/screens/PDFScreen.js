import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
  SafeAreaView, Dimensions, Animated, Easing,
} from 'react-native';
import PDFView from 'react-native-view-pdf';
import Spinner from 'react-native-spinkit';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { height, width } = Dimensions.get('window');

class PDFScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
    this.moveRightValue = new Animated.Value(-15);
    this.opacityValue = new Animated.Value(0);
  }

  componentDidMount() {
    setTimeout(() => {
      this.startAnim();
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
        useNativeDriver: false,
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
        useNativeDriver: false,
      },
    ).start();
  }

  render() {
    const { isLoading } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <StyledPDFView
          onLoad={() => this.setState({ isLoading: false })}
          fadeInDuration={500}
          resource="RV.pdf"
          resourceType="file"
          itemHeight={height}
          itemWidth={width}
        />
        {isLoading && (
          <StyledSpinner
            isVisible
            size={100}
            type="ThreeBounce"
            color="blue"
          />
        )}
        <AnimatedView
          style={{
            right: this.moveRightValue,
            opacity: this.opacityValue,
          }}
        >
          <BackButton
            onPress={() => navigation.goBack()}
          >
            <Icon name="times-circle" size={50} />
          </BackButton>
        </AnimatedView>
      </SafeAreaView>
    );
  }
}

const StyledPDFView = styled(PDFView)`
  width: ${({ itemWidth }) => itemWidth}px;
  height: ${({ itemHeight }) => itemHeight - 200}px;
`;

const BackButton = styled(TouchableOpacity)`
`;

const StyledSpinner = styled(Spinner)`
  position: absolute;
  alignSelf: center;
  marginTop: ${height / 2}px;
`;

const AnimatedView = styled(Animated.View)`
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 70px;
`;


export default PDFScreen;
