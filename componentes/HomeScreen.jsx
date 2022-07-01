import React, {useState} from 'react'
import {View } from 'react-native'
import styles from '../styles';
import Header from './Header';
import Item from './Item';


export default function HomeScreen ({navigation}) {    
    return ( 
        <View style={styles.container}>
            <Header/>
            <Item navigation={navigation}/>
        </View>
    )
}