import React from 'react';
import { View, Image } from 'react-native';
import Logo from '../../assets/Logo.png';

import { styles } from './styles';

const Header: React.FC = () => {
    return (
        <View
            style={styles.container}
        >
            <Image
                source={Logo}
            />
        </View>
    );
}

export default Header;