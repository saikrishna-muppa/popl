// import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import { StyleSheet,View,Text,Button } from 'react-native';
import Singup from './Singup';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import Forgot_password from './components/Forgot_password';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FooterPage from './components/footer/FooterPage';
import MainTab from './components/tabs/MainTab';
import Homepage from './HomePage';
import HeaderPage from './components/headerpage/HeaderPage';
import { SimpleLineIcons } from '@expo/vector-icons';
import HomepageScreen from './components/screens/HomepageScreen';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
          <NavigationContainer >
          {/* <Drawer.Navigator initialRouteName="welcome">
            <Drawer.Screen name="welcome" component={Welcome}/>
            <Drawer.Screen name="singup" component={Singup}/>
            <Drawer.Screen  name="Home" component={HomePage}/>
            <Drawer.Screen  name="login" component={SignIn} />
            
          </Drawer.Navigator> */}
    <Stack.Navigator style={styles.container} screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="welcome" component={Welcome} />
      {/* <Stack.Screen name="signup" component={Singup} /> */}
      {/* <Stack.Screen name="Home" component={MainTab}  /> */}
      {/* <Stack.Screen name="login" component={SignIn} /> */}
      {/* <Stack.Screen name ="forgotpassword" component={Forgot_password}/> */}
    </Stack.Navigator>
  </NavigationContainer>
  

  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'red',
    margin:80
  },
});
