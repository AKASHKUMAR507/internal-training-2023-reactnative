import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../assets/Themes';
const {height, width} = Dimensions.get('screen');

export default function Success() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <View
        style={{
          flex: 1,
          borderWidth: 3,
          borderColor: 'red',
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}>
        <View
          style={{
            backgroundColor: COLORS._red,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            height: height * 0.08,
          }}>
          <Text
            style={{
              color: COLORS._white,
              fontSize: SIZES._xMedium,
              fontFamily: FONTS._poppins_regular,
            }}>
            Invalid OTP
          </Text>
        </View>
      </View>
    </View>
  );
}
