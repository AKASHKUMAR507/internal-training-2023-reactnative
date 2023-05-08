import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSTYLE, SIZES} from '../../assets/thems';

const Skip = ({Press, title, bgColor, textColor}) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width:'20%'
      }}>
      <Text
        style={{
          color: textColor,
          fontSize: SIZES.xxLarge,
          fontStyle:FONTSTYLE.normal,
          fontFamily: FONTFAMILY.roboto,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Skip;

const styles = StyleSheet.create({});
