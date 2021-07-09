import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Welcome = ({navigation}) => {
    return (
        <View style={styels.welcome_container}>
            <View style={styels.avatar} ><Text style={styels.avatar_text} >PoPl</Text></View>
            <Text style={styels.welcome_text}>Welcome to Popl</Text>
            <Text style={styels.welcome_text_share}>Instantly share anything <Text style={styels.welcome_text_tm}>TM</Text></Text>
            <TouchableOpacity style={styels.setup_btn}><Text style={styels.setup_btn_text}  onPress={() => navigation.navigate('signup')} >Set up your Popl</Text></TouchableOpacity>
            <TouchableOpacity style={styels.buy_popl}><Text style={styels.buy_popl_text}  >Buy a Popl</Text></TouchableOpacity>
            <Text style={styels.singin}>Already have Popl? <Text style={styels.singin_text} onPress={() => navigation.navigate('login')}>Sing in</Text></Text>
        </View>


    )
}

export default Welcome
const styels = StyleSheet.create({
    welcome_container: {
        display: 'flex',
        alignSelf: 'center',
        marginLeft: 25
    },
    avatar: {
        backgroundColor: 'black',

        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 80,
        marginLeft: 40
    },
    avatar_text: {
        textAlign: 'center',
        marginTop: 50,
        color: 'white',
        fontSize: 34,
        fontWeight: '700',
        width: 150,
        height: 150,

    },
    welcome_text: {
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 35
    },
    welcome_text_share: {
        color: '#9e9e9e',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10
    },
    welcome_text_tm: {
        color: '#03a9f4',
        fontWeight: '600',
        fontSize: 18,
    },
    setup_btn: {
        backgroundColor: 'black',
        width: 250,
        height: 60,
        borderRadius: 8,
        marginTop: 30

    }, setup_btn_text: {
        color: 'white',
        fontWeight: '700',
        textAlign: "center",
        marginTop: 15,
        fontSize: 20



    },
    buy_popl: {
        backgroundColor: 'white',
        width: 250,
        height: 60,
        borderRadius: 8,
        marginTop: 40,    
        // boxshowdow css
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,


    },
    buy_popl_text: {
        color: 'black',
        fontWeight: '700',
        textAlign: "center",
        marginTop: 15,
        fontSize:20
    },
    singin: {
        color: '#9e9e9e',
        marginTop: 80,
        textAlign:'center',
        fontSize:18
    },
    singin_text: {
        color: 'black',
        fontWeight: '700'
    }
})
