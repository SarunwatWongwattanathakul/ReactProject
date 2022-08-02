import { View, Text } from 'react-native'
import React from 'react'

const NameFriend = ({fName,lname}) => {
    return(
        <View style={{alignItems:'center'}}>
            <Text>Your First Name is {fName} and Last name is {lname}</Text>
            
        </View>
    )
}

const MyCustomTextWith = () => {
  return (
    <View style={{ alignItems:'center',justifyContent:'center' ,flex:1}}>
      <NameFriend fName='Sarunwat'lname='Wongwattanathakul' />
      <NameFriend fName='Onwanya'lname='Sitsirisopa' />
    </View>
  )
}

export default MyCustomTextWith