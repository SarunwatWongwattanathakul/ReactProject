import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
    const TextLogo = "Thai-Nichi";
    return (
        <View>
            <Text style={styles.TextLogo}>TNI</Text>
            <Text>{textLogo}</Text>
        </View>
    )
}
export default Logo
const styles = StyleSheet.create({
    TextLogo:{
        color:"blue",
        fontSize: 60
    }
})
