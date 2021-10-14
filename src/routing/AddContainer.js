import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AddItem, AddContainerItemAppBar} from '../ui/screens/AddItem';
import {PackItem, PackItemAppBar} from '../ui/screens/PackItem';

const Tab = createBottomTabNavigator();

const AddContainerStack = ({navigation: currentNavigation}) => {
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
          header: AddContainerItemAppBar,
        }}
      />
      <Tab.Screen
        name="AddItemsToContainer"
        component={PackItem}
        options={{
          tabBarLabel: 'Add Items',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Icon name="numeric-2-circle" color={color} size={24} />
            ) : (
              <Icon name="numeric-2-circle-outline" color={color} size={24} />
            ),
          header: ({navigation}) => (
            <PackItemAppBar
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
