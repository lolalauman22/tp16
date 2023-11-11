import React, { useEffect, useState } from 'react';
import { View, Text, FlatList} from 'react-native';
import axios from 'axios';

const Promedio = ({ navigation }) => {
    const [promedio, setPromedio] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.45:8080/clientes/promedio-alturas')
            .then(response => setPromedio(response.data.respuesta.promedioAlturas))
            .catch(error => console.error(error));
    }, []);

    return (
        <View>
            <Text>Promedio de Alturas de los Clientes:</Text>
            <Text>{promedio !== null ? `Promedio: ${promedio}` : 'Cargando...'}</Text>
        </View>
    );
};

export default Promedio;