import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/HomePage';
import ListarClientes from './components/ListarClientes';
import ListaPesoAltura from './components/ListaPesoAltura';
import MdpEmail from './components/MdpEmail';
import Menor from './components/Menor';
import Peso from './components/Peso';
import Promedio from './components/Promedio';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Lista" component={ListarClientes} />
        <Stack.Screen name="PesoAltura" component={ListaPesoAltura} />
        <Stack.Screen name="MdpEmail" component={MdpEmail} />
        <Stack.Screen name="Promedio" component={Menor} />
        <Stack.Screen name="Peso" component={Peso} />
        <Stack.Screen name="Menor" component={Promedio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;