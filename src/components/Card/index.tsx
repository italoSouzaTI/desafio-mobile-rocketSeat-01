import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';


import { styles } from './styles';
import { Task } from '../../screens/Home';

interface ICard {
    dados: Task,
    finish: (id: string) => void
    isDelete: (id: string) => void
}

const Card: React.FC<ICard> = ({ dados, finish, isDelete }) => {
    const [isComplete, setIsComplete] = useState(false);
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.btnIcon}
                onPress={() => { finish(dados.id) }}
            >
                {dados.isFinish ? (
                    <AntDesign name="checkcircle" size={24} color="#5E60CE" />
                ) : (
                    <Entypo name="circle" size={24} color="#4EA8DE" />
                )}
            </TouchableOpacity>
            <Text
                style={[styles.label, {
                    textDecorationLine: dados.isFinish ? 'line-through' : 'none',
                    color: dados.isFinish ? '#808080' : '#F2F2F2',
                }]}
            >
                {dados.label}
            </Text>

            <Pressable
                onPress={() => { isDelete(dados.id) }}
                style={({ pressed }) => [{ backgroundColor: pressed ? "#333333" : "transparent", padding: 5, borderRadius: 4 }]}
            >
                {
                    ({ pressed }) => (
                        <Feather name="trash-2" size={24} color={pressed ? "#E25858" : "#808080"} />
                    )}

            </Pressable>
        </View >
    );
}

export default Card;