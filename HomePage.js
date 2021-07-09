import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import Body from './components/body/Body';
import FooterPage from './components/footer/FooterPage';
import HeaderPage from './components/headerpage/HeaderPage';
import MainTab from './components/tabs/MainTab';
import { SimpleLineIcons } from '@expo/vector-icons';

const Homepage = ({ navigation }) => {
	return (
		<View style={styles.homepage_container}>
			{/* <HeaderPage      />
			
			<ScrollView>
				<Body />
			</ScrollView> */}
			{/* <FooterPage /> */}
			{/* <MainTab/> */}
		</View>
	);
};

export default Homepage;
const styles = StyleSheet.create({
	homepage_container: {
		// overflow: 'scroll'
	}
});
