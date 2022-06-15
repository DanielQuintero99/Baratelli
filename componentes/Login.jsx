import React from 'react'
import { Text,View,TouchableOpacity, ImageBackground } from 'react-native'
import styles from '../styles'

const imagen = require('../sources/logInBackground.jpg');
export default function Login ({handleLogin}) {

    return (
        <View style={styles.containerLogIn} >
            <ImageBackground source={imagen} resizeMode="cover" imageStyle={{ opacity: 0.45 }} style={styles.backgroundImage}>
            <View style={styles.logWelcome} >
            <Text style={styles.welcomeTitle}>Más Economico </Text>
            <Text style={styles.welcomeTitle}>Más Ahorro </Text>
            <Text style={styles.welcomeTitle}>Más Baratelli </Text>
            </View>
            <Text style={styles.welcomeSubTitle} >Encuentra lo que buscas a un precio mas adsequible</Text>
                <TouchableOpacity style={styles.logButton} onPress={handleLogin}>
                    <Text style={styles.logButtonText} >Entrar</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}