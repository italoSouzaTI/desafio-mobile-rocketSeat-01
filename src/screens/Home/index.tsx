import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import uuid from 'react-native-uuid'


import Header from '../../components/Header'
import Input from '../../components/Input'
import Status from '../../components/Status'
import EmptyList from '../../components/EmptyList'
import Card from '../../components/Card'

import { styles } from './styles';

// interface
export type Task = {
    id: string,
    isFinish: boolean,
    label: String
}

const Home: React.FC = () => {
    const [listTodo, setListTodo] = useState([]);
    const [countComplete, setCountComplete] = useState(0);

    function addTask (value: string) {
        console.log(value)
        const params = {
            id: uuid.v4(),
            isFinish: false,
            label: value
        }
        setListTodo(prevState => [...prevState, params])
    }

    function handleFinish (event) {
        let cloneArray = listTodo.slice();
        let index = cloneArray.findIndex(item => item.id === event);
        let remove = cloneArray.splice(index, 1);
        if (remove[0].isFinish === false) {
            remove[0].isFinish = true;
            cloneArray.push(...remove);
        } else {
            remove[0].isFinish = false;
            cloneArray.splice(0, -1, remove[0]);

        }

        finish(cloneArray);
        setListTodo(cloneArray);
    }

    function handleDele (event: string) {
        let newArray = listTodo.filter(item => item.id != event);
        finish(newArray);
        setListTodo(newArray);
    }


    function finish (item: Task) {
        let inicialValue = 0;
        let sume = item.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual.isFinish;
        }, inicialValue)
        setCountComplete(sume)
    }



    return (
        <View style={styles.container}>
            <Header
            />
            <Input
                addItem={addTask}
            />
            <Status
                complete={countComplete}
                countTask={listTodo.length}
            />
            {listTodo.length > 0 ? (
                <FlatList
                    style={{
                        paddingHorizontal: 40,
                        marginTop: 20
                    }}
                    data={listTodo}
                    keyExtractor={(item, index) => item.id}
                    ItemSeparatorComponent={() => (
                        <View style={{ margin: 5 }} />
                    )}
                    renderItem={({ item }) => (
                        <Card
                            dados={item}
                            finish={handleFinish}
                            isDelete={handleDele}
                        />
                    )}

                />
            ) : (
                <View style={styles.containerItem}>
                    <EmptyList />
                </View>
            )}
        </View>
    );
}

export default Home;