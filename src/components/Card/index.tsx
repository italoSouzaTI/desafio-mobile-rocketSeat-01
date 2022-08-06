import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';


import { styles } from './styles';

const Card: React.FC = () => {
    const [isFinish, setIsFinish] = useState(false)
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.btnIcon}
                onPress={() => setIsFinish(prevState => !prevState)}
            >
                {isFinish ? (
                    <AntDesign name="checkcircle" size={24} color="#5E60CE" />
                ) : (
                    <Entypo name="circle" size={24} color="#4EA8DE" />
                )}
            </TouchableOpacity>
            <Text
                style={[styles.label, {
                    textDecorationLine: isFinish ? 'line-through' : 'none',
                    color: isFinish ? '#808080' : '#F2F2F2',
                }]}
            >
                Integer urna interdum massa libero auctor neque turpis turpis semper.
            </Text>

            <Pressable
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