import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { COLORS, FONTS, SIZES } from '../../assets/Themes';
import BackBtn from '../../components/buttons/BackBtn';
import Success from '../../components/Success';
const { height, width } = Dimensions.get('screen');

const OTP_TIMEOUT = 1;

const OTP_Screen = ({ navigation, route }) => {
  const { data } = route.params;
  const email_phone = data.loginData;
  const email = email_phone;

  const OTP_VALUE = '123456';
  const OTP = OTP_VALUE.split('');
  const [time, setTime] = useState(OTP_TIMEOUT * 60);
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const numRegex = /^[0-9]$/;
  const [invalid, setInvalid] = useState(true);
  const [send, setSend] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showModalOtp, setShowModalOtp] = useState(false);

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
    if (time == 0) {
      setSend(true)
      setShowModalOtp(true);
    } else {
      setShowModalOtp(true);
      setSend(false)
    }
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

  const handlePress = () => {
    if (OTP.toString() === otp.toString()) {
      setTimeout(() => {
        navigation.navigate('Home');
      }, );
    } else {
      setInvalid(false);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeModalOtp = () => {
    setShowModalOtp(false);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: COLORS._white }}>
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
            marginTop: '30%',
            rowGap: 13,
          }}>
          <View style={styles.inputContainer}>
            {otp.map((value, index) => (
              <TextInput
                key={index}
                ref={ref => (inputRefs.current[index] = ref)}
                style={[styles.input]}
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
            marginTop: '2%',
          }}>
          <View
            style={{
              marginTop: 10,
              width: '100%',
              flexDirection: 'row-reverse',
            }}>

            <Text
              style={{
                color: COLORS._black,
                fontSize: SIZES._medium,
                fontFamily: FONTS._poppins_regular,
              }}>
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </Text>
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
                  fontSize: SIZES._xMedium,
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
            disabled={!(otp_Succes_Length == true)}
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
        {/* ******************** Success Message ********************  */}

        {invalid == true ? (
          <Modal visible={showModalOtp} animationType="slide" transparent>
            <TouchableOpacity
              style={styles.modalContainer}
              onPress={closeModalOtp}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>OTP Resend Successfully !</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        ) : (
          null
        )}
        {send == true ? (
          <Modal visible={showModal} animationType="slide" transparent>
            <TouchableOpacity
              style={styles.modalContainer}
              onPress={closeModal}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContentError}>
                  <Text style={styles.modalText}>Invalid OTP</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};

export default OTP_Screen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    textAlign: 'center',
    fontSize: 30,
    borderRadius: SIZES._xxSmall,
    width: '15%',
    height: 60,
    fontFamily: FONTS._poppins_medium,
    color: COLORS._black,
    backgroundColor: COLORS._input_bg,
    borderWidth: 1,
    borderColor: COLORS._input_border,
    paddingBottom: -8,
  },
  button: {
    marginTop: '4%',
    width: '100%',
  },
  submitBUtton: {
    height: 60,
    width: '100%',
    borderRadius: SIZES._xxSmall,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // ******************************************************
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS._green,
    alignItems: 'center',
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentError: {
    backgroundColor: COLORS._red,
    alignItems: 'center',
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: SIZES._medium,
    fontFamily: FONTS._poppins_regular,
    color: COLORS._white,
  },
  closeButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
