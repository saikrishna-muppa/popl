import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Body from '../body/Body';
import Forgot_password from '../Forgot_password';
import Welcome from '../Welcome';


const FooterPage = () => {
	return (
		<View style={styels.footer}>
			{/* <MaterialIcons name="person" size={40} color="black" />

			<MaterialIcons name="keyboard-arrow-right" size={40} color="black" />
			<MaterialIcons name="grain" size={40} color="black" />
			<MaterialIcons name="qr-code-scanner" size={40} color="black" />
			<MaterialIcons name="groups" size={40} color="black" /> */}
		</View>
	);
};

export default FooterPage;
const styels = StyleSheet.create({
	// icon_bar: {

	//     display: "flex",
	//     flexDirection: "row",
	//    justifyContent:'space-evenly',
	//     backgroundColor: "#9e9e9e17",
	// },

	// footer_page: {
	// 	shadowColor: '#000',
	// 	shadowOffset: {
	// 		width: 0,
	// 		height: 1
	// 	},
	// 	shadowOpacity: 0.2,
	// 	shadowRadius: 1.41,

	// 	elevation: 2
	// }
});
