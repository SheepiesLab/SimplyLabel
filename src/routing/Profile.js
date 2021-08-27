
import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Profile, ProfileAppBar } from '../ui/screens/Profile';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={Profile} options={{
                header: ProfileAppBar
            }}/>
        </Stack.Navigator>
    );
};

export default ProfileStack;