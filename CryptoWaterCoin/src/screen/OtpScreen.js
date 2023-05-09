import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {COLORS, FONTFAMILY, FONTSTYLE, IMAGES, SIZES} from '../assets/thems';
import LinearGradient from 'react-native-linear-gradient';

const OTP_TIMEOUT = 3; // minutes

const {height, width} = Dimensions.get('screen');

const OtpScreen = ({navigation}) => {
  const OTP_VALUE = '1234';
  const OTP = OTP_VALUE.split('');
  const [time, setTime] = useState(OTP_TIMEOUT * 60);
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(['', '', '', '']);
  const numRegex = /^[0-9]$/;
  const [invalid, setInvalid] = useState(true);

  let otp_Succes_Length = otp.toString().length === 11;

  const styleBgButton = otp_Succes_Length
    ? {
        backgroundColor: '#286FDB',
      }
    : {
        backgroundColor: 'rgba(40, 111, 219, 0.5)',
      };

  // set time to 2 minutes in seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const handleResendOTP = () => {
    setTime(OTP_TIMEOUT * 60);
  };

  const seconds = time % 60;
  const minutes = Math.floor(time / 60);

  // otp box
  const handleOtpChange = (index, value) => {
    if (numRegex.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.slice(0, 1);
      setOtp(newOtp);
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (event, index) => {
    if (!numRegex.test(event.nativeEvent.key)) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const errorThrow = !invalid
    ? {
        borderColor: COLORS.error,
      }
    : {
        borderColor: COLORS.c1,
      };

  const handlePress = () => {
    if (OTP.toString() === otp.toString()) {
      // navigation.navigate('Home');
      setInvalid(true);
    } else {
      setInvalid(false);
    }
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
          zIndex: 1,
          flex: 1,
          paddingHorizontal: width * 0.01,
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
        <View style={styles.container}>
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
              Enter OTP
            </Text>
            <Text
              style={{
                color: COLORS.placeholder,
                fontSize: SIZES.medium,
                fontFamily: FONTFAMILY.poppins,
                fontStyle: FONTSTYLE.normal,
              }}>
              Please Enter the 4 digit OTP sent to your registered email id.
            </Text>
          </View>

          {/* OTP Varification Code */}
          <View
            style={{
              marginTop: '10%',
            }}>
            <View style={styles.inputContainer}>
              {otp.map((value, index) => (
                <TextInput
                  key={index}
                  ref={ref => (inputRefs.current[index] = ref)}
                  style={[styles.input, errorThrow]}
                  maxLength={1}
                  keyboardType="numeric"
                  value={value}
                  onChangeText={text => handleOtpChange(index, text)}
                  onSubmitEditing={() => {
                    if (index < inputRefs.current.length - 1) {
                      inputRefs.current[index + 1].focus();
                    }
                  }}
                  onKeyPress={event => handleKeyPress(event, index)}
                />
              ))}
            </View>
          </View>

          {/* Reverse Time */}

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '3%',
            }}>
            <View
              style={{
                width: '50%',
              }}>
              {!invalid && (
                <Text
                  style={{
                    color: '#DC3545',
                    // marginTop: 10,
                    fontSize: 12,
                  }}>
                  Please enter correct OTP.
                </Text>
              )}
            </View>
            <View
              style={{
                marginTop: 10,
              }}>
              {seconds != 0 ? (
                <>
                  <Text
                    style={{
                      color: COLORS.white,
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: SIZES.large,
                      fontFamily: FONTFAMILY.roboto,
                    }}>
                    {`Resend code in `}
                    <Text
                      style={{
                        color: COLORS.c1,
                        fontSize: 18,
                      }}>
                      {minutes < 10 ? `0${minutes}` : minutes}:
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </Text>
                    {` s`}
                  </Text>
                </>
              ) : (
                <View>
                  {time === 0 && (
                    <View style={{}}>
                      <TouchableOpacity onPress={handleResendOTP}>
                        <Text
                          style={{
                            color: COLORS.white,
                            fontSize: 16,
                            textAlign: 'right',
                            marginTop: 10,
                          }}>
                          Resend Code
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}
            </View>
          </View>

          {/* Submit Button */}
          <View
            style={{
              marginTop: '20%',
            }}>
            <TouchableOpacity
              style={[styles.submitBUtton, styleBgButton]}
              onPress={handlePress}>
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
                    fontSize: 19,
                    color: '#FFFFFF',
                  }}>
                  Submit
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'f5f5f5',
    marginLeft: 25,
    marginRight: 27,
    paddingTop: 20,
    height: '100%',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 10,
  },
  input: {
    textAlign: 'center',
    fontSize: 29,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: SIZES.xxLarge,
    width: '21.5%',
    height: height * 0.075,
    backgroundColor: COLORS.white,
    shadowColor: 'rgba(0.5, 0.5, 0.5, 0.5)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  submitBUtton: {
    backgroundColor: COLORS.c1,
    height: height * 0.075,
    width: '100%',
    borderRadius: SIZES.xxxLarge + 65,
  },
});

export default OtpScreen;
