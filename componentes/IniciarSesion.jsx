import React from 'react'
import { Text, View,TouchableOpacity,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

const IniciarSesion = ({navigation}) => {
  return (
    <View>
        <TextInput placeholder="Correo Electronico" />
        <TextInput placeholder="Contraseña" />
        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('HomeScreen')}>
            <Text style={styles.whiteText}>
                Iniciar Sesion
            </Text>
        </TouchableOpacity>
        <Text>Continuar con tu cuente Google</Text>
        <TouchableOpacity>
        <Icon name="google" size={30} color="#fff" />
        </TouchableOpacity>
    </View>
  )
}

export default IniciarSesion