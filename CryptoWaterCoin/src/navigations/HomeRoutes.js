import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home/Home';
import {COLORS, FONTWEIGHT, SIZES} from '../assets/thems';
 
import Redeem from '../screen/Home/Redeem';
import Wallet from '../screen/Home/Wallet';
import Products from '../screen/Home/Products';
const HomeRoutes = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {/* <Image source={ICONS.home}
              resizeMode= 'contain'
              style ={{
                height:17,
                width:19,
                tintColor: focused ? COLORS.primary : COLORS.primary
                
              }}
            /> */}
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.primary,
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
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.primary,
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
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.primary,
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
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.primary,
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

const styles = StyleSheet.create({});
