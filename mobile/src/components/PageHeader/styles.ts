import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 40,
        paddingTop: 10,
        backgroundColor: '#8257E5',
    },
    topBar: {
        padding: 40,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#774DD6'
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
    },
    pageTitle:{
        fontFamily: 'Archivo_500Medium',
        fontSize: 14,
        lineHeight: 15,
        textAlign: 'center',
        color: '#D4C2FF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default styles;
