import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
    return (
        <View>
            <Button
                style={styles.button}
                title="Lista Clientes"
                onPress={() => navigation.navigate('Lista')}
            />
            <Button
                style={styles.button}
                title="Lista Peso - Altura"
                onPress={() => navigation.navigate('PesoAltura')}
            />
            <Button
                style={styles.button}
                title="MDP - Gmail"
                onPress={() => navigation.navigate('MdpEmail')}
            />
            <Button
                style={styles.button}
                title="Promedio Altura"
                onPress={() => navigation.navigate('Promedio')}
            />
            <Button
                style={styles.button}
                title="Mayor Peso"
                onPress={() => navigation.navigate('Peso')}
            />
            <Button
                style={styles.button}
                title="Cliente con menor edad"
                onPress={() => navigation.navigate('Menor')}
            />
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,
    },
});