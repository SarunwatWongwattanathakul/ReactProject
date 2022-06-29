import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Logo = () => {
    const textLogo = "Thai-Nihi";
    const isTH = false;
    return (
        <View>
            <Text style={styles.TextLogo}>TNI</Text>
            <Text>{textLogo}</Text>
            {/* {
                isTH && <Text>ภาษาไทย</Text>
            } */}
            {/* use if/else or conditonal operator */}
            {
                isTH
                ?(<Text>ภาษาไทย</Text>)
                :(<Text>ภาษาอังกฤษ</Text>)
            }

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