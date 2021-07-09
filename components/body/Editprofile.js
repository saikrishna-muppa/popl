import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const Editprofile = () => {
    return (
        <View>
            <Text style={styles.profile_edit}>Editprofile</Text>
        </View>
    )
}

export default Editprofile
const styles = StyleSheet.create({
   
    profile_edit:{
        fontSize:24,
        backgroundColor:"#9e9e9e57",
        paddingHorizontal:18,
        paddingVertical:12,
        borderRadius:18
    }

})