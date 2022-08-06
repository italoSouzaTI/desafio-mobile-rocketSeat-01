import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from '../../components/Header'
import Input from '../../components/Input'
import Status from '../../components/Status'
import EmptyList from '../../components/EmptyList'
import Card from '../../components/Card'

import { styles } from './styles';

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Input />
            <Status />
            <View style={styles.containerItem}>
                <EmptyList />
            </View>
            {/* <FlatList
                style={{
                    paddingHorizontal: 40
                }}
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                keyExtractor={(item, index) => toString(index)}
                ItemSeparatorComponent={() => (
                    <View style={{ margin: 5 }} />
                )}
                renderItem={(item) => (
                    <Card />
                )}

            /> */}
        </View>
    );
}

export default Home;