import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
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

const ResetPassword = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const closeModal = () => {
    setShowModal(false);
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
    setPassword('');
  };

  const handleLogin = () => {
    if (!password) {
      setPasswordError('Password is required.');
    }
    if (password && !passwordError) {
      setShowModal(true);
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
              Reset Password
            </Text>
            <Text> </Text>
          </View>

          {/* ************************ Input Field *********************** */}
          <View
            style={{
              rowGap: 8,
              marginTop: height * 0.15,
            }}>
            <View
              style={{
                marginTop: SIZES._medium,
              }}>
              <View style={styles.icons}>
                <Image
                  tintColor={COLORS._red}
                  source={ICONS._lock}
                  style={[styles.icons_styles, styles.rotate]}
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
            <View
              style={{
                marginTop: SIZES._medium,
              }}>
              <View style={styles.icons}>
                <Image
                  tintColor={COLORS._red}
                  source={ICONS._lock}
                  style={[styles.icons_styles, styles.rotate]}
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

          {/* ************************ SUBMIT *********************** */}
          <View
            style={{
              width: '100%',
            }}>
            <TouchableOpacity
              onPress={handleLogin}
              style={{
                width: '100%',
                backgroundColor: COLORS._red,
                height: height * 0.075,
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
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>

          {/* *************************** container ************************* */}
        </View>
        <Modal visible={showModal} animationType="slide" transparent>
          <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Password Change Succesfully!</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ResetPassword;

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
    height: height * 0.075,
    borderRadius: SIZES._xxSmall,
    paddingLeft: SIZES._huge,
    color: COLORS._black,
    borderWidth: 1,
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
  rotate: {
    transform: [{rotate: '-45deg'}],
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
