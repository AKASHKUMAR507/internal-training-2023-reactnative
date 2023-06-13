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
import BackBtn from '../../components/buttons/BackBtn';
const {height, width} = Dimensions.get('screen');
const {w_height, w_width} = Dimensions.get('window');

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

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

  // clear input field
  const clearInputField = () => {
    setEmail('');
  };
  const handleLogin = () => {
    if (themes === 'email') {
      if (!email) {
        setEmailError('Email is required.');
      }

      if (email && !emailError) {
        setTimeout(() => {
          navigation.navigate('ForgotOtp', {data});
          clearInputField();
        }, 500);
      }
    } else {
      if (!phone) {
        setPhoneError('Mobile number is required.');
      }
      if (phone && !phoneError) {
        setTimeout(() => {
          navigation.navigate('ForgotOtp', {data});
          clearInputField();
        }, 500);
      }
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: COLORS._white}}>
      <SafeAreaView style={styles.container}>
        {/* *************************** container *************************** */}
        <View style={styles.main}>
          {/* ******************** heading and Back Button ********************  */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: SIZES._medium,
            }}>
            <BackBtn Press={() => navigation.navigate('Login')} />
            <Text
              style={{
                fontSize: SIZES._xxLarge,
                color: COLORS._black,
                fontFamily: FONTS._class_display_Medium,
              }}>
              Forgot Password
            </Text>
            <Text> </Text>
          </View>
          {/* ************************ Button *********************** */}
          <View
            style={{
              width: '100%',
              paddingHorizontal: 70,
              marginTop: height * 0.15,
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
                      themes === 'email' ? COLORS._white : COLORS._buttom_text,
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
                      themes === 'phone' ? COLORS._white : COLORS._buttom_text,
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
              marginTop: height * 0.1,
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
          </View>
          {/* ************************ NEXT *********************** */}
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
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
          {/* *************************** container ************************* */}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ForgotPassword;

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

  icons_styles: {
    height: '60%',
    width: '60%',
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
