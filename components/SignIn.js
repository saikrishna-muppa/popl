import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignIn = ({ navigation }) => {
	const [ users, setUsers ] = useState([]);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	// const[isLogged,setIsLogged]=useState(false);
	useEffect(async () => {
		const userlogin = await AsyncStorage.getItem('users');
		console.log(userlogin, 'userlogin');
		var data = JSON.parse(userlogin);
		setUsers(data);
	}, []);

	const emailChangeHandler = (e) => {
		// let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

		setEmail(e);
	};
	const passwordChangeHandler = (e) => {
		setPassword(e);
	};
		// const userDetails=()=>{
		// 	var obj=[...users];
		// 	obj.find((i)=> (
		// 		<Text>{i.id}</Text>
		// 	))

		// }
	
		
	const signInHandler = () => {
	

		if (email === '' || password === '') {
			alert("please be fileds correct details don't provided empty fileds");
		} else if (
			users !== null &&
			users.length > 0 &&
			users.some((user) => user.email === email && user.password === password )
		) {
			navigation.navigate('Home');
		} else {
			alert('please enter correct details');
		}
	};

	return (
		<View style={styles.singup_header}>
			<View style={styles.signup_container}>
				<Text style={styles.singup_title}>popl</Text>
				<Text style={styles.header}>Sign in with</Text>
				<View style={styles.icons_set}>
					<AntDesign name="apple1" size={24} color="black" />
					<AntDesign style={styles.icons} name="google" size={24} color="black" />
					<AntDesign style={styles.icons} name="facebook-square" size={24} color="black" />
				</View>
				
				<Text style={styles.or_text}>OR</Text>
				<Text style={styles.input_text_headers}>Input your email and password</Text>

				<TextInput
					style={styles.input_fileds}
					placeholder="email"
					value={email}
					onChangeText={emailChangeHandler}
				/>
				<TextInput
					style={styles.input_fileds}
					placeholder="password"
					value={password}
					onChangeText={passwordChangeHandler}
				/>
				<TouchableOpacity style={styles.signup_btn}>
					<Text style={styles.signup_btn_text} onPress={signInHandler}>
						Log in
					</Text>
				</TouchableOpacity>
				<Text style={styles.forgot_password} onPress={() => navigation.navigate('forgotpassword')}>
					{' '}
					Forgot password?{' '}
				</Text>
				<Text style={styles.forgot_password} onPress={() => navigation.navigate('Home')}>
					Goto homepage{' '}
				</Text>
			</View>
		</View>
	);
};

export default SignIn;
const styles = StyleSheet.create({
	singup_header: {
		backgroundColor: '#9e9e9e25',
		marginTop: 60
	},
	signup_container: {
		display: 'flex',
		alignSelf: 'center',
		width: 250
	},
	singup_title: {
		textAlign: 'center',
		fontSize: 46
	},
	header: {
		textAlign: 'center',
		fontSize: 20,
		marginTop: 20
	},
	icons_set: {
		display: 'flex',
		flexDirection: 'row',
		// alignSelf:'center',
		justifyContent: 'space-evenly',
		marginTop: 20
	},
	icons: {
		backgroundColor: 'black',
		color: 'white'
	},
	or_text: {
		textAlign: 'center',
		fontSize: 18,
		marginTop: 20,
		fontWeight: '500'
	},

	input_text_headers: {
		textAlign: 'center'
	},
	input_fileds: {
		height: 60,
		margin: 8,
		marginLeft: -20,
		width: 300,
		borderWidth: 1,
		borderRadius: 4,
		backgroundColor: 'white',
		paddingLeft: 20
		// textAlign:'center'
	},
	signup_btn: {
		backgroundColor: '#393937',
		color: 'white',
		paddingHorizontal: 12,
		paddingVertical: 16,
		borderRadius: 8,
		marginTop: 30
	},
	signup_btn_text: {
		textAlign: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: '700'
	},
	forgot_password: {
		width: 400,
		textAlign: 'center',
		marginLeft: -70,
		marginTop: 30,
		fontWeight: '600',
		fontSize: 20
	}
});
