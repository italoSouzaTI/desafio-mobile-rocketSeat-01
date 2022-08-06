import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Header'
import Input from '../Input'
import Status from '../Status'

import { styles } from './styles';

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Input />
            <Status />
        </View>
    );
}

export default Home;