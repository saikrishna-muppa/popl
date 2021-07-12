import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Body from '../body/Body';
import HeaderPage from '../headerpage/HeaderPage';
import BuyPopl from '../tabs/BuyPopl';
import CompleteProfile from '../tabs/CompleteProfile';
import GoPro from '../tabs/GoPro';
import How_To_Pop from '../tabs/How_To_Pop';
import Logout from '../tabs/Logout';
import QrCode from '../tabs/QrCode';
import Set_up_Popl from '../tabs/Set_up_Popl';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../Welcome';
import QrCodeScreen from './QrCodeScreen';
const Drawer = createDrawerNavigator();
const HomepageScreen = ({navigation}) => {
	return (
		<Drawer.Navigator initialRouteName="body">
      
			<Drawer.Screen
				name="Home"
				component={Body}
				options={{
					drawerIcon: ({ focused, size }) => (
						<Ionicons name="md-home" size={size} color={focused ? 'black' : 'black'} />
					)
				}}
			/>
			<Drawer.Screen
				name="Set up Popl"
				component={Set_up_Popl}
				options={{
					drawerIcon: ({ focused, size }) => (
					
            <FontAwesome name="power-off" size={size} color={focused ? '#7cc' : 'black'}  />
					)
				}}
			/>
			<Drawer.Screen
				name="complete profile"
				component={CompleteProfile}
				options={{
					drawerIcon: ({ focused, size }) => (
						<FontAwesome name="list" size={24} color="black" size={size} color={focused ? '#7cc' : 'black'}  />
          
					)
				}}
			/>
			<Drawer.Screen
				name="My QR Code"
				component={QrCodeScreen}
				options={{
					drawerIcon: ({ focused, size }) => (
          
						<Ionicons name="ios-qr-code" size={size} color={focused ? '#7cc' : 'black'} />
					)
				}}
			/>
			<Drawer.Screen
				name="Buy a Popl"
				component={BuyPopl}
				options={{
					drawerIcon: ({ focused, size }) => (

           <SimpleLineIcons name="handbag" size={size} color={focused ? '#7cc' : 'black'} />
					)
				}}
			/>
			<Drawer.Screen
				name="Go Pro"
				component={GoPro}
				options={{
					drawerIcon: ({ focused, size }) => (
						<Ionicons name="flash-outline" size={size} color={focused ? '#7cc' : 'black'} />
					)
				}}
			/>
			<Drawer.Screen
				name="How to pop"
				component={How_To_Pop}
				options={{
					drawerIcon: ({ focused, size }) => (
            <FontAwesome name="question-circle-o" size={size} color={focused ? '#7cc' : 'black'} />
					)
				}}
			/>
			<Drawer.Screen
				name="Log out"
				component={Welcome}
				options={{
					drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="logout" size={size} color={focused ? '#7cc' : 'black'}  onPress={()=>navigation.navigate("welcome")}/>
						
					)
				}}
			/>
		</Drawer.Navigator>
		// <View>
		/* <HeaderPage /> */

		/* <ScrollView>
				<Body />
			</ScrollView> */
		/* </View> */
	);
};

export default HomepageScreen;
