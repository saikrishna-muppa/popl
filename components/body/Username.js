import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
const Username = () => {
    return (
        <View style={styeles.username}>
                     <View  style={styeles.right_icon}>
                     <AntDesign name="right" size={24} color="black"  />
                     </View>
          <Text>Muppa saikrishna </Text>
          <Text>link</Text>

        </View>
    )
}

export default Username

const styeles=StyleSheet.create({
    username:{
         paddingHorizontal:150,
        // backgroundColor:"#9e9e9e57",
    },
    right_icon:{
        // paddingHorizontal:50
    }
})
