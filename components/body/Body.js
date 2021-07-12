import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import AddLink from './AddLink';
import DirectOff from './DirectOff';
import Editprofile from './Editprofile';
import HelpCenter from './HelpCenter';
import Profile from './Profile';
import Username from './Username';
import { Ionicons } from '@expo/vector-icons';
// import Parse from "parse/react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
const Body = ({ navigation }) => {
	// const [users,setUsers]=useState([]);
	// const [email, setEmail] = useState('');
	// useEffect(async () => {
	// 	const userlogin = await AsyncStorage.getItem('users');

	// 	console.log(userlogin, 'body');
	// 	var data = JSON.parse(userlogin);
	// 	setUsers(data);
	// }, []);

	// useEffect(() => {
	//     // Since the async method Parse.User.currentAsync is needed to
	//     // retrieve the current user data, you need to declare an async
	//     // function here and call it afterwards
	//     async function getCurrentUser() {
	//       // This condition ensures that username is updated only if needed
	//       if (email === '') {
	//         const currentUser = await Parse.User.currentAsync();
	//         if (currentUser !== null) {
	//           setUsername(currentUser.getUsername());
	//         }
	//       }
	//     }
	//     getCurrentUser();
	//   }, [email]);
	// useEffect(() => {

	//     var userlogin =  AsyncStorage.getItem('users');
	//     console.log(userlogin,'userlogin')
	//     async function getCurrentUser() {
	//       // This condition ensures that username is updated only if needed
	//       if (email === '') {
	//         const currentUser = await Parse.userlogin.currentAsync();
	//         if (currentUser !== null) {
	//             const data=currentUser.getUsername()
	//             console.log(data,'data')
	//           setUsers(data);
	//         }
	//       }
	//     }
	//     getCurrentUser();
	//   }, [email]);

	// console.log(users.email,"users")
	// console.log(users,"plainusers")
	// console.log(users.map((user)=>{user.id}),"user")
	// console.log(users.map((user)=>{user.email}),"user")
	// // let obj = users.find(o => o.email === o.email);
	// console.log(users.find(o => o.email),'obj')

	return (
		<ScrollView>
			{/* <Profile /> */}
			<View>
				<View style={styles.header_page}>
				 <SimpleLineIcons name="menu" size={32} color="black"  onPress={() => navigation.openDrawer()}/>
				 <Text style={styles.popl_name}>Popl</Text>
					 <Fontisto name="share-a" size={32} color="black" />
					
				</View>
				
				<Ionicons style={styles.proifle_image} name="person-outline" size={210} color="black" />
			</View>
			<View style={styles.profile_edit_container}>
				<Editprofile />
				<DirectOff />
			</View>
			<Text style={styles.desc_para}>Your Popl opens to personal profile </Text>
			<AddLink />
			<HelpCenter />
		</ScrollView>
	);
};

export default Body;

const styles = StyleSheet.create({
    header_page: {
        marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#9e9e9e17',
		paddingVertical: 10,
		marginLeft: 5,
		marginRight: 5
	},
	popl_name: {
		fontSize: 38,
		fontWeight:'700'
	},
	menu: {
		marginTop: 50
	},
	proifle_image: {
		display: 'flex',
		paddingHorizontal: 100,
		paddingVertical: 40,
		// backgroundColor:"yellow",
		alignSelf: 'center'
	},
	profile_edit_container: {
		display: 'flex',
		flexDirection: 'row',
		maxWidth: '100%',
		justifyContent: 'space-evenly'
	},
	profile_edit: {
		fontSize: 24,
		backgroundColor: '#9e9e9e57'
	},
	desc_para: {
		marginTop: 10,
		textAlign: 'center',
		fontSize: 16
	}
});
