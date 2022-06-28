import React, {useState} from 'react'
import {View } from 'react-native'
import styles from '../styles';
import Buscador from './Buscador';
import Header from './Header';
import Resultados from './Resultados';
import { SafeAreaView } from 'react-native';
import Item from './Item';

export default function HomeScreen ({navigation}) {
    
    const [user, setUser] = useState('Daniel');
  
    return (
        
        <View style={styles.container}>
            <Header user={user} />
            <Buscador/>
            <Resultados navigation={navigation}/>
        </View>
   
    )
}