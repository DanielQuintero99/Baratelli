import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import MainNavigation from "./MainNavigation"

export default AppNavigator=()=>{
    return(
            <NavigationContainer>
                <MainNavigation/>
            </NavigationContainer>
    )
}