import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const CompleteProfile = ({ navigation }) => {
	return (
		<View>
			<View>
			<Entypo name="circle-with-cross" size={34} color="black" style={styels.profile_croos_icon} onPress={() => navigation.navigate('Home')} />
				<Text style={styels.profile_header} >
					popl
				</Text>
				<Text style={{ textAlign: 'center' }}>Complete your Profile</Text>
				<View style={styels.card_header}>
					<View style={styels.card_container}>
						<View>
							<AntDesign name="linkedin-square" size={24} color="black" style={styels.card_icon} />
						</View>
						<View>
							<View>
								<Text style={styels.card_header_text}>Add at least one link</Text>
							</View>
							<View>
								<Text style={styels.card_edit_text}>tap here to edit your profile</Text>
							</View>
						</View>
					</View>
                    <View style={styels.card_container}>
						<View>
                        <Ionicons name="ios-person-outline" size={24} color="black" style={styels.card_icon} />

						</View>
						<View>
							<View>
								<Text style={styels.card_header_text}>Add a profile picture</Text>
							</View>
							<View>
								<Text style={styels.card_edit_text}>tap here to add profile</Text>
							</View>
						</View>
					</View>
                    <View style={styels.card_container}>
						<View>
                        <Ionicons name="ios-person-outline" size={24} color="black" style={styels.card_icon} />

						</View>
						<View>
							<View>
								<Text style={styels.card_header_text}>Activate your Popl</Text>
							</View>
							<View>
								<Text style={styels.card_edit_text}>TO get the full experience</Text>
							</View>
						</View>
					</View>
                    <View style={styels.card_container}>
						<View>
                  
                        <MaterialIcons name="qr-code-scanner" size={24} color="black"  style={styels.card_icon}/>
						</View>
						<View>
							<View>
								<Text style={styels.card_header_text}>Add your AR to wallet</Text>
							</View>
							<View>
								<Text style={styels.card_edit_text}>For sharing to older devices</Text>
							</View>
						</View>
					</View>
                    <View style={styels.card_container}>
						<View>
                  
                        <MaterialIcons name="qr-code-scanner" size={24} color="black"  style={styels.card_icon}/>
						</View>
						<View>
							<View>
								<Text style={styels.card_header_text}>Perform  a pop!</Text>
							</View>
							<View>
								<Text style={styels.card_edit_text}>with your Popl or OR code</Text>
							</View>
						</View>
					</View>
                    <View style={styels.card_container}>
						<View>
                        <FontAwesome name="handshake-o" size={24} color="black"   style={styels.card_icon}/>
                       
						</View>
						<View>
							<View>
								<Text style={styels.card_header_text}>Add to your People</Text>
							</View>
							<View>
								<Text style={styels.card_edit_text}>Top 'Connect' on your profile</Text>
							</View>
						</View>
					</View>
                    <View style={styels.card_container}>
						<View>
                        <MaterialIcons name="graphic-eq" size={24} color="black"  style={styels.card_icon}/>
                       
                       
						</View>
						<View>
							<View>
								<Text style={styels.card_header_text}>Try Popl for free</Text>
							</View>
							<View>
								<Text style={styels.card_edit_text}>The next level of networking</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default CompleteProfile;
const styels = StyleSheet.create({
	profile_header: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: '800'
	},
	profile_croos_icon: {
		textAlign:'right',marginTop:20,marginRight:10
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
		paddingVertical: 10,
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
});
