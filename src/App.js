import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, SafeAreaView, Text, View, Button } from 'react-native';
import BackgroundVideo from './presentation/BackgroundVideo';
import TopItem from './presentation/TopItem';
import BottomItem from './presentation/BottomItem';
import KeyboardAvoid from './presentation/KeyboardAvoid';


const RootStack = createStackNavigator();

const App = () => {
  const signedIn = true;
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {signedIn ? (
          <>
            <RootStack.Screen name="Home" component={LogIn} />
            <RootStack.Screen name="Test" component={Test} />
          </>
        ) : (
          <RootStack.Screen name="SignIn" component={DetailScreen} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const LogIn = ({ navigation }) => {
  return (
    <SafeAreaView>
      <KeyboardAvoid>
        <ScrollView 
          bounces={false} 
          contentInsetAdjustmentBehavior="automatic"
        >
          <BackgroundVideo />
          <TopItem 
            navigation={navigation}
          />
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

export default App;
