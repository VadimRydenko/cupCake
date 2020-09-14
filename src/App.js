import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './appNavigator';
import store from './store';


const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
