import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, Alert, Task } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

interface IInput {
    addItem: (string: string) => void
}

const Input: React.FC<IInput> = ({ addItem }) => {
    const [isFocusedInput, setIsFocusedInput] = useState<boolean>(false);
    const [newTask, setNewTask] = useState<string>('');

    function validation () {
        if (newTask.length === 0) {
            Alert.alert('Atenção', 'Preencha o campo para adicionar a lista');
            return false;
        }
        addItem(newTask);
        setNewTask('')
    }
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
                value={newTask}
                onChangeText={setNewTask}
            />
            <Pressable
                style={({ pressed }) => [{
                    backgroundColor: pressed ? '#4EA8DE' : '#1E6F9F'
                }, styles.buttonAdd]}
                onPress={validation}
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