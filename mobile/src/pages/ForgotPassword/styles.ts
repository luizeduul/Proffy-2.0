import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',

    },
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgImage: {
        width: 375,
        height: 379,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8257E5',
    },
    logo: {
        width: 160,
        height: 46.7,
        resizeMode: "contain",
    },
    logoText: {
        color: "#D4C2FF",
        fontFamily: 'Archivo_400Regular',
        fontSize: 16,
    },
    input: {
        height: 56,
        width: 311,
        backgroundColor: '#FAFAFC',
        borderColor: '#E6E6F0',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 20,
        marginTop: 5,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6A6180',
    },
    viewTextPage: {
        paddingTop: 10,
        alignSelf: 'flex-start',
        paddingLeft: 25,
    },
    textTitle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        lineHeight: 34,
        marginBottom: 10,
        color: '#32264D'
    },
    textDescription: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        marginBottom: 10,
        color: '#6A6180'
    },
    button: {
        width: 311,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#04D361',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    textButton: {
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        color: '#FFF',
    }


});

export default styles;
