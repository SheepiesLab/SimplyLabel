import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ItemsStack from './Items';
import SearchStack from './Search';
import ProfileStack from './Profile';

const Tab = createMaterialBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen
        name="ItemsStack"
        component={ItemsStack}
        options={{
          tabBarLabel: 'Items',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Ionicons name="list" color={color} size={24} />
            ) : (
              <Ionicons name="list-outline" color={color} size={24} />
            ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Ionicons name="search" color={color} size={24} />
            ) : (
              <Ionicons name="search-outline" color={color} size={24} />
            ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Ionicons name="person" color={color} size={24} />
            ) : (
              <Ionicons name="person-outline" color={color} size={24} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
