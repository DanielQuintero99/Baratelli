import React from 'react'
import { Text, View,TouchableOpacity,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const IniciarSesion = ({navigation}) => {
  return (
    <View>
        <TextInput placeholder="Correo Electronico" />
        <TextInput placeholder="Contraseña" />
        <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
            <Text>
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