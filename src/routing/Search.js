import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Search, SearchAppBar} from '../ui/screens/Search';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          header: SearchAppBar,
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
