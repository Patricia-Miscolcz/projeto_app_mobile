import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        padding:15
    },
    boxTop:{
        height: Dimensions.get('window').height/3,
        width: "100%",
        //backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
    boxMid:{
        height: Dimensions.get('window').height/4,
        width: "100%",
        backgroundColor: "#FF6E91",
        paddingHorizontal: 37
    },
    boxBottom:{
        height: Dimensions.get('window').height/3,
        width: "100%",
        alignItems:"center"
    },
    logo:{
        width:80,
        height:80
    },
    text:{
        fontWeight:"bold",
        marginTop:40,
        fontSize:19
    },
    button:{
        marginTop:30,
        width:200,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: themes.colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },
    textButton:{
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold"
    },
    textBottom:{
        fontSize:16,
        color: themes.colors.gray,
    }
})