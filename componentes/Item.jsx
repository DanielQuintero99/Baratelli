import React from 'react'
import { View,Text, FlatList, TouchableOpacity} from 'react-native'
import styles from '../styles';
import ItemWrapper from './ItemWrapper'
import { useSelector } from 'react-redux';

const Item = ({navigation}) => {
        const resultados = useSelector(state=>state.resultados.results)
        const numColumns = 2;
        console.warn(resultados)
        const oneItem=(item)=>{navigation.navigate('ItemDetail',{
            id:item.id,
            nombre:item.nombre,
            precio:item.precio,
            imagen:item.imagen,
            descripcion:item.descripcion
        })}
    const renderItem = ({item}) => {
        return(
            <ItemWrapper>
                <View style={styles.cardItems}>
                <Text style={styles.cardTitle}>{item.nombre}</Text>
                <Text style={styles.cardText}>{item.precio}</Text>
                <Text style={styles.cardText}>{item.imagen}</Text>
                <Text style={styles.cardText}>{item.descripcion}</Text>
                <TouchableOpacity onPress={()=>oneItem(item)}>
                    <Text>
                        Mas Detalles
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>
                        Ir a la tienda
                    </Text>
                </TouchableOpacity>
                </View>
            </ItemWrapper>
        )
    }

  return (
  
    <FlatList
        style={styles.itemContainer}
        numColumns={numColumns}
        data={resultados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Item