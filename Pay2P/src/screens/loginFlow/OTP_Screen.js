import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../../assets/Themes';
import BackBtn from '../../components/buttons/BackBtn';
const {height, width} = Dimensions.get('screen');

const OTP_TIMEOUT = 1;

const OTP_Screen = ({navigation, route}) => {
  const {data} = route.params;
  const email_phone = data.loginData;
  const email = email_phone;

  const OTP_VALUE = '123456';
  const OTP = OTP_VALUE.split('');
  const [time, setTime] = useState(OTP_TIMEOUT * 60);
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const numRegex = /^[0-9]$/;
  const [invalid, setInvalid] = useState(true);

  let otp_Succes_Length = otp.toString().length === 11;

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
        borderColor: COLORS._red,
      }
    : {
        borderColor: COLORS._input_border,
      };

  const handlePress = () => {
    if (OTP.toString() === otp.toString()) {
      //   navigation.navigate('Home');
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS._white,
        paddingHorizontal: SIZES._medium,
      }}>
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
          OTP Verification
        </Text>
        <Text> </Text>
      </View>
      {/* ******************** sub heading ********************  */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: SIZES._large + SIZES._xxSmall,
          paddingHorizontal: SIZES._medium,
        }}>
        <Text
          style={{
            fontSize: SIZES._xxMedium,
            textAlign: 'center',
            fontFamily: FONTS._poppins_regular,
            color: COLORS._gray,
          }}>
          Please enter the 6 digit verification code that was sent to {email}.
          The code is valid for {OTP_TIMEOUT} minute.
        </Text>
      </View>
      {/* ******************** OTP BOX ********************  */}
      <View
        style={{
          marginTop: '40%',
          //   width:'100%'
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

      {/* ******************** Resend Code ********************  */}
      <View
        style={{
          justifyContent: 'flex-end',
          alignContent: 'flex-end',
          alignItems: 'flex-end',
          marginTop: '3%',
        }}>
        <View
          style={{
            width: '100%',
          }}>
          {!invalid && (
            <Text
              allowFontScaling={true}
              style={{
                color: COLORS._red,
                fontFamily: FONTS._poppins_regular,
                fontSize: SIZES._xxMedium,
              }}>
              Please enter correct OTP.
            </Text>
          )}
        </View>
        <View
          style={{
            marginTop: 10,
            width: '100%',
            flexDirection: 'row-reverse',
          }}>
          {seconds != 0 ? (
            <>
              <Text
                style={{
                  color: COLORS._black,
                  fontSize: SIZES._medium,
                  fontFamily: FONTS._poppins_regular,
                }}>
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </Text>
            </>
          ) : null}
        </View>
        <View
          style={{
            marginTop: height * 0.05,
            width: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity disabled={!(time == 0)} onPress={handleResendOTP}>
            <Text
              style={{
                color: COLORS._red,
                fontFamily: FONTS._poppins_regular,
                fontSize: SIZES._medium,
                textDecorationLine: 'underline',
              }}>
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ******************** Submit Button ********************  */}
      <View style={styles.button}>
        <TouchableOpacity
          style={[
            styles.submitBUtton,
            {
              backgroundColor: !otp_Succes_Length
                ? COLORS._light_red
                : COLORS._red,
            },
          ]}
          onPress={handlePress}>
          <Text
            style={{
              fontSize: SIZES._xxLarge,
              color: COLORS._white,
              fontFamily: FONTS._class_display_Medium,
            }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OTP_Screen;

const styles = StyleSheet.create({
  inputContainer: {
    // width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // columnGap: 5,
  },
  input: {
    textAlign: 'center',
    fontSize: 29,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: SIZES._xxSmall,
    width: '10%',
    height: '80%',
    backgroundColor: COLORS._input_bg,
    // shadowColor: 'rgba(0.5, 0.5, 0.5, 0.5)',
    // shadowOpacity: 0.5,
    // shadowRadius: 3,
    // shadowOffset: {
    //   height: 0,
    //   width: 0,
    // },
    // elevation: 2,
  },
  button: {
    marginTop: '4%',
    width: '100%',
  },
  submitBUtton: {
    height: height * 0.075,
    width: '100%',
    borderRadius: SIZES._xxSmall,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
