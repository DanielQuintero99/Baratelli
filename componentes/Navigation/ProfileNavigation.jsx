import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from '../Profile';


const Stack=createNativeStackNavigator();
export default function ProfileNavigation () {

    return (
        <>
            <Stack.Navigator
             initialRouteName='Profile'
            >
                <Stack.Screen 
                name='Profile' 
                component={Profile}
                options={{
                    headerShown:false
                }}
                />
            </Stack.Navigator>
        </>
    )
}