import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors, fonts } from '../core/styleguide';
import { validateEmail } from '../core/func/validation';


import TextItem from './TextItem';


const { width } = Dimensions.get('window');

const ButtonItem = ({
  color,
  text,
  onPress,
  email,
  userSignIn,
}) => (
  <Button onPress={userSignIn}>
    <TextItem
      fontStyle={fonts.INTER_SEMIBOLD.SMALL}
      text="Sign In"
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
