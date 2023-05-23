import {
  Dimensions,
 
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';

import {COLORS, IMAGES} from '../../assets/thems';
const {height, width} = Dimensions.get('screen');

const Wallet = () => {
  return (
    
    <SafeAreaView
    style={{
      flex: 1,
      width: width,
      height: height,
      backgroundColor:COLORS.white,
    }}>
    <Image
      source={IMAGES.backImage}
      style={{
        height:'100%',
        width:'100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    />
    <View
      style={{
        position: 'absolute',
        zIndex: 1,
      }}>
      <Text
        style={{
          color: 'white',
        }}>
        Hello
      </Text>
      <Text
        style={{
          color: 'white',
        }}>
        Hello
      </Text>
      <Text
        style={{
          color: 'white',
        }}>
        Hello
      </Text>
      <Text
        style={{
          color: 'white',
        }}>
        Hello
      </Text>
    </View>
  </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
