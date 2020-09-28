import { StyleSheet } from "react-native";





const styles = StyleSheet.create({
    category: {
        flexDirection: 'row',
        paddingTop: 8,
        marginLeft: 16,
        borderRadius: 5,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    imgCategory: {
        backgroundColor: 'blue',
        padding: 12, alignItems: 'center',
        borderRadius: 5
    },
    DivCategory: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
        paddingLeft: 16,
        padding: 8
    },
    Headder: {
        backgroundColor: '#FFFFFF',
        paddingTop: 32,
        borderBottomWidth: 0.5,
        padding: 16,

    },
    Header: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    DivCard: {
        borderRadius: 5,
        width: 132,
        height: 132,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: 'white',
        marginLeft: 8
    },
    Imgcard: {
        height: '45%',
        width: '100%',
        resizeMode: 'stretch',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    DivFilter: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        paddingLeft: 16,


    },
    Filter: {
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#CDD7E7',
        marginHorizontal: 16,
        height: 50

    }

})
export default styles;