import React, {useState} from 'react'
import {View } from 'react-native'
import styles from '../styles';
import Buscador from './Buscador';
import Header from './Header';
import Resultados from './Resultados';

export default function HomeScreen () {
    const [user, setUser] = useState('Daniel');

    return (
        <View style={styles.container}>
            <Header user={user} />
            <Buscador/>
            <Resultados/>
        </View>
    )
}