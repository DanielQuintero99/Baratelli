import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favoritos from '../Favoritos';


const Stack=createNativeStackNavigator();
export default function FavoritosNavigation () {

    return (
        <>
            <Stack.Navigator
             initialRouteName='Favoritos'
            >
                <Stack.Screen 
                name='Favoritos' 
                component={Favoritos}
                options={{
                    headerShown:false
                }}
                />
            </Stack.Navigator>
        </>
    )
}