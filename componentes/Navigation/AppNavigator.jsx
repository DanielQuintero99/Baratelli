import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import MainNavigation from "./MainNavigation"
import TabNavigator from "./TabNavigator";

export default AppNavigator=()=>{
    return(
            <NavigationContainer>
                <TabNavigator/>
            </NavigationContainer>
    )
}