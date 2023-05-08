import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  COLORS,
  FLEX,
  FONTFAMILY,
  FONTSTYLE,
  FONTWEIGHT,
  IMAGES,
  SIZES,
} from '../../assets/thems';
import LinearGradient from 'react-native-linear-gradient';
import Skip from '../../components/button/Skip';
import Btn from '../../components/button/Btn';
import Swiper from 'react-native-swiper';

const {height, width} = Dimensions.get('screen');

const Tutorial_1 = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: FLEX.flex,
        backgroundColor: COLORS.BgColor,
      }}>
      <LinearGradient
        style={{flex: 1, paddingHorizontal: 20}}
        colors={['#061121', '#061121']}
        start={{x: 0.1, y: 0.5}}
        end={{x: 0.1, y: 6.5}}>
        <Swiper
          showsButtons={false}
          loop={false}
          dotStyle={{
            marginBottom: '28%',
          }}
          dotColor={COLORS.ternary}
          activeDotStyle={{
            width: 20,
            marginBottom: '28%',
          }}
          activeDotColor={COLORS.dotActiveColor}>
          {/* *************************************************************** */}
          <View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginTop: height * 0.02,
              }}>
              <Skip
                title={'Skip'}
                textColor={COLORS.white}
                Press={() => {
                  navigation.navigate('Login');
                }}
              />
            </View>
            <View
              style={{
                marginTop: height * 0.05,
              }}>
              <Image
                source={IMAGES.waterBottle}
                style={{
                  height: height * 0.4,
                  width: '100%',
                }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                paddingHorizontal: SIZES.xxLarge + SIZES.xxLarge,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: height * 0.01,
                rowGap: 7,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.xxxLarge - 1,
                  fontWeight: FONTWEIGHT.small,
                  fontStyle: FONTSTYLE.normal,
                }}>
                Welcome to
              </Text>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.huge,
                  fontStyle: FONTSTYLE.normal,
                  fontFamily: FONTFAMILY.russoOne,
                }}>
                Crypto Water
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.paragraph,
                    fontSize: SIZES.xSmall,
                    fontWeight: FONTWEIGHT.small,
                    textAlign: 'center',
                    fontFamily: FONTFAMILY.roboto,
                    fontStyle: FONTSTYLE.normal,
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
                  dolor sit amet, consect etur adipiscing Lorem ipsum dolor sit
                  amet, consectetur adipiscing
                </Text>
              </View>
            </View>
          </View>
          {/* *************************************************************** */}

          <View style={{}}>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginTop: height * 0.02,
              }}>
              <Skip
                title={'Skip'}
                textColor={COLORS.white}
                Press={() => {
                  navigation.navigate('Login');
                }}
              />
            </View>
            <View
              style={{
                marginTop: height * 0.05,
                height:height*0.37,
                width:'100%'
              }}>
              <Image
                source={IMAGES.frame}
                style={{
                  height: '100%',
                  width: '100%',
                }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                paddingHorizontal: SIZES.xxLarge + SIZES.xxLarge,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: height * 0.09,
                rowGap: 7,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.huge,
                  fontStyle: FONTSTYLE.normal,
                  fontFamily: FONTFAMILY.russoOne,
                }}>
                Redeem
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.paragraph,
                    fontSize: SIZES.xSmall,
                    fontWeight: FONTWEIGHT.small,
                    textAlign: 'center',
                    fontFamily: FONTFAMILY.roboto,
                    fontStyle: FONTSTYLE.normal,
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
                  dolor sit amet, consect etur adipiscing Lorem ipsum dolor sit
                  amet, consectetur adipiscing
                </Text>
              </View>
            </View>
          </View>
          {/* *************************************************************** */}

          <View
            style={
              {
                // borderWidth: 1,
                // borderColor: COLORS.error,
              }
            }>
            <View
              style={{
                marginTop: height * 0.08,
              }}>
              <Image
                source={IMAGES.tShirt}
                style={{
                  height: height * 0.4,
                  width: '100%',
                }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: height * 0.03,
                rowGap: 7,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.xxxLarge - 1,
                  fontWeight: FONTWEIGHT.small,
                  fontStyle: FONTSTYLE.normal,
                  fontFamily: FONTFAMILY.roboto,
                }}>
                Buy Merchandise With
              </Text>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.huge,
                  fontStyle: FONTSTYLE.normal,
                  fontFamily: FONTFAMILY.russoOne,
                }}>
                Drop Coin
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: SIZES.xxxLarge + SIZES.xLarge,
                }}>
                <Text
                  style={{
                    color: COLORS.paragraph,
                    fontSize: SIZES.xSmall,
                    fontWeight: FONTWEIGHT.small,
                    textAlign: 'center',
                    fontFamily: FONTFAMILY.roboto,
                    fontStyle: FONTSTYLE.normal,
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
                  dolor sit amet, consect etur adipiscing Lorem ipsum dolor sit
                  amet, consectetur adipiscing
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: height * 0.08,
              }}>
              <Btn
                title={'Get Started'}
                BgColor={COLORS.c1}
                Press={() => {
                  navigation.navigate('Login');
                }}
              />
            </View>
          </View>
        </Swiper>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Tutorial_1;

const styles = StyleSheet.create({});
