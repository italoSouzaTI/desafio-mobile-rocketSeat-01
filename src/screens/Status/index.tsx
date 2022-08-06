import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Status: React.FC = () => {

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.viewStatus}
            >
                <Text
                    style={styles.create}
                >Criadas</Text>
                <View
                    style={styles.viewConut}
                >
                    <Text
                        style={styles.textCount}
                    >0</Text>
                </View>
            </View>
            <View
                style={styles.viewStatus}
            >
                <Text
                    style={styles.finish}
                >Concluídas</Text>
                <View
                    style={styles.viewConut}
                >
                    <Text
                        style={styles.textCount}
                    >0</Text>
                </View>
            </View>
        </View>
    );
}

export default Status;