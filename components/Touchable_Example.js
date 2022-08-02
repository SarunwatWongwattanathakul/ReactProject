import { StyleSheet, Text, View ,TouchableHighlight,TouchableNativeFeedback,TouchableOpacity,TouchableWithoutFeedback,SafeAreaView} from 'react-native'
import React from 'react'

const Touchable_Example = () => {
    const onPress = (msg) => {
        alert('Alert for: '+msg);
    };

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <TouchableNativeFeedback 
                style={styles.button}
                onPress={()=>onPress('TouchableNativeFeedback Pressed')}
            >
                    <Text>Touchable Native Feedback(Only Android)</Text>
            </TouchableNativeFeedback>

            <TouchableHighlight 
                style={styles.button}
                onPress={()=>onPress('TouchableHighlight Pressed')}
            >
                    <Text>TouchableHighlight</Text>   
            </TouchableHighlight>

            <TouchableOpacity
                style={styles.button}
                onPress={()=>onPress('TouchableOpacity Pressed')}
            >
                    <Text>Touchable Opacity</Text> 
            </TouchableOpacity>

            <TouchableWithoutFeedback
                
                onPress={()=>onPress('TouchableWithoutFeedback Pressed')}
            >
                <View style={styles.button}>
                    <Text>Touchable Without Feedback</Text>
                </View>
                     
            </TouchableWithoutFeedback>

        </View>
    </SafeAreaView>
    
  )
}

export default Touchable_Example

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD', //color of button 
        padding: 10,
        width: 300,
        marginTop: 16,},
});