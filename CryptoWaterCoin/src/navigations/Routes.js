import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home/Home';
import Splash from '../screen/Splash';
import Tutorial_1 from '../screen/tutorial/Tutorial_1';
import Tutorial_2 from '../screen/tutorial/Tutorial_2';
import Tutorial_3 from '../screen/tutorial/Tutorial_3';
import Login from '../screen/Login';

import ForgotPassword from '../screen/ForgotPassword';
import OtpScreen from '../screen/OtpScreen';
import OurTeam from '../screen/OurTeam';

import WhereToBuy from '../screen/WhereToBuy';
import PartnerWithUs from '../screen/PartnerWithUs';

import RedeemScreen from '../screen/RedeemScreen';
import Careers from '../screen/Careers';
import BottleReturn from '../screen/BottleReturn';
import HelpThePlanet from '../screen/HelpThePlanet';
import Merchandise from '../screen/Merchandise';
import SignUpScreen from '../screen/SignUpScreen';
import ForgotOTP from '../screen/ForgotOTP';
import HomeRoutes from './HomeRoutes';
import Products from '../screen/Home/Products';
import AboutUs from '../screen/Home/SideMenu/AboutUs';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeRoutes"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Tutorial_1" component={Tutorial_1} />
        <Stack.Screen name="Tutorial_2" component={Tutorial_2} />
        <Stack.Screen name="Tutorial_3" component={Tutorial_3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="OurTeam" component={OurTeam} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="WhereToBuy" component={WhereToBuy} />
        <Stack.Screen name="PartnerWithUs" component={PartnerWithUs} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="RedeemScreen" component={RedeemScreen} />
        <Stack.Screen name="Careers" component={Careers} />
        <Stack.Screen name="BottleReturn" component={BottleReturn} />
        <Stack.Screen name="HelpThePlanet" component={HelpThePlanet} />
        <Stack.Screen name="Merchandise" component={Merchandise} />
        <Stack.Screen name="ForgotOTP" component={ForgotOTP} />
        <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
