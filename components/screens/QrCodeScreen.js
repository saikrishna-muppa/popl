import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const QrCodeScreen = ({navigation}) => {
    const goToHome=()=>{
        console.log('clciked')
        navigation.navigate('Home')
    }
	return (
		<View>
			<View>
			<Entypo name="circle-with-cross" size={34} color="black" style={styels.qr_croos_icon} onPress={()=> navigation.navigate('Home')} />
				<Text style={styels.qr_header} >
					popl
				</Text>
			</View>
			<View style={styels.qr_btns}>
				<TouchableOpacity style={styels.share_profile_link_btn}>
					<Text style={styels.share_profile_link_btn_text}>Share profile link</Text>
				</TouchableOpacity >
				<TouchableOpacity style={styels.wallet_bnt}>
					<Text style={styels.wallet_bnt_text}>Add QR to wallet</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default QrCodeScreen;
const styels = StyleSheet.create({
	qr_header: {
		marginTop:20,
		textAlign: 'center',
		fontSize: 40,
		fontWeight: '700'
	},
	qr_croos_icon: {
		textAlign:'right',
		marginTop:20,
		marginRight:10
	},
	qr_btns: {
		display:'flex',
        alignItems:'center'
	},
	share_profile_link_btn: {
		backgroundColor: 'white',
		padding:20,
        borderRadius:8,
        marginBottom:20,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,

elevation: 18,
	},
	share_profile_link_btn_text: {
		color: 'black',
		fontWeight: '700',
        textAlign:'center'
	},
    wallet_bnt:{
        backgroundColor: 'black',
		padding:20,
        borderRadius:8,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,

elevation: 18,
    },
    wallet_bnt_text:{
        color: 'white',
		fontWeight: '700',
        textAlign:'center'
    }
});
