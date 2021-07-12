import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
const How_To_Pop = ({navigation}) => {
    return (
        <View>
            <Text>How_To_Pop</Text>
            <Entypo name="circle-with-cross" size={34} color="black" style={styels.pro_cross_icon} onPress={()=> navigation.navigate('Home')}  />
        </View>
    )
}

export default How_To_Pop
const styels=StyleSheet.create({

    pro_cross_icon:{
  textAlign:'right',
  marginTop:20,
  marginRight:10
       
    }})