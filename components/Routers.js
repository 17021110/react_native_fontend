import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Menu1 from './Menu1';
import Screen5 from './Screen5';
import Screen4 from './Screen4';
const Stack = createStackNavigator();

function Routers() {
    return (
        <NavigationContainer>
            <Stack.Navigator

            >
                <Stack.Screen options={{ headerShown: false }} name="Menu1" component={Menu1} />
                <Stack.Screen name="Screen2" component={Screen2} />
                <Stack.Screen name="Screen3" component={Screen3} />
                <Stack.Screen options={{ headerShown: false }} name="Screen5" component={Screen5} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routers;