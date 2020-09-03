import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    content:{
        flex: 1,
    },
    textTitle:{
        fontFamily: 'Archivo_600SemiBold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 29,
        marginTop: -80,
        paddingBottom: 15

    },
    textDescription:{
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 14, 
        lineHeight: 24,
        maxWidth: 245,
        marginBottom: 25,
    },
    scroll: {
        marginTop: -40,
    },
    classesContent: {
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
    imgProfileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    imgProfile: {
        width: 64,
        height: 64,
        borderRadius: 70,
        marginTop: 10
    },
    textProfileView: {
        marginLeft: 20,
    },
    textNameProfile: {
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 20,
        lineHeight: 25,
        color: '#32264D',
    },

    textSubject: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 20,
        color:'#6A6180',

    },

    inputContainer: {},
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
