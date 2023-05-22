import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/thems';
import SideDrawer from '../../navigations/SideDrawer';
const {height, width} = Dimensions.get('screen');

const Home = () => {
  return (
    <ImageBackground
      source={IMAGES.backImage}
      style={{
        height: height,
        width: width,
      }}>
        
      </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
