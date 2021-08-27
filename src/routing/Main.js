import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../ui/screens/Splash';
import LoginStack from './Login';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={
            {headerShown: false}
        }>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="LoginStack" component={LoginStack} />
        </Stack.Navigator>
    );
};

export default MainStack;