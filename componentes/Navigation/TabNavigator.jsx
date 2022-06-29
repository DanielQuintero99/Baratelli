import React from 'react'
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FavoritosNavigation from './FavoritosNavigation';
import MainNavigation from './MainNavigation'
import ProfileNavigation from './ProfileNavigation';
import IonicIcons  from '@expo/vector-icons/Ionicons';
import tema from "../constantes/tema";


const BottomTabs=createBottomTabNavigator()
const LabelButtonTab=(focused,label)=>(
  <Text
  style={{
    color:focused ? tema.color.secondary:tema.color.textColorSecondary,
    fontFamily: focused? tema.fontFamily.primary:tema.fontFamily.secondary,
    fontSize:10
  }}
  >{label}</Text>
)
const TabNavigator = () => {
 
  return (
    <BottomTabs.Navigator
    initialRouteName='homeTab'
    >
      <BottomTabs.Screen 
      name='HomeTab'
      component={MainNavigation}
      options={{
        tabBarLabel:({focused})=>LabelButtonTab(focused,'Home'),
        headerShown:false,
        tabBarIcon:({focused})=>(
          <IonicIcons 
          name={ focused ? 'home':'home-outline'}
          size={20}
          color={focused? tema.color.secondary:tema.color.textColorSecondary }
          />
  )
      }}
      />
      <BottomTabs.Screen
      name='FavoritosTab'
      component={FavoritosNavigation}
      options={{
        headerShown:false,
        tabBarLabel:({focused})=>LabelButtonTab(focused,'Favoritos'),
        tabBarIcon:({focused})=>(
          <IonicIcons 
          name={ focused ? 'heart':'heart-outline'}
          size={20}
          color={focused? tema.color.secondary:tema.color.textColorSecondary }
          />
  )
      }}
      />
            <BottomTabs.Screen
      name='ProfileTab'
      component={ProfileNavigation}
      options={{
        headerShown:false,
        tabBarLabel:({focused})=>LabelButtonTab(focused,'Perfil'),
        tabBarIcon:({focused})=>(
          <IonicIcons 
          name={ focused ? 'person':'person-outline'}
          size={20}
          color={focused? tema.color.secondary:tema.color.textColorSecondary }
          />
  )
      }}
      />
    </BottomTabs.Navigator>
  )
}

export default TabNavigator