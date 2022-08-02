import { View, Text ,StyleSheet ,TextInput ,Button} from 'react-native'
import React,{useState}from 'react'

const UsernameAndPassword = () => {

    const [userEmail, setUserEmail] = useState('');
    const [passWord, setPassword] = useState('');
    const Data =() =>{
        alert("Email : "+userEmail 
                +"\nPassword : "+passWord)
      }


  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <TextInput 
        value={userEmail}
        onChangeText={(userEmail)=>{setUserEmail(userEmail)}}
        style={styles.textinput}
        placeholder='Email '
      />
      <TextInput 
        value={passWord}
        onChangeText={(passWord)=>{setPassword(passWord)}}
        style={styles.textinput}
        placeholder='Password '
      />
      <View style={{flex:1,
        width:400,
        marginTop:10,
        marginBottom:10}}>
        <Button 
            title='Submit'
            onPress={Data}
            color='#99ED43'
        />
      </View>
    </View>
  )
}

export default UsernameAndPassword

const styles = StyleSheet.create({
    textinput :{
        fontSize:15,
        width:400,
        height:45,
        padding:10,
        marginTop:20,
        marginBottom:10,
        backgroundColor: 'yellow',
        borderColor:'red',
        borderWidth:1
    }
})