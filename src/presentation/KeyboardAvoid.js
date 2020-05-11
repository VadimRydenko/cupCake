// @flow
import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components';

const KeyboardAvoid = (props) => {
  const { children } = props;

  return (
    <KeyboardAvoidView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      {children}
    </KeyboardAvoidView>
  );
};

const KeyboardAvoidView = styled.KeyboardAvoidingView`
  flex-grow: 1;
  flex-shrink: 1;
`;

export default KeyboardAvoid;
