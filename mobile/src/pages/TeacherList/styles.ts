import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',
    },
    teacherList: {
        marginTop: -40,
    },
    foundProffysView: {
        flexDirection: 'row',
        marginTop: -30
    },
    textFoundProffys: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 18,
        paddingLeft: 12,
        color: '#D4C2FF',
    },
    searchForm: {
        marginBottom: 24,
    },
    filterButton: {
        flexDirection: 'row',
        marginTop: -25,
        marginBottom: 25
    },
    filterText: {
        fontFamily: 'Poppins_400Regular',
        alignSelf: 'center',
        fontSize: 12,
        lineHeight: 18,
        paddingLeft: 12,
        color: '#D4C2FF',
    },
    label: {
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular',
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputBlock: {
        width: '48%'
    },
    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },
    submitFilterButton: {
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04D361'
    },
    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16,
    }
});

export default styles;
