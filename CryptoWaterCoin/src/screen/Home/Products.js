import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {COLORS, IMAGES, SIZES} from '../../assets/thems';
const {height, width} = Dimensions.get('screen');

const Products = ({navigation}) => {
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
          // zIndex: 1,
          justifyContent:'center',
          alignItems:'center',
          alignSelf:'center',
          marginTop:'50%'
          // borderTopLeftRadius,
          
        }}>
        <Text
        onPress={()=> navigation.navigate('Merchandise')}
          style={{
            color: 'white',
            fontSize:SIZES.huge,
          }}>
          Navigate....
        </Text>
         
      </View>
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({});
