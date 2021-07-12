import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import {img1} from '../../assets/images/iPhone_Popl.webp'
const Set_up_Popl = ({navigation}) => {
    return (
        <View >
           
			<Entypo name="circle-with-cross" size={34} color="black" style={styels.profile_croos_icon} onPress={() => navigation.navigate('Home')} />
            <Text style={styels.popl_header} >
					popl 
				</Text>
                <View style={styels.card_header}>
					<View style={styels.card_container}>
						
					
							<View>
                                {/* <Image source={img1}/> */}
                            <Text style={styels.card_icon}>Popl</Text>
								<Text style={styels.card_header_text}>Add at least one link</Text>
							</View>
							
					
					</View>
                    </View>
        </View>
    )
}

export default Set_up_Popl
const styels = StyleSheet.create({
	popl_header: {
		textAlign: 'center',
		fontSize: 40,
		fontWeight: '700'
	},profile_croos_icon: {
		textAlign:'right',
		marginTop:20,
		marginRight:10
	},
    card_header:{
        display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
    },
	card_container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		borderWidth: 2,
		borderColor: 'black',
		// paddingHorizontal:20,
		paddingVertical: 40,
		width: 250,
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 24
	},
	card_icon: {
		textAlign: 'center'
	},card_header_text:{
         fontWeight:'600'
    },card_edit_text:{
        fontSize:10
    }
})