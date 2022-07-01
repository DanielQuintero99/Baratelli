import React from 'react'
import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import styles from '../styles'
import { resultadosEcontrados } from '../store/actions/result.actions'
import Item from './Item'

const Buscador = () => {
  const dispatch= useDispatch()
  let submitSearch=()=>{
    console.warn(resultadosEcontrados)
    dispatch(resultadosEcontrados)
  }
  return (
    <>
    <View>
        <TextInput style={styles.buscador} placeholder="Que buscas?"></TextInput>
        <TouchableOpacity onPress={submitSearch}><Image source={ require('../sources/lupa.png') } style={ { width: 25, height: 25 } }/></TouchableOpacity>
    </View> 
    <Item resultadosEcontrados={resultadosEcontrados} ></Item>
    </>
    
  )
}

export default Buscador