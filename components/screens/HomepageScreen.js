
import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import Body from '../body/Body'
import HeaderPage from '../headerpage/HeaderPage'


const HomepageScreen = () => {
   
    return (
        <View>
           <HeaderPage  />
			
			<ScrollView>
				<Body />
			</ScrollView>
        </View>
    )
}

export default HomepageScreen
