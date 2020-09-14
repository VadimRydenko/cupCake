import * as React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import LogIn from '../screens/LogIn';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
            headerShown: false,
          }}
        >
          <RootStack.Screen name="Home" component={LogIn} />
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
