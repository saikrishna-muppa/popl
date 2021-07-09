import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Singup = ({ navigation }) => {
	const [ authemail, setAuthEmail ] = useState('');
	const [ authpasword, setAuthPasseword ] = useState('');
	const [ isLogged, setIsLogged ] = useState(false);
	
	const [ users, setUsers ] = useState([]);
    const [data,setData]=useState({
        emailIsValid:true,
        passwordIsValid:true
    })
	useEffect(async () => {
		var userlogin = await AsyncStorage.getItem('users');
		if (userlogin !== null) {
			console.log(userlogin, 'userlogin,signup');
			setUsers(JSON.parse(userlogin));
		} else {
			setUsers([]);
		}
	}, []);
	const emailChangeHandler = (e) => {
		console.log(e);
		setAuthEmail(e);
	};
	const passwordChangeHandler = (e) => {
		console.log(e);
		setAuthPasseword(e);
	};

	const handleValidEmail = (val) => {
		if (val.trim().length >= 2) {
		
			setData({
                ...data,
                emailIsValid:true

            });
		} else {
			setData({
               data,
                emailIsValid:false

            });
		}
	};
	const signUpClickHandlerUser = () => {
		users.push({
			email: authemail,
			password: authpasword,
			isLogged: isLogged,
			id: Math.random() * 100000000000000000,
			validMail: data
		});
		if (authemail === '' || authpasword === '') {
			alert('please be enter fileds corret details');
		} else {
			setUsers(users);
			console.log(users);
			AsyncStorage.setItem('users', JSON.stringify(users));
			navigation.navigate('login');
		}
	};

	const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>;
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
					value={authemail}
					onChangeText={emailChangeHandler}
					onEndEditing={(e) => handleValidEmail(e.nativeEvent.text)}
				/>
				{data.emailIsValid ? null : (
					<Animatable.View animation="fadeInLeft" duration={500}>
						<Text style={styles.errormsg}>Email must be contains @</Text>
					</Animatable.View>
				)}
				<TextInput
					style={styles.input_fileds}
					placeholder="password"
					value={authpasword}
					onChangeText={passwordChangeHandler}
				/>
				{data.passwordIsValid ? null : (
					<Animatable.View animation="fadeinLeft" duration={500}>
						<Text style={styles.errormsg}>Password must be contains minimum length 6</Text>
					</Animatable.View>
				)}
				<TouchableOpacity style={styles.signup_btn}>
					<Text style={styles.signup_btn_text} onPress={signUpClickHandlerUser}>
						Signup
					</Text>
				</TouchableOpacity>
				<Text style={styles.terms_text}>
					By registering you agree to our <B>Terms</B> and <B>Privacy Policy</B>{' '}
				</Text>
			</View>
		</View>
	);
};

export default Singup;
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
	terms_text: {
		width: 400,
		textAlign: 'center',
		marginLeft: -70,
		marginTop: 30,
		fontWeight: '600'
	},
	errormsg: {
		color: 'red'
	}
});
