import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import { Button } from 'react-native-web'
import LotOfGreeting from './components/LotOfGreeting'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import InputText from './components/InputText'
import UsernameAndPassword from './components/UsernameAndPassword'
import UserNamePassword from './components/UserNamePassword'

const App = () => {
  return (
    <View style={styles.container} >
      {/*<Logo/>*/}
      {/*<Button title = 'Click me'/>*/}
      {/*<User/>*/}
      {/*<LotOfGreeting/> */}
      {/*<MyCustomTextWith/>*/}
      {/*<Count/>*/}
      {/*<InputText/> */}
      {/*<UsernameAndPassword/>*/}
      <UserNamePassword/>
    </View>
  )
}

export default App
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})