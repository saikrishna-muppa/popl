import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
const GoPro = ({ navigation }) => {
	return (
		<View>
			<Entypo
				name="circle-with-cross"
				size={34}
				color="black"
				style={styels.pro_cross_icon}
				onPress={() => navigation.navigate('Home')}
			/>
			<Text style={styels.pro_header}>pro</Text>
			<View>
				<Text style={styels.pro_para}>Unlock the most advanced digital bussiness card in the world</Text>
			</View>

			<View style={styels.pro_container_header}>
				<View style={styels.pro_container}>
					<View>
						<FontAwesome name="refresh" size={24} color="black" />
					</View>
				
						<View>
							<Text style={styels.card_header_text}>Personal/Bussiness mode</Text>
						</View>
				
				</View>
                <View style={styels.pro_container}>
					<View>
                    <Ionicons name="sunny-outline" size={24} color="black" />
					</View>
		
						<View>
							<Text style={styels.card_header_text}>Personal/Bussiness mode</Text>
						</View>
				
				</View>
                <View style={styels.pro_container}>
					<View>
                    <Octicons name="graph" size={24} color="black" />
					</View>
					
						<View>
							<Text style={styels.card_header_text}>Pro Analytics</Text>
						</View>
					
				</View>
                <View style={styels.pro_container}>
					<View>
                    <Ionicons name="flash-outline" size={24} color="black" />
					</View>
					
						<View>
							<Text style={styels.card_header_text}>And more</Text>
						</View>
					
				</View>
			</View>
		</View>
	);
};

export default GoPro;
const styels = StyleSheet.create({
	pro_header: {
		marginTop: 20,
		textAlign: 'center',
		fontSize: 40,
		fontWeight: '700'
	},
	pro_cross_icon: {
		textAlign: 'right',
		marginTop: 20,
		marginRight: 10
	},

	pro_para: {
		textAlign: 'center',
		fontSize: 20,
		marginLeft: 20,
		marginRight: 20
		// width:250
	},
    pro_container_header:{
        display:'flex',
        alignItems:'center',
        marginTop:25,
      
    },
	pro_container: {
        marginTop:20,
        display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	}
});
