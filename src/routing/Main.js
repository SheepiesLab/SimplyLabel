import React, {useState} from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../ui/screens/Splash';
import LoginStack from './Login';
import TabStack from './Tab';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const [splashed, setSplashed] = useState(false);
  const [authed, setAuthed] = useState(false);

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      {splashed ? (
        authed ? (
          <>
            <Stack.Screen name="TabStack" component={TabStack} />
          </>
        ) : (
          <>
            <Stack.Screen name="LoginStack">
              {() => <LoginStack setAuthed={setAuthed} />}
            </Stack.Screen>
          </>
        )
      ) : (
        <>
          <Stack.Screen name="Splash">
            {() => <Splash setSplashed={setSplashed} />}
          </Stack.Screen>
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
