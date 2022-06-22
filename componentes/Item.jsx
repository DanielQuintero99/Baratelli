import React,{useState} from 'react'
import { View,Text, FlatList, ScrollView } from 'react-native'
import styles from '../styles';
import ItemWrapper from './ItemWrapper'

const Item = () => {
    const [data, setData] = useState([
        {
            id:1,
            nombre:'Celular Samsung',
            precio:20000,
            imagen:'https://www.celularesytelefonos.com/wcsstore/GlobalSolutions/images/catalog/Samsung/Galaxy-S10-Plus-64GB-Neg',
            descripcion:'Celular Samsung Galaxy S10 Plus 64GB'
        },{
            id:2,
            nombre:'Celular Apple',
            precio:30000,
            imagen:'https://www.celularesytelefonos.com/wcsstore/GlobalSolutions/images/catalog/Apple/iPhone-11-Pro-Max-256GB-Neg',
            descripcion:'Celular Apple iPhone 11 Pro Max 256GB'
        },{
            id:3,
            nombre:'Celular Google',
            precio:40000,
            imagen:'https://www.celularesytelefonos.com/wcsstore/GlobalSolutions/images/catalog/Google/Pixel-3-XL-128GB-Neg',
            descripcion:'Celular Google Pixel 3 XL 128GB'
        },{
            id:4,
            nombre:'Celular OnePlus',
            precio:50000,
            imagen:'https://www.celularesytelefonos.com/wcsstore/GlobalSolutions/images/catalog/OnePlus/OnePlus-7-Pro-256GB-Neg',
            descripcion:'Celular OnePlus 7 Pro 256GB'
        },{
            id:5,
            nombre:'Celular Nokia',
            precio:60000,
            imagen:'https://www.celularesytelefonos.com/wcsstore/GlobalSolutions/images/catalog/Nokia/Nokia-X-1-128GB-Neg',
            descripcion:'Celular Nokia X1 128GB'
        },{
            id:6,
            nombre:'Celular Samsung',
            precio:70000,
            imagen:'https://www.celularesytelefonos.com/wcsstore/GlobalSolutions/images/catalog/Samsung/Galaxy-S10-Plus-64GB-Neg',
            descripcion:'Celular Samsung Galaxy S10 Plus 64GB'
        },{
            id:7,
            nombre:'Celular Apple',
            precio:80000,
            imagen:'https://www.celularesytelefonos.com/wcsstore/GlobalSolutions/images/catalog/Apple/iPhone-11-Pro-Max-256GB-Neg',
            descripcion:'Celular Apple iPhone 11 Pro Max 256GB'
        },{
            id:8,
            nombre:'Celular Google',
            precio:90000,
            imagen:'https://www.celularesytelefonos.com/wcsstore/GlobalSolutions/images/catalog/Google/Pixel-3-XL-128GB-Neg',
            descripcion:'Celular Google Pixel 3 XL 128GB'
        }
    ]);
        const numColumns = 2;
    const renderItem = ({item}) => {
        return(
            <ItemWrapper>
                <View style={styles.cardItems}>
                <Text style={styles.cardTitle}>{item.nombre}</Text>
                <Text style={styles.cardText}>{item.precio}</Text>
                <Text style={styles.cardText}>{item.imagen}</Text>
                <Text style={styles.cardText}>{item.descripcion}</Text>
                </View>
            </ItemWrapper>
        )
    }

  return (
  
    <FlatList
        style={styles.itemContainer}
        numColumns={numColumns}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default Item