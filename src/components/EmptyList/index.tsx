import React from 'react';
import { View, Image, Text } from 'react-native';
import Clipboard from '../../assets/Clipboard.png'

import { styles } from './styles';

const EmptyList: React.FC = () => {
    return (
        <>
            <View
                style={styles.line}
            />
            <Image
                style={{
                    marginTop: 48
                }}
                source={Clipboard}
            />
            <Text
                style={[styles.label, {
                    marginTop: 16
                }]}
            >
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text
                style={[styles.label, {
                    fontFamily: 'Inter_400Regular',
                    fontWeight: "normal"
                }]}
            >
                Crie tarefas e organize seus itens a fazer
            </Text>

        </>
    );
}

export default EmptyList;