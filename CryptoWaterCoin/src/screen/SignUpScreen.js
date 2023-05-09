import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  IMAGES,
  COLORS,
  SIZES,
  FONTSTYLE,
  FONTWEIGHT,
  FONTFAMILY,
  ICON,
} from '../assets/thems';
import Btn from '../components/button/Btn';
import PhoneInput from 'react-native-phone-number-input';

const {height, width} = Dimensions.get('screen');

const SignUpScreen = ({navigation}) => {
  const [isChecked, setIsCkecked] = useState(false);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.BgColor,
        paddingHorizontal: height * 0.03,
      }}>
      <SafeAreaView>
        {/* *************************** Logo *************************** */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: height * 0.05,
          }}>
          <View
            style={{
              height: height * 0.2,
              width: width * 0.6,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={IMAGES.cryptoWater}
              resizeMode="contain"
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
        </View>
        {/* *************************** Heading *************************** */}
        <View
          style={{
            rowGap: 5,
            marginTop: height * 0.03,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontStyle: FONTSTYLE.normal,
              fontFamily: FONTFAMILY.russoOne,
              fontSize: SIZES.xxLarge,
            }}>
            Create Account
          </Text>
          <Text
            style={{
              color: COLORS.placeholder,
              fontSize: SIZES.medium,
              fontFamily: FONTFAMILY.poppins,
              fontStyle: FONTSTYLE.normal,
            }}>
            Please Enter Register Details
          </Text>
        </View>
        {/* *************************** Input Field *************************** */}
        <View
          style={{
            rowGap: SIZES.xSmall,
            marginTop: height * 0.04,
          }}>
          <View
            style={{
              rowGap: 5,
            }}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.inputName}
              placeholder="Please enter your first name"
              placeholderTextColor={COLORS.placeholder}
            />
          </View>
          <View
            style={{
              rowGap: 5,
            }}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.inputName}
              placeholder="Please enter your last name"
              placeholderTextColor={COLORS.placeholder}
            />
          </View>
          <View
            style={{
              rowGap: 5,
            }}>
            <Text style={styles.label}>Email</Text>
            <Image
              source={ICON.email}
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                marginTop: 48,
                zIndex: 1,
                marginLeft: 25,
              }}
              resizeMode="contain"
            />
            <TextInput
              style={styles.input}
              placeholder="Please enter your email"
              placeholderTextColor={COLORS.placeholder}
            />
          </View>
          <View
            style={{
              rowGap: 5,
            }}>
            <Text style={styles.label}>Mobile Number</Text>
            <PhoneInput
              style={styles.input}
              placeholder="Please enter your email"
              containerStyle={styles.phoneInputContainer}
              textContainerStyle={styles.textInputContainer}
              textInputStyle={styles.textInput}
              codeTextStyle={styles.codeText}
              flagButtonStyle={styles.buttonStyle}
              countryPickerButtonStyle ={{
                color:COLORS.white,
              }}
            />
          </View>
          <View
            style={{
              rowGap: 5,
            }}>
            <Text style={styles.label}>Password</Text>
            <Image
              source={ICON.lock}
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                marginTop: 48,
                zIndex: 1,
                marginLeft: 25,
              }}
              resizeMode="contain"
            />
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                marginTop: 48,
                zIndex: 1,
                marginLeft: '80%',
              }}>
              <Image
                source={ICON.eye}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TextInput
              style={styles.inputPassword}
              placeholder="Please enter your email"
              placeholderTextColor={COLORS.placeholder}
              secureTextEntry={true}
              maxLength={16}
            />
          </View>
          <View
            style={{
              rowGap: 5,
            }}>
            <Text style={styles.label}>Confirm Password</Text>
            <Image
              source={ICON.lock}
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                marginTop: 48,
                zIndex: 1,
                marginLeft: 25,
              }}
              resizeMode="contain"
            />
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                marginTop: 48,
                zIndex: 1,
                marginLeft: '80%',
              }}>
              <Image
                source={ICON.eye}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              placeholderTextColor={COLORS.placeholder}
              secureTextEntry={true}
              maxLength={16}
            />
          </View>
        </View>

        {/* *************************** Remember me & Fotgot *************************** */}
        <View
          style={{
            marginTop: height * 0.02,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 9,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CheckBox
              isChecked={isChecked}
              onClick={() => setIsCkecked(!isChecked)}
              rightTextStyle={{
                fontSize: 19,
                color: 'black',
                fontWeight: 'bold',
              }}
              checkedCheckBoxColor={COLORS.c1}
              uncheckedCheckBoxColor={COLORS.white}
            />
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.medium,
                fontStyle: FONTSTYLE.normal,
                fontFamily: FONTFAMILY.roboto,
              }}>
              I Have Read And Agree To{' '}
              <Text
                style={{
                  color: COLORS.textLink,
                  fontSize: SIZES.medium,
                  fontStyle: FONTSTYLE.normal,
                  fontFamily: FONTFAMILY.roboto,
                }}
                onPress={() => navigation.navigate('OurTeam')}>
                Terms Of Services.
              </Text>
            </Text>
          </View>
        </View>
        {/* *************************** Button *********************************** */}
        <View
          style={{
            marginTop: height * 0.03,
          }}>
          <Btn
            title={'Create An Account'}
            BgColor={COLORS.c1}
            Press={() => navigation.navigate('OtpScreen')}
          />
        </View>
        {/* *************************** Signup *********************************** */}
        <View
          style={{
            marginTop: height * 0.035,
            flexDirection: 'row',
            columnGap: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: height * 0.055,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.medium,
              fontStyle: FONTSTYLE.normal,
              fontFamily: FONTFAMILY.roboto,
            }}>
            Already have an account?
          </Text>
          <Text
            style={{
              color: COLORS.textLink,
              fontSize: SIZES.medium,
              fontStyle: FONTSTYLE.normal,
              fontFamily: FONTFAMILY.roboto,
              fontWeight: 'bold',
            }}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  label: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTFAMILY.roboto,
    fontStyle: FONTSTYLE.normal,
    marginLeft: 7,
  },

  input: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    height: height * 0.075,
    borderRadius: SIZES.xxxLarge,
    paddingLeft: SIZES.huge + SIZES.huge,
    color: COLORS.white,
    paddingRight: SIZES.xxLarge,
  },
  inputPassword: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    height: height * 0.075,
    borderRadius: SIZES.xxxLarge,
    paddingLeft: SIZES.huge + SIZES.huge,
    color: COLORS.white,
    paddingRight: SIZES.xxLarge + SIZES.xxLarge + SIZES.xxLarge,
  },
  inputName: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    height: height * 0.075,
    borderRadius: SIZES.xxxLarge,
    paddingLeft: SIZES.huge,
    color: COLORS.white,
    paddingRight: SIZES.xxLarge,
  },
  phoneInputContainer: {
    width: '100%',
    height: height * 0.075,
    borderRadius: SIZES.xxxLarge,
    paddingVertical: 0,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  textInputContainer: {
    width: width * 0.9,
    height: height * 0.075,
    borderTopRightRadius: SIZES.xxxLarge,
    borderBottomRightRadius: SIZES.xxxLarge,

    paddingVertical: 0,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderLeftWidth:2,
    borderLeftColor: '#615858',
  },
  textInput: {
    color: COLORS.white,
  },
  codeText: {
    color: COLORS.white,
  },
  buttonStyle: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderTopLeftRadius: SIZES.xxxLarge,
    borderBottomLeftRadius: SIZES.xxxLarge,
  },
});
