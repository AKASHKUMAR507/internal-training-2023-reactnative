import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FLEX, IMAGES} from '../assets/thems';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Tutorial_1')
    }, 2000);
  }, [])

  return (
    <SafeAreaView
      style={{
        flex: FLEX.flex,
        backgroundColor: COLORS.BgColor,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={IMAGES.cryptoWater} />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});

{
  /* <LinearGradient
        style={{
            flex:1,
        }}
        start={{x: 0.5, y: 0}}
        end={{x: 7, y: 0}}
        colors={['#061121', '#29B6ED', '#000000']}>



        </LinearGradient> */
}
