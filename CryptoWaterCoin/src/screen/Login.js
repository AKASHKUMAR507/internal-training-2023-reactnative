import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import Btn from '../components/button/Btn';
import {validationPassword, validationEmail} from '../components/Validation';
import {
  COLORS,
  FONTFAMILY,
  FONTSTYLE,
  FONTWEIGHT,
  ICON,
  IMAGES,
  SHADOW,
  SIZES,
} from '../assets/thems';
const {height, width} = Dimensions.get('screen');
const Login = ({navigation}) => {
  const [isChecked, setIsCkecked] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailHandle = text => {
    setEmail(text);

    if (!text) {
      setEmailError('Email is required');
    } else if (!validationEmail(text)) {
      setEmailError('Please enter valid email address.');
    } else {
      setEmailError('');
    }
  };

  const passwordHandle = text => {
    setPassword(text);

    if (!text) {
      setPasswordError('Password is required');
    } else if (!validationPassword(text)) {
      setPasswordError('Please enter valid password.');
    } else {
      setPasswordError('');
    }
  };

  // clear input field

  const clearInputField = () => {
    setEmail('');
    setPassword('');
  };

  const handleLogin = () => {
    if (!email) {
      setEmailError('Email is required');
    }
    if (!password) {
      setPasswordError('Password is required');
    }
    if (email && password && !emailError && !passwordError) {
      setTimeout(() => {
        navigation.navigate('HomeRoutes');
        clearInputField();
      }, 1000);
    }
    // navigation.navigate('Home');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Image source={IMAGES.backImage} resizeMode="contain" />
      <View
        style={{
          position: 'absolute',
          height: height,
          width: width,
          paddingHorizontal: height * 0.03,
          zIndex: 1,
        }}>
        {/* *************************** Image *********************************** */}
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
        {/* *************************** Heading *********************************** */}
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
            LOGIN
          </Text>
          <Text
            style={{
              color: COLORS.placeholder,
              fontSize: SIZES.medium,
              fontFamily: FONTFAMILY.poppins,
              fontStyle: FONTSTYLE.normal,
            }}>
            Please Enter Your Login Details
          </Text>
        </View>
        {/* *************************** Input Field *********************************** */}
        <View
          style={{
            rowGap: SIZES.xSmall,
            marginTop: height * 0.04,
          }}>
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
                marginTop: 45,
                zIndex: 1,
                marginLeft: 25,
              }}
              resizeMode="contain"
            />
            <TextInput
              placeholder="Please enter your email"
              autoComplete={'email'}
              placeholderTextColor={COLORS.placeholder}
              style={[
                styles.input,
                {borderColor: emailError ? COLORS.error : COLORS.borderColor},
              ]}
              value={email}
              onChangeText={emailHandle}
            />
            {emailError ? (
              <Text style={styles.errorText}>{emailError}</Text>
            ) : null}
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
                marginTop: 45,
                zIndex: 1,
                marginLeft: 25,
              }}
              resizeMode="contain"
            />
            <TextInput
              placeholder="Please enter password"
              placeholderTextColor={COLORS.placeholder}
              secureTextEntry={true}
              maxLength={16}
              style={[
                styles.input,
                {
                  borderColor: passwordError
                    ? COLORS.error
                    : COLORS.borderColor,
                },
              ]}
              value={password}
              onChangeText={passwordHandle}
            />
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}
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
              Remember Me
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: COLORS.textLink,
                fontSize: SIZES.medium,
                fontStyle: FONTSTYLE.normal,
                fontFamily: FONTFAMILY.inter,
              }}
              onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot Password?
            </Text>
          </View>
        </View>
        {/* *************************** Button *********************************** */}
        <View
          style={{
            marginTop: height * 0.03,
          }}>
          <Btn title={'Login'} BgColor={COLORS.c1} Press={handleLogin} />
        </View>
        {/* *************************** Signup *********************************** */}
        <View
          style={{
            marginTop: height * 0.035,
            flexDirection: 'row',
            columnGap: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.medium,
              fontStyle: FONTSTYLE.normal,
              fontFamily: FONTFAMILY.roboto,
            }}>
            Don't have an account?
          </Text>
          <Text
            style={{
              color: COLORS.textLink,
              fontSize: SIZES.medium,
              fontStyle: FONTSTYLE.normal,
              fontFamily: FONTFAMILY.roboto,
              fontWeight: 'bold',
            }}
            onPress={() => navigation.navigate('SignUpScreen')}>
            Sign Up
          </Text>
        </View>
        <Text onPress={()=>navigation.navigate('Merchandise')} style = {{
          color:COLORS.white
        }}>go</Text>
        {/* <Text onPress={navigation.navigate('Careers')}>go</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
    // ...SHADOW.shadowBox,
    borderWidth: 1,
  },
  errorText: {
    color: COLORS.error,
    fontSize: SIZES.medium + 1,
    fontFamily: FONTFAMILY.roboto,
    fontStyle: FONTSTYLE.normal,
    fontWeight: FONTWEIGHT.medium,
    marginLeft:SIZES.medium,
  },
});
