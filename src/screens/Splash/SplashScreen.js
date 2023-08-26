import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SplashScreen</Text>
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})