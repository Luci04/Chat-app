import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Onboarding from '../screens/Onboarding';
import BottomNavigation from './BottomNavigation';
import UserScreen from '../screens/UserScreen';
import MessageScreen from '../screens/MessageScreen';
import ChatScreen from '../screens/ChatScreen';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Setting">
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BottomNavigation"
                    component={BottomNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Message"
                    component={MessageScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="UserScreen"
                    component={UserScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})