import React from 'react'
import { View, Text,TextInput,StyleSheet, TouchableOpacity } from 'react-native'

const Forgot_password = ({navigation}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.forgot_password_popl_title}>popl</Text>
            <Text style={styles.forgot_password_title}>Forgot password</Text>
            <Text style={styles.input_text}>Enter you Popl email and we'll send you a 6 digut code</Text> 
            <TextInput style={styles.input_fileds} placeholder="email" ></TextInput>
            <TouchableOpacity style={styles.email_input}><Text  style={styles.email_input_text}   onPress={() => navigation.navigate('Home')} >Send code</Text></TouchableOpacity>
          <Text style={styles.back_to_login} onPress={()=>{navigation.navigate('login')}}>Back to Login</Text>
        </View>
    )
}

export default Forgot_password
const styles=StyleSheet.create({
    header:{
        marginTop:60,
        display:'flex',
        alignItems:'center' ,
        backgroundColor:'#C0C6C590', 
        
    },
    forgot_password_popl_title:{
        fontWeight:'700',
        fontSize:45,
        marginLeft:-20, 
    },
    forgot_password_title:{
        fontSize:35,
        fontWeight:'600'
    },
    input_text:{
        width:260,
        textAlign:'center',
        fontSize:18
    },
    input_fileds:{
        height: 60,
        margin: 8,
        marginLeft:-5,
        width: 300,
        borderWidth: 1,
        borderRadius:4,
        backgroundColor:'white',
        paddingLeft:20,
        marginTop:20
        // textAlign:'center'
    },email_input:{
        backgroundColor:'#393937',
        color:'white',
        paddingHorizontal:80,
        paddingVertical:16,
        borderRadius: 8,
        marginTop: 30,
        marginLeft:-15,
       
       
    },email_input_text:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        fontWeight:'700'
    },
    back_to_login:{
        color:'#9e9e9e',
        fontSize:20,
        marginTop:20,textAlign:'center',
        fontWeight:'700'
    }
})