import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../HomeScreen';
import Login from '../Login'
import ItemDetail from '../ItemDetail';


const Stack=createNativeStackNavigator();
export default function Home () {

    return (
        <>
            <Stack.Navigator
            initialRouteName='Login'
            >
                <Stack.Screen 
                name='Login' 
                component={Login}
                options={{
                    headerShown:false
                }}

                />
                <Stack.Screen 
                name='HomeScreen' 
                component={HomeScreen}
                options={{
                    headerShown:false
                }}
                />

                <Stack.Screen 
                name='ItemDetail' 
                component={ItemDetail}
                options={{
                    headerShown:false
                }}
                />
            </Stack.Navigator>
        </>
    )
}