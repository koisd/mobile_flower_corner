import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Event from '../screens/Event'
import Period from '../screens/Period'
import Camera from '../screens/Camera'
import Camera2 from '../screens/Camera2'
import Shop from '../screens/Shop'
import {Image} from 'react-native'

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions ={{
                headerShown: false,
                style:{
                    height:65,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"#eff4f0",
                    elevation:2,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/24.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Camera"
                component={Camera}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/21.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Event"
                component={Event}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/22.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Period"
                component={Period}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/star.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Shop" component={Shop}/>
            <Stack.Screen name="Camera2" component={Camera2}/>
        </Stack.Navigator>
    )
}



export default HomeStackNavigator;