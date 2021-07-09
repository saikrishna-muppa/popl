import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
const AddLink = () => {
    return (
        <View style={styels.add_link_header}>
            <AntDesign style={styels.add_link} name="plus" size={84} color="black" />
            <Text>AddLink</Text>
        </View>
    )
}

export default AddLink
const styels = StyleSheet.create({
    add_link: {
        shadowColor: "#000",
shadowOffset: {
	
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
width: 100,
        borderRadius: 12,
        textAlign: 'center',
        backgroundColor: "white",
        color: "black"

    },
    add_link_header:{
        marginLeft: 45,
        marginTop:20,
       
    }
})