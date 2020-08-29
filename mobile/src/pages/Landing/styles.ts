import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',
        justifyContent: 'center',
        padding: 40,
    },
    profileHeader: {
        backgroundColor: '#8257E5',
        height: 340,
        padding: 40
    },
    profile: {
        flexDirection: "row",
        alignItems: 'center',
        top: 30,
    },
    imageProfile: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 100
    },
    textProfileName: {
        fontFamily: 'Poppins_500Medium',
        color: '#D4C2FF',
        fontSize: 12,
        lineHeight: 22,
        paddingLeft: 16,
    },
    logoutButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '38%',
        backgroundColor: '#774DD6',
        borderRadius: 8,
    },
    banner: {
        width: '100%',
        resizeMode: 'contain',
        top: 40,
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#6A6180',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 10,
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: "space-between",
    },
    buttonPrimary: {
        backgroundColor: '#9871F5'
    },
    buttonSecondary: {
        backgroundColor: '#04D361'
    },
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20
    },
    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#9C98A6',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40
    }

});

export default styles;
