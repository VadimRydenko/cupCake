import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import BackgroundVideo from './presentation/BackgroundVideo';
import TopItem from './presentation/TopItem';
import BottomItem from './presentation/BottomItem';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView bounces={false} contentInsetAdjustmentBehavior="automatic">
        <BackgroundVideo />
        <TopItem />
        <BottomItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
