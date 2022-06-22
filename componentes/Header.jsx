import React from 'react'
import { View,Text, SafeAreaView } from 'react-native'
import styles from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({user}) => {
  return (
    <SafeAreaView>
    <View style={styles.headerContainer} >
        <Text>Logo</Text>
        <Icon name='bell' size={30} color="#000"></Icon>
    </View>
        <Text style={styles.headerText} >Bienvenido, {user}</Text>
    </SafeAreaView>
  )
}

export default Header