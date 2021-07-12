import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import BuyPopl from './BuyPopl';
import CompleteProfile from './CompleteProfile';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomepageScreen from '../screens/HomepageScreen';
import ScanScreen from '../screens/ScanScreen';
import GraphScreen from '../screens/GraphScreen';
import { Ionicons } from '@expo/vector-icons';
import QrCodeScreen from '../screens/QrCodeScreen';
import ProfileScreen from '../screens/ProfileScreen';


const BuyPoplStack = createStackNavigator();
const CompleteProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
// const BuyPoplStackScreen = ({ navigation }) => {
// 	<BuyPoplStack.Navigator
// 		screenOptions={{
// 			headerStyle: {
// 				backgroundColor: '#009387'
// 			},
// 			headerTintColor: '#fff',
// 			// headerTitleStyle: {
// 			// 	fontWeight: '700'
// 			// }
// 		}}
// 	>
// 		<BuyPoplStack.Screen
// 			name="buy"
// 			component={BuyPopl}
// 			options={{ title: 'buy', headerLeft: () => <SimpleLineIcons name="menu" size={24} color="black" /> }}
// 		/>
// 	</BuyPoplStack.Navigator>;
// };
const MainTab = ({ navigation }) => {
	return (
		<Tab.Navigator style={styels.tab_navigator} initialRouteName="homescreen" activeColor="black" barStyle={{ backgroundColor: '#fff',shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.00,
		
		elevation: 24, }}>
			<Tab.Screen
				name="homescreen"
				component={HomepageScreen}
				options={{
					tabBarIcon: ({ color }) => <MaterialIcons name="person" style={styels.icon_size} size={24} color={color} />
				}}
			/>
			<Tab.Screen
				name="scanscreen"
				component={ScanScreen}
				options={{
					tabBarIcon: ({ color }) => 
					<Ionicons name="analytics-outline" style={styels.icon_size} size={24}   />
					
				}}
			/>
			<Tab.Screen
				name="graphscreen"
				component={GraphScreen}
				options={{
					tabBarIcon: ({ color }) => <MaterialIcons name="grain" style={styels.icon_size} size={24} color={color} />
				}}
			/>
			<Tab.Screen
				name="qrcodescreen"
				component={QrCodeScreen}
				options={{
					tabBarIcon: ({ color }) => <MaterialIcons name="qr-code-scanner" style={styels.icon_size} size={24} color={color} />
				}}
			/>
			<Tab.Screen
				name="profilescreen"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color }) => <MaterialIcons name="groups" style={styels.icon_size} size={24} color={color} />
				}}
			/>
		</Tab.Navigator>
	);
};

export default MainTab;
const styels = StyleSheet.create({
	header_page: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#9e9e9e17',
		paddingVertical: 10,
		marginLeft: 5,
		marginRight: 5
	},
	popl_name: {
		fontSize: 36
	},
    icon_size:{
        height:100
    },
	
});
