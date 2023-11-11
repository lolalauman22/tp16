import React, { useEffect, useState } from 'react';
import { View, Text, FlatList} from 'react-native';
import axios from 'axios';

const Menor = ({ navigation }) => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.45:8080/cliente/menor')
            .then(response => setClientes(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <View>
            <Text>Clientes que no son de MDP y tienen Gmail:</Text>
            <FlatList
                data={clientes}
                keyExtractor={(cliente) => cliente.id_cliente.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>Nombre: {item.nombre_cliente}</Text>
                        <Text>Apellido: {item.apellido_cliente}</Text>
                        <Text>F. nac.: {item.fnac_cliente}</Text>
                        <Text>Peso: {item.peso_cliente}</Text>
                        <Text>Altura: {item.altura_cliente}</Text>
                        <Text>Domicilio: {item.domicilio_cliente}</Text>
                        <Text>Codigo postal: {item.codigo_postal}</Text>
                        <Text>Movil 1: {item.movil1_cliente}</Text>
                        <Text>Movil 2: {item.movil2_cliente}</Text>
                        <Text>Email: {item.email_cliente}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Menor;