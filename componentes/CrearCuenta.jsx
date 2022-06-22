import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';
const CrearCuenta = ({navigation}) => {
    
  return (
    <View> 
        <TextInput placeholder="Correo Electronico" />
        <TextInput placeholder="Contraseña" />
        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('HomeScreen')}>
            <Text style={styles.whiteText}>
                Continuar
            </Text>
        </TouchableOpacity>
        <Text>Continuar con tu cuente Google</Text>
        <TouchableOpacity>
        <Icon name="google" size={30} color="#fff" />
        </TouchableOpacity>
    </View>
  )
}

export default CrearCuenta