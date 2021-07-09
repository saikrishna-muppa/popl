import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
const HelpCenter = () => {
    return (
        <View style={styles.help_container}>
            <Text style={styles.help_container_one}>popl</Text>
           <Text style={styles.help_container_two}>Patent Pending   <MaterialIcons name="check-circle" size={24} color="black" /></Text>
          
           <Text style={styles.help_container_three}>Help Center</Text>
        </View>
    )
}

export default HelpCenter

const styles=StyleSheet.create({
    help_container:{
   display:'flex',
   alignContent:'space-around',
   padding:50

    },
    help_container_one:{
        textAlign:'center',
        fontSize:20,
        marginBottom:15
        
    },
    help_container_two:{
        textAlign:'center',
        fontSize:20,
        marginBottom:15,
        fontWeight: "700",
    },
    help_container_three:{
        textAlign:'center',
        fontSize:20,
        marginBottom:15,
        fontWeight: "100",
    }

})
