import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 45,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32
    },
    viewStatus: {
        flexDirection: 'row',
    },
    create: {
        marginRight: 8,
        fontSize: 14,
        color: '#1E6F9F',
        fontWeight: 'bold'
    },
    finish: {
        marginRight: 8,
        fontSize: 14,
        color: '#8284FA',
        fontWeight: 'bold'
    },
    viewConut: {
        width: 25,
        height: 25,
        borderRadius: 10,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCount: {
        color: '#fff',
        fontWeight: 'bold'
    }

});