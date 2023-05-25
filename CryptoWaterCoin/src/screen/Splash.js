import {StyleSheet, Text, View, SafeAreaView, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FLEX, IMAGES} from '../assets/thems';
const {height, width} = Dimensions.get('screen');
const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Tutorial_1');
    }, 2000);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: FLEX.flex,
        backgroundColor: COLORS.BgColor,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      
      <Image source={IMAGES.backImage} resizeMode='contain' />
      <View style={{
          position: 'absolute',
          zIndex: 1,
          flex: 1,
          paddingHorizontal: height * 0.03,
        }}>
        <Image source={IMAGES.cryptoWater} />
      </View>
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
