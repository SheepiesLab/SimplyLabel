import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={View} />
            <Stack.Screen name="LoginStack" component={View} />
        </Stack.Navigator>
    );
};

export default MainStack;