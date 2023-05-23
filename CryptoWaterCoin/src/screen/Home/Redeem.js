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
const Redeem = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: width,
        height: height,
        backgroundColor: COLORS.white,
      }}>
      <Image
        source={IMAGES.backImage}
        style={{
          height: '100%',
          width: '100%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          paddingHorizontal: 20,
        }}>
        <View>
          <View>
            <Text>Menu</Text>
          </View>
          <View>
            <Text>Profile</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Redeem;

const styles = StyleSheet.create({});
