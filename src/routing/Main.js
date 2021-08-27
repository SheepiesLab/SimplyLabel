import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../ui/screens/Splash';
import LoginStack from './Login';
import TabStack from './Tab';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={
            {headerShown: false}
        }>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="LoginStack" component={LoginStack} />
            <Stack.Screen name="TabStack" component={TabStack} />
        </Stack.Navigator>
    );
};

export default MainStack;