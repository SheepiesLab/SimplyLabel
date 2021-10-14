import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PackItems, PackItemsAppBar} from '../ui/screens/PackItems';
import {Item, AddContainerItemAppBar} from '../ui/screens/Item';

const Tab = createBottomTabNavigator();

const AddContainerStack = ({navigation: currentNavigation}) => {
  return (
    <Tab.Navigator backBehavior="order" tabBar={() => <View />}>
      <Tab.Screen
        name="ContainerInfo"
        component={Item}
        options={{
          tabBarLabel: 'Container Info',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Icon name="numeric-1-circle" color={color} size={24} />
            ) : (
              <Icon name="numeric-1-circle-outline" color={color} size={24} />
            ),
          header: AddContainerItemAppBar,
        }}
      />
      <Tab.Screen
        name="PackItems"
        component={PackItems}
        options={{
          tabBarLabel: 'Add Items',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Icon name="numeric-2-circle" color={color} size={24} />
            ) : (
              <Icon name="numeric-2-circle-outline" color={color} size={24} />
            ),
          header: ({navigation}) => (
            <PackItemsAppBar
              navigation={navigation}
              parentNavigation={currentNavigation}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export {AddContainerStack};
