import React from 'react'
import { Text } from 'react-native';
import styles from '../styles';
import Item from './Item';

const Resultados = ({navigation}) => {
    
  return (
    <>
    <Text style={styles.resultadosTittle}>Resultados 🔥</Text>
    <Item navigation={navigation}/>
    </>
    
  )
}

export default Resultados