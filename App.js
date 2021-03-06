/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {store, persistor} from './src/states/store';
import {Provider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {CombinedDarkTheme, CombinedDefaultTheme} from './src/utils/theme';
import {setTheme} from './src/states/AppSlice';

import MainStack from './src/routing/Main';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  dispatch(setTheme(isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme));
  return <MainStack />;
};

const Wrappers = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <App />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default Wrappers;
