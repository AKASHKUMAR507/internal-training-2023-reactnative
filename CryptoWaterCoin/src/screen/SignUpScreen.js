import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useReducer, useState} from 'react';
import CheckBox from 'react-native-check-box';

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
import {
  validationEmail,
  validationFname,
  validationLname,
  validationPassword,
  validationPhone,
} from '../components/Validation';

const {height, width} = Dimensions.get('screen');

const SignUpScreen = ({navigation}) => {
  const [isChecked, setIsCkecked] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showConformPassword, setShowConformPassword] = useState(true);

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [fnameError, setFnameError] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleFname = text => {
    setFname(text);
    if (!text) {
      setFnameError('First name is mandatory.');
    } else if (!validationFname(text)) {
      setFnameError('First name should be alphabets');
    } else {
      setFnameError('');
    }
  };
  const handleLname = text => {
    setLname(text);
    if (!text) {
      setLnameError('Last name is mandatory.');
    } else if (!validationLname(text)) {
      setLnameError('Last name should be alphabets');
    } else {
      setLnameError('');
    }
  };
  const handleEmail = text => {
    setEmail(text);
    if (!text) {
      setEmailError('Email is required');
    } else if (!validationEmail(text)) {
      setEmailError('Please enter valid email address.');
    } else {
      setEmailError('');
    }
  };
  const handlePhone = text => {
    setPhone(text);
    if (!text) {
      setPhoneError('Phone is required');
    } else if (!validationPhone(text)) {
      setPhoneError('Please enter valid phone number.');
    } else {
      setPhoneError('');
    }
  };
  const handlePassword = text => {
    setPassword(text);
    if (!text) {
      setPasswordError('Password is required');
    } else if (!validationPassword(text)) {
      setPasswordError('Please enter valid password.');
    } else {
      setPasswordError('');
    }
  };
  const handleConfirmPassword = text => {
    setConfirmPassword(text);
    if (!text) {
      setConfirmPasswordError('Confirm Password is required');
    } else if (text != password || password != text) {
      setConfirmPasswordError('Please enter valid password.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const clearInputFieldData = () => {
    setEmail('');
    setLname('');
    setFname('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');
    setEmailError('');
    setLnameError('');
    setFnameError('');
    setPhoneError('');
    setPasswordError('');
    setConfirmPasswordError('');
  };

  const handleCreateAccount = () => {
    if (!fname) {
      setFnameError('First name is mandatory.');
    }
    if (!lname) {
      setLnameError('Last name is mandatory.');
    }
    if (!email) {
      setEmailError('Email is required');
    }
    if (!phone) {
      setPhoneError('Phone is required');
    }
    if (!password) {
      setPasswordError('Password is required');
    }
    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
    }

    if (
      fname &&
      !fnameError &&
      lname &&
      !lnameError &&
      email &&
      !emailError &&
      phone &&
      !phoneError &&
      password &&
      !passwordError &&
      confirmPassword &&
      !confirmPasswordError &&
      isChecked == true
    ) {
      navigation.navigate('OtpScreen');
      clearInputFieldData();
    }
  };

  return (
    <ImageBackground
      source={IMAGES.backImage}
      style={{height: height, width: width, paddingHorizontal: height * 0.03}}>
      <ScrollView showsVerticalScrollIndicator ={false}>
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
            rowGap: SIZES.xSmall + 5,
            marginTop: height * 0.04,
          }}>
          <View
            style={{
              rowGap: 5,
            }}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={[
                styles.inputName,
                {borderColor: fnameError ? COLORS.error : COLORS.borderColor},
              ]}
              placeholder="Please enter your first name"
              placeholderTextColor={COLORS.placeholder}
              value={fname}
              onChangeText={handleFname}
            />
            {fnameError ? (
              <Text style={styles.errorText}>{fnameError}</Text>
            ) : null}
          </View>
          <View
            style={{
              rowGap: 5,
            }}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={[
                styles.inputName,
                {borderColor: lnameError ? COLORS.error : COLORS.borderColor},
              ]}
              placeholder="Please enter your last name"
              placeholderTextColor={COLORS.placeholder}
              value={lname}
              onChangeText={handleLname}
            />
            {lnameError ? (
              <Text style={styles.errorText}>{lnameError}</Text>
            ) : null}
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
              style={[
                styles.input,
                {borderColor: emailError ? COLORS.error : COLORS.borderColor},
              ]}
              placeholder="Please enter your email"
              placeholderTextColor={COLORS.placeholder}
              value={email}
              onChangeText={handleEmail}
            />
            {emailError ? (
              <Text style={styles.errorText}>{emailError}</Text>
            ) : null}
          </View>
          <View
            style={{
              rowGap: 5,
            }}>
            <Text style={styles.label}>Mobile Number</Text>
            <View 
             style={[
                styles.phoneErrorArea,
                {borderColor: phoneError ? COLORS.error : COLORS.borderColor},
              ]}
            >
            <PhoneInput
              style={[
                styles.input,
                {borderColor: phoneError ? COLORS.error : COLORS.borderColor},
              ]}
              placeholder="Please enter your email"
              containerStyle={styles.phoneInputContainer}
              textContainerStyle={styles.textInputContainer}
              textInputStyle={styles.textInput}
              codeTextStyle={styles.codeText}
              flagButtonStyle={styles.buttonStyle}
              countryPickerButtonStyle={{
                color: COLORS.white,
              }}
              value={phone}
              onChangeText={handlePhone}
            />
            </View>
            {phoneError ? (
              <Text style={styles.errorText}>{phoneError}</Text>
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
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                marginTop: 45,
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
              style={[
                styles.inputPassword,
                {
                  borderColor: passwordError
                    ? COLORS.error
                    : COLORS.borderColor,
                },
              ]}
              placeholder="Please enter your password"
              placeholderTextColor={COLORS.placeholder}
              secureTextEntry={showPassword}
              maxLength={16}
              value={password}
              onChangeText={handlePassword}
            />
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}
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
                marginTop: 45,
                zIndex: 1,
                marginLeft: 25,
              }}
              resizeMode="contain"
            />
            <TouchableOpacity
              onPress={() => setShowConformPassword(!showConformPassword)}
              style={{
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                marginTop: 45,
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
              style={[
                styles.input,
                {
                  borderColor: confirmPasswordError
                    ? COLORS.error
                    : COLORS.borderColor,
                },
              ]}
              placeholder="Confirm password"
              placeholderTextColor={COLORS.placeholder}
              secureTextEntry={showConformPassword}
              maxLength={16}
              value={confirmPassword}
              onChangeText={handleConfirmPassword}
            />
            {confirmPasswordError ? (
              <Text style={styles.errorText}>{confirmPasswordError}</Text>
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
            Press={handleCreateAccount}
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
            marginBottom: height * 0.16,
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
      </ScrollView>
    </ImageBackground>
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
    borderWidth:1,
  },
  phoneErrorArea:{
    // backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth:1,
    borderRadius: SIZES.xxxLarge,
  },
  inputPassword: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    height: height * 0.075,
    borderRadius: SIZES.xxxLarge,
    paddingLeft: SIZES.huge + SIZES.huge,
    color: COLORS.white,
    paddingRight: SIZES.xxLarge + SIZES.xxLarge + SIZES.xxLarge,
    borderWidth: 1,
  },
  inputName: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    height: height * 0.075,
    borderRadius: SIZES.xxxLarge,
    paddingLeft: SIZES.huge,
    color: COLORS.white,
    paddingRight: SIZES.xxLarge,
    borderWidth: 1,
  },
  phoneInputContainer: {
    width: '100%',
    height: height * 0.075,
    borderRadius: SIZES.xxxLarge,
    paddingVertical: 0,
    backgroundColor: 'rgba(255,255,255,0.010)',
    borderWidth: 1,
  },
  textInputContainer: {
    width: width * 0.9,
    height: '100%',
    borderTopRightRadius: SIZES.xxxLarge,
    borderBottomRightRadius: SIZES.xxxLarge,
    paddingVertical: 0,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderLeftWidth: 2,
    borderLeftColor: '#615858',
    // borderWidth: 1,
    // borderColor:'red'
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
  errorText: {
    color: COLORS.error,
    fontSize: SIZES.medium + 1,
    fontFamily: FONTFAMILY.roboto,
    fontStyle: FONTSTYLE.normal,
    fontWeight: FONTWEIGHT.medium,
    marginLeft:SIZES.medium,
  },
});
