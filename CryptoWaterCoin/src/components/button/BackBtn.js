import {Image, StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {COLORS, ICON} from '../../assets/thems';
const {height, width} = Dimensions.get('screen');
const BackBtn = ({Press}) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        width: height * 0.04,
        height: 30,
        justifyContent: 'center',
         
      }}>
      <Image
        source={ICON.backArrow}
        tintColor={COLORS.white}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({});
