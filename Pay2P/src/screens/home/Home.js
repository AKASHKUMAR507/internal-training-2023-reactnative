import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../assets/Themes'

const Home = () => {
  return (
    <View style ={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style ={{
        fontSize: 20,
        textAlign: 'center',
        color:COLORS._black,
      }}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})