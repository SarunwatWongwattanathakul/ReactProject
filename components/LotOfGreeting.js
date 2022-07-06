import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props) =>{
    return(
        <View style={{alignItems:'center'}}>
            <Text>Hello {props.name} {props.date} </Text>
        </View>
    )
};

const LotOfGreeting = () => {
  return (
    <View style={{ alignItems:'center', top: 50 }}>
        <Greeting name='Merry Chirstmas' date='25-Dec-2022'/>
        <Greeting name='Happy New Year'date='31-Dec-2022'/>
        <Greeting name='Songkran Festival'date='13-Apr-2022'/>
    </View>
  )
}

export default LotOfGreeting