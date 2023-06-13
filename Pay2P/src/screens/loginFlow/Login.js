import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES, ICONS, FONTS, SIZES, COLORS} from '../../assets/Themes';
import {
  validationPassword,
  validationEmail,
  validationPhone,
} from '../../assets/Validation/';
import FontScale from '../../assets/FontScale';
import PhoneInput from 'react-native-phone-number-input';
const {height, width} = Dimensions.get('screen');
const {w_height, w_width} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [themes, setThemes] = useState('email');
  const [trueValue, setTrueValue] = useState('');

  const handlePressDay = () => {
    setThemes('email');
  };
  const handlePressNight = () => {
    setThemes('phone');
  };
  const data = {
    loginData: trueValue,
  };
  const emailHandle = text => {
    setEmail(text);
    setTrueValue(text);
    if (!text) {
      setEmailError('Email is required.');
    } else if (!validationEmail(text)) {
      setEmailError('Please enter valid email.');
    } else {
      setEmailError('');
    }
  };
  const phoneHandle = text => {
    setPhone(text);
    setTrueValue(text);
    if (!text) {
      setPhoneError('Mobile number is required.');
    } else if (!validationPhone(text)) {
      setPhoneError('Please enter valid mobile number.');
    } else {
      setPhoneError('');
    }
  };

  const passwordHandle = text => {
    setPassword(text);

    if (!text) {
      setPasswordError('Password is required.');
    } else if (!validationPassword(text)) {
      setPasswordError(
        'Password must be at least 8 characters including one upper case, one lower case, onealphanumeric and one special character.',
      );
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
    if (themes === 'email') {
      if (!email) {
        setEmailError('Email is required.');
      }
      if (!password) {
        setPasswordError('Password is required.');
      }
      if (email && password && !emailError && !passwordError) {
        setTimeout(() => {
          navigation.navigate('OTP_Screen', {data});
          clearInputField();
        }, 500);
      }
    } else {
      if (!phone) {
        setPhoneError('Mobile number is required.');
      }
      if (!password) {
        setPasswordError('Password is required.');
      }
      if (phone && password && !phoneError && !passwordError) {
        setTimeout(() => {
          navigation.navigate('OTP_Screen', {data});
          clearInputField();
        }, 500);
      }
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: COLORS._white}}>
      <ImageBackground
        source={IMAGES._loginbackground}
        resizeMode="cover"
        style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          {/* *************************** container *************************** */}
          <View style={styles.main}>
            {/* ************************ logo *********************** */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: height * 0.06,
                width: '100%',
              }}>
              <Image source={ICONS._app_logo} resizeMode="contain" style={{}} />
            </View>
            {/* ************************ heading *********************** */}
            <View
              style={{
                marginTop: height * 0.02,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                rowGap: 6,
              }}>
              <Text
                allowFontScaling={true}
                style={{
                  fontSize: SIZES._xLarge,
                  fontFamily: FONTS._class_display_Medium,
                  color: COLORS._black,
                }}>
                Welcome Back
              </Text>
              <Text
                allowFontScaling={true}
                style={{
                  color: COLORS._gray,
                  fontSize: SIZES._xxMedium + 2,
                  fontFamily: FONTS._poppins_regular,
                }}>
                Sign to continue
              </Text>
            </View>
            {/* ************************ Button *********************** */}
            <View
              style={{
                width: '100%',
                paddingHorizontal: 70,
                marginTop: height * 0.05,
              }}>
              <View
                style={{
                  backgroundColor: COLORS._input_bg,
                  height: 60,
                  borderRadius: 50,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: COLORS._input_border,
                  paddingVertical: 2,
                  paddingHorizontal: 2,
                }}>
                <TouchableOpacity
                  onPress={handlePressDay}
                  style={[
                    styles.themesSwipe,
                    {
                      backgroundColor:
                        themes === 'email' ? COLORS._red : COLORS._input_bg,
                    },
                  ]}>
                  <Text
                    allowFontScaling={true}
                    style={{
                      color:
                        themes === 'email'
                          ? COLORS._white
                          : COLORS._buttom_text,
                      fontSize: SIZES._small,
                      fontFamily: FONTS._poppins_regular,
                    }}>
                    Email
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handlePressNight}
                  style={[
                    styles.themesSwipe,
                    {
                      backgroundColor:
                        themes === 'phone' ? COLORS._red : COLORS._input_bg,
                    },
                  ]}>
                  <Text
                    allowFontScaling={true}
                    style={{
                      color:
                        themes === 'phone'
                          ? COLORS._white
                          : COLORS._buttom_text,
                      fontSize: SIZES._small,
                      fontFamily: FONTS._poppins_regular,
                    }}>
                    Mobile
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* ************************ Input Field *********************** */}
            <View
              style={{
                rowGap: 8,
                marginTop: height * 0.04,
              }}>
              {themes === 'email' ? (
                <>
                  <View style={{}}>
                    <View style={styles.icons}>
                      <Image
                        tintColor={COLORS._red}
                        source={ICONS._email}
                        style={styles.icons_styles}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={styles.lines}></View>
                    <TextInput
                      placeholder="Email"
                      autoComplete={'email'}
                      placeholderTextColor={COLORS._placeholder}
                      style={[
                        styles.input,
                        {
                          borderColor: emailError
                            ? COLORS._red
                            : COLORS._input_border,
                        },
                      ]}
                      value={email}
                      onChangeText={emailHandle}
                    />
                  </View>
                  {emailError ? (
                    <Text style={styles.errorText}>{emailError}</Text>
                  ) : null}
                </>
              ) : (
                <>
                  <View style={{}}>
                    <PhoneInput
                      style={[
                        styles.phone_input,
                        {
                          borderColor: phoneError
                            ? COLORS._red
                            : COLORS._input_border,
                        },
                      ]}
                      placeholder="Mobile number"
                      placeholderTextColor="red"
                      containerStyle={[
                        styles.phoneInputContainer,
                        {
                          borderColor: phoneError
                            ? COLORS._red
                            : COLORS._input_border,
                        },
                      ]}
                      textContainerStyle={styles.textInputContainer}
                      textInputStyle={styles.textInput}
                      codeTextStyle={styles.codeText}
                      flagButtonStyle={styles.buttonStyle}
                      countryPickerButtonStyle={{
                        color: COLORS._white,
                      }}
                      value={phone}
                      onChangeText={phoneHandle}
                    />
                  </View>
                  {phoneError ? (
                    <Text style={styles.errorText}>{phoneError}</Text>
                  ) : null}
                </>
              )}

              <View
                style={{
                  marginTop: SIZES._medium,
                }}>
                <View style={styles.icons}>
                  <Image
                    tintColor={COLORS._red}
                    source={ICONS._lock}
                    style={[styles.icons_styles,styles.rotate]}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.lines}></View>

                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    zIndex: 2,
                    height: 30,
                    width: 30,
                    top: '25%',
                    marginLeft: '87%',
                  }}>
                  {showPassword == true ? (
                    <Image
                      tintColor={COLORS._otpBox}
                      source={ICONS._eye}
                      resizeMode="contain"
                      style={{
                        height: 20,
                        width: 20,
                      }}
                    />
                  ) : (
                    <Image
                      tintColor={COLORS._otpBox}
                      source={ICONS._eyeHide}
                      resizeMode="contain"
                      style={{
                        height: 20,
                        width: 20,
                      }}
                    />
                  )}
                </TouchableOpacity>

                <TextInput
                  placeholder="Password"
                  placeholderTextColor={COLORS._placeholder}
                  secureTextEntry={!showPassword}
                  maxLength={16}
                  style={[
                    styles.input,
                    {
                      borderColor: passwordError
                        ? COLORS._red
                        : COLORS._input_border,
                    },
                  ]}
                  value={password}
                  onChangeText={passwordHandle}
                />
              </View>
              {passwordError ? (
                <Text style={styles.errorText}>{passwordError}</Text>
              ) : null}
            </View>
            {/* ************************ Forgot Password? ********************** */}

            <View
              style={{
                width: '100%',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginTop: height * 0.013,
                paddingHorizontal: 2,
              }}>
              <Text
                onPress={()=> navigation.navigate('ForgotPassword')}
                allowFontScaling={true}
                style={{
                  fontSize: SIZES._small,
                  fontFamily: FONTS._poppins_regular,
                  color: COLORS._red,
                }}>
                Forgot Password?
              </Text>
            </View>

            {/* ************************ Login *********************** */}
            <View
              style={{
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={handleLogin}
                style={{
                  width: '100%',
                  backgroundColor: COLORS._red,
                  height: 60,
                  borderRadius: SIZES._xxSmall,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  marginTop: height * 0.03,
                }}>
                <Text
                  allowFontScaling={true}
                  style={{
                    color: COLORS._white,
                    fontSize: SIZES._medium,
                    fontFamily: FONTS._class_display_Medium,
                  }}>
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
            {/* ************************ Create Account ********************** */}
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: height * 0.03,
              }}>
              <Text
                allowFontScaling={true}
                style={{
                  fontFamily: FONTS._poppins_regular,
                  fontSize: SIZES._small,
                  color: COLORS._black,
                }}>
                Don’t have account?{' '}
                <Text
                  allowFontScaling={true}
                  style={{
                    fontFamily: FONTS._poppins_medium,
                    fontSize: SIZES._xxMedium,
                    color: COLORS._red,
                  }}>
                  SIGN UP
                </Text>
              </Text>
            </View>
            {/* *************************** container ************************* */}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES._medium,
  },
  main: {
    flex: 1,
  },
  input: {
    backgroundColor: COLORS._input_bg,
    height: 60,
    borderRadius: SIZES._xxSmall,
    paddingLeft: SIZES._huge,
    color: COLORS._black,
    // paddingRight: SIZES.xxLarge,
    // ...SHADOW.shadowBox,
    borderWidth: 1,
  },
  phone_input: {
    backgroundColor: COLORS._input_bg,
    height: 60,
    paddingLeft: SIZES._huge,
    color: COLORS._black,
    paddingRight: SIZES._small,
    borderWidth: 1,
    borderColor: COLORS._input_border,
  },
  phoneInputContainer: {
    width: '100%',
    height: 60,
    borderRadius: SIZES._xxSmall,
    paddingVertical: 0,
    backgroundColor: COLORS._input_bg,
    borderWidth: 1,
  },
  textInputContainer: {
    width: width * 0.9,
    height: '100%',
    borderTopRightRadius: SIZES._xxSmall,
    borderBottomRightRadius: SIZES._xxSmall,
    paddingVertical: 0,
    backgroundColor: COLORS._input_bg,
    borderLeftWidth: 5,
    borderLeftColor: COLORS._input_border,
  },
  textInput: {
    color: COLORS._black,
  },
  codeText: {
    color: COLORS._black,
  },
  buttonStyle: {
    backgroundColor: COLORS._input_bg,
    borderTopLeftRadius: SIZES._xxSmall,
    borderBottomLeftRadius: SIZES._xxSmall,
  },
  icons: {
    backgroundColor: COLORS._input_bg,
    width: 30,
    height: 30,
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginLeft: 20,
    borderRadius: SIZES._xxSmall - 2,
    borderWidth: 2,
    borderColor: COLORS._input_border,
  },
  icons2: {
    backgroundColor: COLORS._input_bg,
    width: 30,
    height: 30,
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginLeft: 20,
    borderRadius: SIZES._xxSmall - 2,
    // borderWidth: 1,
    // borderColor: COLORS._input_border,
  },
  icons_styles: {
    height: '60%',
    width: '60%',
  },
  rotate:{
    transform: [{ rotate: '-45deg' }]
  },
  icons_styles_lock: {
    height: '100%',
    width: '100%',
  },
  lines: {
    position: 'absolute',
    zIndex: 1,
    height: '60%',
    width: 3,
    backgroundColor: COLORS._input_border,
    marginLeft: 65,
    marginTop: 14,
  },
  errorText: {
    color: COLORS._red,
  },
  themesSwipe: {
    borderRadius: 50,
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeBg: {
    backgroundColor: COLORS._red,
  },
  activeBgN: {
    backgroundColor: COLORS._input_bg,
  },
});
