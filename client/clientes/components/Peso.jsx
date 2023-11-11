import React, { useEffect, useState } from 'react';
import { View, Text, FlatList} from 'react-native';
import axios from 'axios';

const Peso = ({ navigation }) => {
    const [peso, setPeso] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.45:8080/clientes/peso')
            .then(response => setPeso(response.data.respuesta.pesoPesado))
            .catch(error => console.error(error));
    }, []);

    return (
        <View>
            <Text>Peso mas alto de los clientes:</Text>
            <Text>{peso !== null ? `Peso más alto: ${peso} kg` : 'Cargando...'}</Text>
        </View>
    );
};

export default Peso;