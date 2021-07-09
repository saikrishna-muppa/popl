import React,{useEffect,useState} from 'react'
import { View, Text, StyleSheet,ScrollView ,Button} from 'react-native'
import AddLink from './AddLink'
import DirectOff from './DirectOff'
import Editprofile from './Editprofile'
import HelpCenter from './HelpCenter'
import Profile from './Profile'
import Username from './Username';
// import Parse from "parse/react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

const Body = () => {
    const [users,setUsers]=useState([]);
    const [email, setEmail] = useState('');
    useEffect(async () => {
		const userlogin = await AsyncStorage.getItem('users');
        
		console.log(userlogin, 'body');
		var data = JSON.parse(userlogin);
		setUsers(data);
	}, []);

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

    console.log(users.email,"users")
    console.log(users,"plainusers")
    console.log(users.map((user)=>{user.id}),"user")
    console.log(users.map((user)=>{user.email}),"user")
    // let obj = users.find(o => o.email === o.email);
    console.log(users.find(o => o.email),'obj')


    return (
        <ScrollView>
            <Profile />
            <View >
        {email !== '' && <Text>{`Hello ${email}!`}</Text>}
      </View>
            <View style={styles.profile_edit_container}>
                <Editprofile    />
                <DirectOff />
              
            </View>
            <Text style={styles.desc_para}  >Your Popl opens to personal profile   </Text>
            <AddLink/>
            <HelpCenter/>
        </ScrollView>
    )
}

export default Body

const styles = StyleSheet.create({
    profile_edit_container: {
        display: "flex",
        flexDirection: 'row',
        maxWidth: "100%",
        justifyContent: 'space-evenly',
    },
    profile_edit:{
        fontSize:24,
        backgroundColor:"#9e9e9e57"
    },
    desc_para:{
        marginTop:10,
      textAlign:'center',
      fontSize:16
    }

})
