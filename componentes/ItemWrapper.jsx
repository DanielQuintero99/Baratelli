import React from 'react'
import { View } from 'react-native'
import styles from '../styles'

const ItemWrapper = ({style,children}) => {
  return (
    <View style ={{...styles.wrapperContainer, ...style}}>{children}</View>
  )
}

export default ItemWrapper