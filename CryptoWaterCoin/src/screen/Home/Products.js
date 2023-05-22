import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {IMAGES} from '../../assets/thems';
const {height, width} = Dimensions.get('screen');

const Products = () => {
  return (
    <ImageBackground
      source={IMAGES.backImage}
      style={{
        height: height,
        width: width,
      }}></ImageBackground>
  );
};

export default Products;

const styles = StyleSheet.create({});
