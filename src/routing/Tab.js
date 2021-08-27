import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

const TabStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ItemsStack" component={View} options={{
                title: "Items",
                tabBarIcon: ({ focused, color }) => focused ?
                    (<Ionicons name="list" color={color} size={24} ></Ionicons>) :
                    (<Ionicons name="list-outline" color={color} size={22} ></Ionicons>),
            }} />
            <Tab.Screen name="SearchStack" component={View} options={{
                title: "Search",
                tabBarIcon: ({ focused, color }) => focused ?
                    (<Ionicons name="search" color={color} size={24} ></Ionicons>) :
                    (<Ionicons name="search-outline" color={color} size={22} ></Ionicons>),
            }} />
            <Tab.Screen name="ProfileStack" component={View} options={{
                title: "Profile",
                tabBarIcon: ({ focused, color }) => focused ?
                    (<Ionicons name="person" color={color} size={24} ></Ionicons>) :
                    (<Ionicons name="person-outline" color={color} size={22} ></Ionicons>),
            }} />
        </Tab.Navigator>
    );
}

export default TabStack;