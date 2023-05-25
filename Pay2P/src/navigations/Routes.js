// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import Login from '../screens/loginFlow/Login';
import SplashScreen from '../screens/loginFlow/SplashScreen';
import OTP_Screen from '../screens/loginFlow/OTP_Screen';

 


const Stack = createNativeStackNavigator();

function Routes() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown:false}} >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP_Screen" component={OTP_Screen} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;