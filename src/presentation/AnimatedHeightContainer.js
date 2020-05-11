// import React from 'react';
// import { Animated } from 'react-native';
// import styled from 'styled-components/native';

// class AnimatedHeightContainer extends React.Component {

//     constructor(props: Props) {
//         super(props);

//         this.state = {
//           isOpen: false,
//         };

//         this.animatedTranslateY = new Animated.Value(150);
//         this.animatedStyle = { height: this.animatedTranslateY };
//     }

//     toggleAnimation = () => {
//         const { isOpen } = this.state;
//         this.handleActionOpen(isOpen);
//         this.setState({ isOpen: !isOpen });
//     };

//     handleActionOpen = (isOpen: boolean) => {
//         //   const animationHeight = 250;
//           const height = isOpen ? 210 : 150;
//           Animated.timing(this.animatedTranslateY, {
//             toValue: height,
//             duration: 300,
//             useNativeDriver: false,
//           }).start();
//     };

//   render() {
//     const { children } = this.props;
//     return (
 
//       <AnimatedContainer 
//       style={[this.animatedStyle]}
//       >
//         {children}
//       </AnimatedContainer>
//     );
//   }
// }

// const AnimatedContainer = styled(Animated.View)`
//  background-color: red;
//  /* height: 450px; */
//  overflow: hidden;
// `;

// export default AnimatedHeightContainer;


import React from 'react';
import { Dimensions, Animated } from 'react-native';
import styled from 'styled-components/native';

import { lGColors, colors, container } from '../core/styleguide';
import TransparentButton from './TransparentButton';
import TextInput from './TextInput';

const { height, width } = Dimensions.get('window');

class AnimatedHeightContainer extends React.Component {

    constructor(props: Props) {
        super(props);

        this.state = {
          isOpen: false,
        };

        this.animatedTranslateY = new Animated.Value(150);
        this.animatedStyle = { height: this.animatedTranslateY };
    }

    toggleAnimation = (value) => {
        const { isOpen } = this.state;
        this.handleActionOpen(value);
        this.setState({ isOpen: value});
        console.log(value, 'value');
    };

    handleActionOpen = (isOpen: boolean) => {
        //   const animationHeight = 250;
          const height = isOpen ? 210 : 150;
          Animated.timing(this.animatedTranslateY, {
            toValue: height,
            duration: 300,
            useNativeDriver: false,
          }).start();
    };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;
    return (
 
      <AnimatedContainer 
      style={[this.animatedStyle]}
      >
              <TransparentButtonContainer>
          <TransparentButton text={'Login'} onPress={() => this.toggleAnimation(false)} isSelected={!isOpen}/>
          <TransparentButton text={'Sign Up'} onPress={() => this.toggleAnimation(true)} isSelected={isOpen}/>
        </TransparentButtonContainer>
        <TextInput 
          placeholder={'Username'}
        />
        <TextInput 
          placeholder={'Password'}
        />
        <TextInput 
          placeholder={'Confirm Password'}
        />
      </AnimatedContainer>
    );
  }
}

const AnimatedContainer = styled(Animated.View)`
 /* background-color: red; */
 /* height: 450px; */
 overflow: hidden;
`;

const TransparentButtonContainer = styled.View`
  width: ${width - container.marginHorizontal}px;
  height: 30;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 50px;
`;

export default AnimatedHeightContainer;
