import * as React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LogIn from '../screens/LogIn';
import PDFScreen from '../screens/PDFScreen';

import animationConfig from './navigationAnimateConfig';
import screensNames from './screensNames';

const RootStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const appNavigator = ({ signIn }) => {
  return (
    <NavigationContainer>
      {signIn ? (
        <Tab.Navigator>
          <Tab.Screen name={screensNames.TEST} component={Test} />
          <Tab.Screen name={screensNames.TEST2} component={Test2} />
          <Tab.Screen name={screensNames.TEST3} component={Test3} />
        </Tab.Navigator>
      ) : (
        <RootStack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'vertical',
            headerShown: false,
            transitionSpec: {
              open: animationConfig,
              close: animationConfig,
            },
          }}
        >
          <RootStack.Screen name={screensNames.LOGIN} component={LogIn} />
          <RootStack.Screen name={screensNames.PDF} component={PDFScreen} />
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  ); 
};
  
const Test = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }} />
  );
};
  
const Test2 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'green' }} />
  );
};

const Test3 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'yellow' }} />
  );
};

function mapStateToProps(state) {
  const { authReducer: { logIn } } = state;
  return {
    signIn: logIn,
  };
}
export default connect(mapStateToProps, null)(appNavigator);
