import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const Profile = () => {
    return (
        <View>
         <Ionicons style={styels.proifle_image} name="person-outline" size={210} color="black" />
        </View>
    )
}

export default Profile
const styels = StyleSheet.create({
    proifle_image: {
        display:"flex",
        paddingHorizontal:100,
        paddingVertical:40,
        // backgroundColor:"yellow",
      alignSelf:"center"


    }
})