import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import MainNavigation from "./MainNavigation"

export default AppNavigator=()=>{
    return(
        <NavigationContainer>
            <MainNavigation/>
        </NavigationContainer>
    )
}