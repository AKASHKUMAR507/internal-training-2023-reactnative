import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IMAGES } from '../assets/thems'
import PhoneInput from 'react-native-phone-input';

const SignUpScreen = () => {
  return (
    <SafeAreaView>

      <View>
        <Image source={IMAGES.cryptoWater}/>
      </View>

      <View>
        <Text>Create Account</Text>
        <Text>Please Enter Register Details</Text>
      </View>

      <View>
        <View>
          <Text>First Name</Text>
          <TextInput
            placeholder='name'
          />
        </View>
        <View>
          <Text>First Name</Text>
          <TextInput
            placeholder='name'
          />
        </View>
        <View>
          <Text>First Name</Text>
          <TextInput
            placeholder='name'
          />
        </View>
        <View>
          <Text>Phone</Text>
          {/* <PhoneInput 
            placeholder={"Phone"}
          /> */}
        </View>
        <View>
          <Text>First Name</Text>
          <TextInput 
            placeholder='name'
          />
        </View>
        <View>
          <Text>First Name</Text>
          <TextInput
            placeholder='name'
          />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})