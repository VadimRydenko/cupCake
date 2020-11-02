import React from 'react';
import {
  View, StyleSheet, Animated, Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.focused = null;
    this.moveToTop = new Animated.Value(0);
    this.buttonSize = new Animated.Value(1);
  }

  componentDidUpdate() {
    const { focused } = this.props;
    if (focused) {
      this.focused = focused;
      this.moveUp();
      this.scaleUp();
    }
  }

    moveUp = () => {
      this.moveToTop.setValue(0);
      Animated.timing(
        this.moveToTop,
        {
          toValue: 30,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: false,
        },
      ).start();
    };

    scaleUp = () => {
      this.buttonSize.setValue(0);
      Animated.sequence([
        Animated.timing(this.buttonSize, {
          toValue: 1.2,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    };

    render() {
      const { backgroundColor } = this.props;

      const sizeStyle = {
        transform: [{ scale: this.buttonSize }],
      };
      return (
        <Animated.View
          style={[sizeStyle, styles.buttonContainer, { paddingBottom: this.moveToTop }]}
        >
          <View style={styles.button}>
            <Animated.View>
              <Icon name="home" size={30} />
            </Animated.View>
          </View>
        </Animated.View>
      );
    }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 36,
    backgroundColor: 'white',
    shadowColor: '#7F58FF',
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
});
