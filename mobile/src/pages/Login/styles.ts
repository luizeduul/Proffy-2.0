import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',
    },
    header: {
        backgroundColor: '#8257E5',
        justifyContent: "center",
        alignItems: "center",
        height: 345,
    },
    logo: {
        width: 160,
        height: 46.7,
        resizeMode: "contain",
    },
    logoText: {
        color:"#D4C2FF",
        fontFamily: 'Archivo_400Regular',
        fontSize: 16,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingTop: 25,
        marginBottom: 15,
    },
    title: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 24,
        lineHeight: 34,
    },
    buttonNewAccount: {
        width: 99,
        height: 24,
        marginTop: 10,
    },
    textNewAccount:{
        fontFamily: "Poppins_400Regular",
        fontSize: 12,
        lineHeight: 24,
        textAlign: "right",
        textDecorationLine: "underline",
        color: "#8257E5",
    },
    input: {
        height: 64,
        width: "85%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal: 25,
        marginTop:2,
    },
    rememberContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal:30,
        marginTop: 20,
    },
    checkBox: {
        fontFamily: "Poppins_400Regular",
        fontSize: 12,
        lineHeight: 24,
        color: "#9C98A6",
    },
    buttonForget: {
        width: 130,
        height: 24,
    },
    textForgetButton:{
        fontFamily: "Poppins_400Regular",
        fontSize: 12,
        lineHeight: 24,
        textAlign: "right",
        color: "#9C98A6",
        textDecorationLine: "underline",
    },
    button: {
        backgroundColor: "#04D361",
        width:311,
        height: 56,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    buttonText: {
        fontFamily: "Archivo_600SemiBold",
        color: "#FFF",
        fontSize: 16,
        lineHeight: 16,
    }
});

export default styles;
