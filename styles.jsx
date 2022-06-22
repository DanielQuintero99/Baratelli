import { Dimensions, StyleSheet } from "react-native";
import tema from "./componentes/constantes/tema";


const styles=StyleSheet.create({
    wrapperContainer:{
        flex:1,
        marginHorizontal:5,
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:15,
        height:250,
        shadowColor: '#000',
        shadowOffset: { 
            width: 0, 
            height: 1 
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: '#fff',
    },
    cardItems:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    cardTitle:{
        fontSize:tema.fontSize.medium,
        fontFamily:tema.fontFamily.primary,
        color:tema.color.textColorPrimary,
    },
    cardText:{
        fontSize:tema.fontSize.small,
        fontFamily:tema.fontFamily.secondary,
        color:tema.color.textColorPrimary,
    },
    container:{
        flex:1
    },
    itemContainer:{
        flex:1,
        marginTop:10,
        marginHorizontal:10,
    },
    containerLogIn: {
        flex: 1,
        backgroundColor: tema.color.tertiary,
        justifyContent: "center",
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logWelcome: {
        marginTop: 0,      
    },
    welcomeTitle: {
        fontFamily: tema.fontFamily.primary,
        color: tema.color.textColorSecondary,
        fontSize: tema.fontSize.xLarge,
    },
    welcomeSubTitle: {
        fontFamily: tema.fontFamily.secondary,
        color: tema.color.textColorTertiary,
        fontSize: tema.fontSize.medium,
        marginTop: 15,
        width: "70%",
        textAlign: "center",
    },
    logButton: {
        marginTop: 50,
        backgroundColor: tema.color.secondary,
        borderRadius: 25,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        height: 60,
    },
    logButtonText: {
        fontFamily: tema.fontFamily.primary,
        color: tema.color.textColorTertiary,
        fontSize: tema.fontSize.large,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 50,
        marginBottom: 30,
        marginHorizontal: 15,
    },
    headerText: {
        color: tema.color.textColorPrimary,
        fontSize: tema.fontSize.xLarge,
        fontFamily: tema.fontFamily.primary,
        marginLeft: 15,
    },
    buscador: {
        backgroundColor: "#F8F7FA",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#CBCBD4",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginHorizontal: 15,
    },
});

export default styles;