import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Akun from '../pages/Akun';
import Shop from '../pages/Shop';
import Reels from '../pages/Reels';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const IconBottom = (props) => {
    const { color, focused } = props.data
    let colorSelected = focused ? color : 'grey'
    return (
      <View>
        <Image source={props.image} style={{ marginTop:14 ,width: 25, height: 25, tintColor: colorSelected }} />
      </View>
    )
  }

const MainApp = () => {
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: '#000000',}} screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} 
            options={{  
                title: "",
                tabBarIcon: (props) => (
                    <IconBottom data={props} image={require('../assets/image/home.png')} />
                )
            }}/>
            <Tab.Screen name="Search" component={Search} options={{
                title: "",
                tabBarIcon: (props) => (
                    <IconBottom data={props} image={require('../assets/image/search.png')} />
                )
            }}/>
            <Tab.Screen name="Reels" component={Reels} options={{
                title: "",
                tabBarIcon: (props) => (
                    <IconBottom data={props} image={require('../assets/image/more.png')} />
                )
            }}/>
            <Tab.Screen name="Shop" component={Shop} options={{
                title: "",
                tabBarIcon: (props) => (
                    <IconBottom data={props} image={require('../assets/image/video.png')} />
                )
            }}/>
            <Tab.Screen name="Akun" component={Akun} options={{
                title: "",
                tabBarIcon: (props) => (
                    <IconBottom data={props} image={require('../assets/image/image-page/foto.png')}  />
                )
            }}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="MainApp">
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false,}}/>
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
