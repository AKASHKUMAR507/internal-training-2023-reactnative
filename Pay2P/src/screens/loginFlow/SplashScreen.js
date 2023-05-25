import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, FONTS, IMAGES} from '../../assets/Themes';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, [])
  
  return (
    <ImageBackground
      source={IMAGES._splash}
      resizeMode='cover'
      style={{
        flex: 1,
      }}></ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
