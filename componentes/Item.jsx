import React,{useState} from 'react'
import { View,Text, FlatList, TouchableOpacity,TextInput,Image} from 'react-native'
import styles from '../styles';
import ItemWrapper from './ItemWrapper'
import { useSelector,useDispatch } from 'react-redux';
import { resultadosEcontrados } from '../store/actions/result.actions'


const Item = ({navigation}) => {
    const dispatch= useDispatch()
    let submitSearch=()=>{
        dispatch(resultadosEcontrados)
        setbusqueda(resultadosEcontrados.type)
    }
        const resultados = useSelector(state=>state.resultados.results)
        const numColumns = 2;
        const [busqueda, setbusqueda] = useState(resultados);

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
    <>
    <View style={styles.buscadorContainer}>
        <TextInput style={styles.buscador} placeholder="Que buscas? (prueba con celular, por ahora)"></TextInput>
        <TouchableOpacity style={styles.buscadorButton} onPress={submitSearch}><Image source={ require('../sources/lupa.png') } style={ { width: 25, height: 25 } } /></TouchableOpacity>
    </View>
    <FlatList
        style={styles.itemContainer}
        numColumns={numColumns}
        data={busqueda}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
    />
    </>
  )
}

export default Item