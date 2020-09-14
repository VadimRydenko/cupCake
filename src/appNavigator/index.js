import * as React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView, SafeAreaView, View } from 'react-native';
import BackgroundVideo from '../presentation/BackgroundVideo';
import TopItem from '../presentation/TopItem';
import BottomItem from '../presentation/BottomItem';
import KeyboardAvoid from '../presentation/KeyboardAvoid';


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

const LogIn = () => {
  return (
    <SafeAreaView>
      <KeyboardAvoid>
        <ScrollView 
          bounces={false} 
          contentInsetAdjustmentBehavior="automatic"
        >
          <BackgroundVideo />
          <TopItem />
          <BottomItem />
         
        </ScrollView>
      </KeyboardAvoid>
    </SafeAreaView>
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
