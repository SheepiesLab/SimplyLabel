import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../ui/screens/Login';
import Register from '../ui/screens/Register';

const Stack = createNativeStackNavigator();

const LoginStack = ({setAuthed}) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login">
        {({navigation}) => (
          <Login navigation={navigation} setAuthed={setAuthed} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default LoginStack;
