import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen3';
import Screen4 from './Screen4';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Menu1 from './Menu1';
import Screen6 from './Screen6';
const Tab = createMaterialTopTabNavigator();

function Menu() {
    return (
        <Tab.Navigator
            tabBarPosition='bottom'
            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: '#90CAF9',
                showIcon: true,
                style: { height: 50, backgroundColor: "#0D47A1", }
            }}
        >

            <Tab.Screen name="Screen1" component={Screen1}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-apps" size={32} color='black' />
                    ),
                }}
            />
            <Tab.Screen name="Screen6" component={Screen6}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-add-circle" size={32} color="black" />
                    ),
                }} />
            <Tab.Screen name="Screen2" component={Screen2}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-contact" size={32} color="black" />
                    ),
                }} />
        </Tab.Navigator>
    );
}
export default Menu;