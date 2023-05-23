import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home/Home';
import {COLORS, FONTWEIGHT, ICON, SIZES} from '../assets/thems';

import Redeem from '../screen/Home/Redeem';
import Wallet from '../screen/Home/Wallet';
import Products from '../screen/Home/Products';
import LinearGradient from 'react-native-linear-gradient';
const HomeRoutes = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        showLabel: false,
        // labe
        style: {padding: 10 , height: 70},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.main}>
              <LinearGradient
                style={styles.linear}
                colors={
                  focused
                    ? [COLORS.c1, COLORS.c2]
                    : ['rgba(0, 0, 0, 0.13)', 'rgba(0, 0, 0, 0.06)']
                }>
                <Image
                  source={ICON.product}
                  resizeMode="contain"
                  tintColor={focused ? COLORS.white : COLORS.primary}
                />
              </LinearGradient>
              <Text
                style={{
                  color: focused ? COLORS.c1 : COLORS.primary,
                  fontSize: SIZES.small,
                  fontWeight: FONTWEIGHT.medium,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.main}>
              <LinearGradient
                style={styles.linear}
                colors={
                  focused
                    ? [COLORS.c1, COLORS.c2]
                    : ['rgba(0, 0, 0, 0.13)', 'rgba(0, 0, 0, 0.06)']
                }>
                <Image
                  source={ICON.product}
                  resizeMode="contain"
                  tintColor={focused ? COLORS.white : COLORS.primary}
                />
              </LinearGradient>
              <Text
                style={{
                  color: focused ? COLORS.c1 : COLORS.primary,
                  fontSize: SIZES.small,
                  fontWeight: FONTWEIGHT.medium,
                }}>
                Products
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Redeem"
        component={Redeem}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.main}>
              <LinearGradient
                style={styles.linear}
                colors={
                  focused
                    ? [COLORS.c1, COLORS.c2]
                    : ['rgba(0, 0, 0, 0.13)', 'rgba(0, 0, 0, 0.06)']
                }>
                <Image
                  source={ICON.redeemHome}
                  resizeMode="contain"
                  tintColor={focused ? COLORS.white : COLORS.primary}
                />
              </LinearGradient>
              <Text
                style={{
                  color: focused ? COLORS.c1 : COLORS.primary,
                  fontSize: SIZES.small,
                  fontWeight: FONTWEIGHT.medium,
                }}>
                Redeem
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.main}>
              <LinearGradient
                style={styles.linear}
                colors={
                  focused
                    ? [COLORS.c1, COLORS.c2]
                    : ['rgba(0, 0, 0, 0.13)', 'rgba(0, 0, 0, 0.06)']
                }>
                <Image
                  source={ICON.wallet}
                  resizeMode="contain"
                  tintColor={focused ? COLORS.white : COLORS.primary}
                />
              </LinearGradient>
              <Text
                style={{
                  color: focused ? COLORS.c1 : COLORS.primary,
                  fontSize: SIZES.small,
                  fontWeight: FONTWEIGHT.medium,
                }}>
                Wallet
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeRoutes;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  linear: {
    height: 35,
    width: 35,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
