import React from 'react'
import { View,Text, TextInput } from 'react-native'
import styles from '../styles'

const Buscador = () => {
  return (
    <View>
        <TextInput style={styles.buscador} placeholder="Que buscas?" />
    </View>
  )
}

export default Buscador