import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Items, ItemsAppBar} from '../ui/screens/Items';

const Stack = createNativeStackNavigator();

const ItemsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Items">
      <Stack.Screen
        name="Items"
        component={Items}
        options={{
          header: ItemsAppBar,
        }}
      />
    </Stack.Navigator>
  );
};

export default ItemsStack;
