import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Items, ItemsAppBar} from '../ui/screens/Items';
import {Item, ItemAppBar} from '../ui/screens/Item';
import {PackItem, PackItemAppBar} from '../ui/screens/PackItem';
import {
  SelectContainer,
  SelectContainerAppBar,
} from '../ui/screens/SelectContainer';

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
        name="Item"
        component={Item}
        options={{
          header: ItemAppBar,
        }}
      />
      <Stack.Screen
        name="PackItem"
        component={PackItem}
        options={{
          header: PackItemAppBar,
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
