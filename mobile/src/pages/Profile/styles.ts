import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',
    },
    content:{
        alignItems: 'center',
    },
    imgProfile: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginTop: -80
    },
    buttonAddImage:{
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#04D361',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -35,
        marginLeft: 60,
    },
    textName:{
        width: 216,
        fontFamily: 'Archivo_700Bold',
        fontSize: 24,
        lineHeight: 25,
        color: '#FFF',
        textAlign: 'center',
        paddingTop: 24
    },
    textSubject: {
        width: 81,
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        color: '#D4C2FF'
    },
    formRegister:{
        marginTop: -40,
    },
    titleSection: {
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 20,
        lineHeight: 30,
        color: '#32264D'
    }

});

export default styles;
