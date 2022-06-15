import React from 'react'
import { View,Text, SafeAreaView } from 'react-native'
import styles from '../styles'

const Header = ({user}) => {
  return (
    <SafeAreaView>
    <View style={styles.headerContainer} >
        <Text>Logo</Text>
        <Text>Not</Text>
    </View>
        <Text style={styles.headerText} >Bienvenido, {user}</Text>
    </SafeAreaView>
  )
}

export default Header