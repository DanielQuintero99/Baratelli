import React from 'react'
import { View,Text, SafeAreaView } from 'react-native'
import styles from '../styles'
import IonicIcons  from '@expo/vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(state=>state.user.usuario.nombre);
  let nombre =user.split(" ")
  
   return (
    <SafeAreaView>
    <View style={styles.headerContainer} >
        <Text>Logo</Text>
        <IonicIcons name="notifications-outline" size={24} color="black" />
    </View>
        <Text style={styles.headerText} >Bienvenido, {nombre[0]}</Text>
    </SafeAreaView>
  )
}

export default Header