import { StyleSheet } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from '../screens/SettingScreen';
import HomePage from '../screens/HomePage';
import IconComponent from '../components/IconComponent';
import { FontFamily } from '../GlobalStyles';
import ContactsScreen from '../screens/ContactsScreen';
import CallsScreen from '../screens/CallsScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#24786D',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    height: 80,
                },
                tabBarItemStyle: {
                    padding: 5,
                    justifyContent: 'center'
                },
                tabBarIconStyle: {
                    width: 50,
                    height: 30
                },
                tabBarLabelStyle: {
                    fontFamily: FontFamily.caros,
                    fontWeight: '500',
                    fontSize: 16
                },
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return <IconComponent iconType={'AntDesign'} iconName={'message1'} size={size} color={color} />
                    } else if (route.name === 'Calls') {
                        return <IconComponent iconType={'Feather'} iconName={'phone-call'} size={size} color={color} />
                    } else if (route.name === 'Contacts') {
                        return <IconComponent iconType={'Ionicons'} iconName={'person'} size={size} color={color} />
                    } else {
                        return <IconComponent iconType={'AntDesign'} iconName={'setting'} size={size} color={color} />
                    }
                },
            })}   >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Calls" component={CallsScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})