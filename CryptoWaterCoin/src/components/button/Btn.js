import {
  Dimensions,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSTYLE, SIZES} from '../../assets/thems';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('screen');

const Btn = ({Press, BgColor, title}) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: BgColor,
        height: height * 0.075,
        width: '100%',
        borderRadius: SIZES.xxxLarge + 65,
      }}
      
      >
      <LinearGradient
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: SIZES.xxxLarge,
        }}
        colors={[COLORS.c1, COLORS.c2]}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.xxLarge,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: FONTFAMILY.roboto,
            fontStyle: FONTSTYLE.normal,
          }}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({});
