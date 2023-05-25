import {Image, StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import { COLORS, ICONS } from '../../assets/Themes';

const {height, width} = Dimensions.get('screen');
const BackBtn = ({Press}) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        width: height * 0.05,
        height: width*0.11,
        backgroundColor:COLORS._input_bg,
        justifyContent: 'center',
        alignItems:'center',
        alignContent:'center',
        borderRadius:100,
        borderWidth:2,
        borderColor:COLORS._input_border,
      }}>
      <Image
        source={ICONS._back}
        tintColor={COLORS._black}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({});
