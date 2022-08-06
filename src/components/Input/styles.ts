import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30
    },
    input: {
        width: 271,
        height: 54,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#0D0D0D',
        borderRadius: 6,
        paddingHorizontal: 10,
        marginRight: 2,
        color: '#fff',
        fontFamily: 'Inter_400Regular'
    },
    buttonAdd: {
        width: 52,
        height: 52,
        borderRadius: 6,
        marginLeft: 2,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
