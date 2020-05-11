import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import BackgroundVideo from './presentation/BackgroundVideo';
import TopItem from './presentation/TopItem';
import BottomItem from './presentation/BottomItem';
import KeyboardAvoid from './presentation/KeyboardAvoid';

const App = () => {
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

export default App;
