import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Items, ItemsAppBar} from '../ui/screens/Items';
import {AddItem, AddItemAppBar} from '../ui/screens/AddItem';
import {
  SelectContainer,
  SelectContainerAppBar,
} from '../ui/screens/SelectContainer';
import {AddContainerStack} from './AddContainer';

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
      <Stack.Screen
        name="AddItem"
        component={AddItem}
        options={{
          header: AddItemAppBar,
        }}
      />
      <Stack.Screen
        name="AddContainer"
        component={AddContainerStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SelectContainer"
        component={SelectContainer}
        options={{
          header: SelectContainerAppBar,
        }}
      />
    </Stack.Navigator>
  );
};

export default ItemsStack;
