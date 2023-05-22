import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AboutUs from '../screen/Home/SideMenu/AboutUs';

const SideDrawer = () => {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={AboutUs} />
 
    </Drawer.Navigator>
  )
}

export default SideDrawer

const styles = StyleSheet.create({})