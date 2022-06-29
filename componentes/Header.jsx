import React from 'react'
import { View,Text, SafeAreaView } from 'react-native'
import styles from '../styles'
import IonicIcons  from '@expo/vector-icons/Ionicons';

const Header = ({user}) => {
  return (
    <SafeAreaView>
    <View style={styles.headerContainer} >
        <Text>Logo</Text>
        <IonicIcons name="notifications-outline" size={24} color="black" />
    </View>
        <Text style={styles.headerText} >Bienvenido, {user}</Text>
    </SafeAreaView>
  )
}

export default Header