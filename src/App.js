// @flow
import 'react-native-gesture-handler';
import * as React from 'react';
import type { Node } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './appNavigator';
import store from './store';


const App = (): Node => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
