// @flow
import React from 'react';
import type { Node } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors, fonts } from '../core/styleguide';
// import { validateEmail } from '../core/func/validation';


import TextItem from './TextItem';


const { width } = Dimensions.get('window');

type foo = {
  userSignIn: () => {},
}

const ButtonItem = ({ userSignIn, text }) :Node => (
  <Button onPress={userSignIn}>
    <TextItem
      fontStyle={fonts.INTER_SEMIBOLD.SMALL}
      text={text}
    />
  </Button>
);

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${width - 48}px;
  border-radius: 10px;
  background-color: ${colors.violet};
  height: 50px;
  margin: 10px;
`;

export default ButtonItem;
