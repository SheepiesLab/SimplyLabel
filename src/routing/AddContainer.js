import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Appbar} from 'react-native-paper';

import {AddItem, AddItemAppBar} from '../ui/screens/AddItem';
import {AddItemToContainer, AddItemToContainerAppBar} from '../ui/screens/AddItemToContainer';

const Tab = createBottomTabNavigator();

const AddContainerStack = () => {
  return (
    <Tab.Navigator backBehavior="order" tabBar={() => <View />}>
      <Tab.Screen
        name="ContainerInfo"
        component={AddItem}
        options={{
          tabBarLabel: 'Container Info',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Icon name="numeric-1-circle" color={color} size={24} />
            ) : (
              <Icon name="numeric-1-circle-outline" color={color} size={24} />
            ),
          header: AddItemAppBar,
        }}
      />
      <Tab.Screen
        name="AddItemsToContainer"
        component={AddItemToContainer}
        options={{
          tabBarLabel: 'Add Items',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Icon name="numeric-2-circle" color={color} size={24} />
            ) : (
              <Icon name="numeric-2-circle-outline" color={color} size={24} />
            ),
          header: AddItemToContainerAppBar,
        }}
      />
    </Tab.Navigator>
  );
};

const AddContainerAppBar = ({navigation}) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Appbar.Content title="Add Container" />
      <Appbar.Action
        icon="check"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Appbar.Header>
  );
};

export {AddContainerStack, AddContainerAppBar};
