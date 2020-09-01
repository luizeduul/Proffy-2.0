import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',
    },
    content: {
        alignItems: 'center',
    },
    imgProfile: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginTop: -80
    },
    buttonAddImage: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#04D361',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -35,
        marginLeft: 60,
    },
    textName: {
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
    scroll: {
        marginTop: -40,
    },
    //profile styles
    profileContent: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        paddingHorizontal: 16,
    },

    sectionContainer: {
        marginTop: 30,
    },

    titleSection: {
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 20,
        lineHeight: 30,
        color: '#32264D',
        marginBottom: 15,
    },
    inputContainer: {

    },

    inputLabel: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 22,
        color: '#9C98A6'
    },

    input: {
        height: 56,
        width: 295,
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

    newTimeLabel: {
        fontFamily: 'Archivo_600SemiBold',
        color: '#8257E5',
        fontSize: 14,
        lineHeight: 24,
        paddingTop: 5,
    },

    buttonDeleteTime: {
        justifyContent: 'center',
    },
    labelDeleteTime: {
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 12,
        lineHeight: 22,
        color: '#E33D3D',
    },

    buttonContainer: {
        backgroundColor: '#FAFAFC',
        borderRadius: 8,
        paddingBottom: 20
    },

    buttonSave: {
        width: 293,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#04D361',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        
    },
    textButtonSave: {
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        lineHeight: 26,
        color: '#FFF'
    }



});

export default styles;
