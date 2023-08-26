import {SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>RegisterScreen</Text>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})