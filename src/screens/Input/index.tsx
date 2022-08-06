import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

const Input: React.FC = () => {
    const [isFocusedInput, setIsFocusedInput] = useState<boolean>(false);
    return (
        <View
            style={styles.container}
        >
            <TextInput
                onFocus={() => setIsFocusedInput(true)}
                onBlur={() => setIsFocusedInput(false)}
                style={[styles.input, {
                    borderColor: isFocusedInput ? '#5E60CE' : '#0D0D0D',
                }]}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor="#808080"
            />
            <Pressable
                style={({ pressed }) => [{
                    backgroundColor: pressed ? '#4EA8DE' : '#1E6F9F'
                }, styles.buttonAdd]}
            >
                <AntDesign
                    name="pluscircleo"
                    size={15}
                    color="#fff" />
            </Pressable>

        </View>
    );
}

export default Input;