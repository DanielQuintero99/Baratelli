import React, {useState} from 'react'
import { Text,View } from 'react-native'
import Buscador from './Buscador';
import Header from './Header';
import Resultados from './Resultados';

export default function HomeScreen () {
    const [user, setUser] = useState('Daniel');

    return (
        <View>
            <Header user={user} />
            <Buscador/>
            <Resultados/>
        </View>
    )
}