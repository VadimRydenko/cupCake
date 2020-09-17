import * as React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PDFScreen from '../screens/PDFScreen';

import LogIn from '../screens/LogIn';

const RootStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const appNavigator = ({ signIn }) => {
  return (
    <NavigationContainer>
      {signIn ? (
        <Tab.Navigator>
          <Tab.Screen name="SignIn" component={DetailScreen} />
          <Tab.Screen name="Test" component={Test} />
          <Tab.Screen name="Test2" component={Test2} />
        </Tab.Navigator>
      ) : (
        <RootStack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'vertical',
            headerShown: false,
            // cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        >
          <RootStack.Screen name="Home" component={LogIn} />
          <RootStack.Screen 
          name="PDF" component={PDFScreen} />
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  ); 
};
  
const DetailScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }} />
  );
};
  
const Test = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'green' }} />
  );
};

const Test2 = () => {
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
