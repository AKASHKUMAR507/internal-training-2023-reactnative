import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import {
  FLEX,
  IMAGES,
  FONTFAMILY,
  FONTSTYLE,
  SIZES,
  ICON,
  COLORS,
  FONTWEIGHT,
} from '../assets/thems';
import Btn from '../components/button/Btn';
import { validationEmail } from '../components/Validation';
const {height, width} = Dimensions.get('screen');

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');



  const handleEmail = (text) =>{
    setEmail(text);

    if (!text) {
      setEmailError('Email is required');
    } else if (!validationEmail(text)) {
      setEmailError('Please enter valid email address.');
    } else {
      setEmailError('');
    }
  }

  const handleSendOTP = () =>{
    if(!email){
      setEmailError('Email is Required')
    }

    if(email && !emailError){
      navigation.navigate('ForgotOTP');
      setEmail('')
    }
  }
  
  return (
    <ImageBackground
      source={IMAGES.backImage}
      style={{
        flex: FLEX.flex,
        paddingHorizontal: height * 0.03,
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
          Forgot Password ?
        </Text>
        <Text
          style={{
            color: COLORS.placeholder,
            fontSize: SIZES.medium,
            fontFamily: FONTFAMILY.poppins,
            fontStyle: FONTSTYLE.normal,
          }}>
          Enter the email address you'd like your password information sent to
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
            style={[styles.input, 
              {borderColor: emailError ? COLORS.error : COLORS.borderColor}
            ]}
            value={email}
            onChangeText={handleEmail}
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
        </View>
      </View>
      {/* *************************** Button *********************************** */}
      <View
        style={{
          marginTop: height * 0.05,
        }}>
        <Btn
          title={'Send OTP'}
          BgColor={COLORS.c1}
          Press={handleSendOTP}
        />
      </View>
      {/* *************************** Signup *********************************** */}
      <View
        style={{
          marginTop: height * 0.07,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: COLORS.textLink,
            fontSize: SIZES.medium,
            fontStyle: FONTSTYLE.normal,
            fontFamily: FONTFAMILY.roboto,
            fontWeight: 'bold',
          }}
          onPress={() => navigation.navigate('Login')}>
          Back to Login
        </Text>
      </View>
    </ImageBackground>
  );
};

export default ForgotPassword;

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
  errorText: {
    color: COLORS.error,
    fontSize: SIZES.medium + 1,
    fontFamily: FONTFAMILY.roboto,
    fontStyle: FONTSTYLE.normal,
    fontWeight: FONTWEIGHT.medium,
    marginLeft:SIZES.medium,
  },
});
