import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import { Button } from 'react-native-web'

const App = () => {
  return (
    <View>
      <Logo/>
      <Button
        title = 'Click me'
      />
      <User/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})