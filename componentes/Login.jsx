import React, { useState } from 'react'
import { Text,View,TouchableOpacity, ImageBackground } from 'react-native'
import styles from '../styles'
import CrearCuenta from './CrearCuenta';
import IniciarSesion from './IniciarSesion';

const imagen = require('../sources/logInBackground.jpg');

export default function Login ({navigation}) {
    
    const[showLogin,setShowLogin]=useState(false);
    const[showCreateAccount,setShowCreateAccount]=useState(false)

    let showLoginFunction=()=>{
        setShowLogin(!showLogin);
        showCreateAccount&&setShowCreateAccount(false)
    }
    let showcreateAccountFunction=()=>{
        setShowCreateAccount(!showCreateAccount);
        showLogin&&setShowLogin(false)
    }
    return (
        <View style={styles.containerLogIn} >
            <ImageBackground source={imagen} resizeMode="cover" imageStyle={{ opacity: 0.45 }} style={styles.backgroundImage}>
            <View style={styles.logWelcome} >
            <Text style={styles.welcomeTitle}>Más Economico </Text>
            <Text style={styles.welcomeTitle}>Más Ahorro </Text>
            <Text style={styles.welcomeTitle}>Más Baratelli </Text>
            </View>
            <Text style={styles.welcomeSubTitle} >Encuentra lo que buscas a un precio mas adsequible</Text>
                {
                showCreateAccount?<CrearCuenta navigation={navigation} />
                :
                <TouchableOpacity style={styles.logButton} onPress={showcreateAccountFunction}>
                    <Text style={styles.logButtonText} >Aun no tienes una cuenta?</Text>
                </TouchableOpacity>
                }
                {
                showLogin?<IniciarSesion navigation={navigation}/>
                :
                <TouchableOpacity style={styles.logButton} onPress={showLoginFunction}>
                    <Text style={styles.logButtonText} >Ya tienes una cuenta?</Text>
                </TouchableOpacity>
                }
            </ImageBackground>
        </View>
    )
}