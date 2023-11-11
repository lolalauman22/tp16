import express from 'express';
import { PORT } from './config.js';
import cors from 'cors';
import {
    getClientes,
    getClientesById,
    getClienteMenorEdad,
    getClientesMdpEMail,
    getClientesPorPesoyAltura,
    pesoMasPesado,
    promedioAlturas,
    insertarRegistro,
    actualizarClienteById,
    borrarClienteById
} from "./database.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    try {
        const respuesta = await getClientes();
        res.status(200).send(respuesta);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los clientes.');
    }
});

app.get('/cliente/:id', async (req, res) => {
    try {
        const respuesta = await getClientesById(req.params.id);
        if (!respuesta) {
            res.status(404).send('Cliente no encontrado.');
        } else {
            res.status(200).send(respuesta);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el cliente por ID.');
    }
});

app.get('/clientes/peso-y-altura', async (req, res) => {
    try {
        const respuesta = await getClientesPorPesoyAltura();
        if (respuesta.length === 0) {
            res.status(404).send('No se encontraron clientes con peso mayor que 90 y altura mayor que 1.78.');
        } else {
            res.status(200).send(respuesta);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al buscar clientes con peso mayor que 90 y altura mayor que 1.78.');
    }
});

app.get('/clientes/no-mdp-email-identico', async (req, res) => {
    try {
        const respuesta = await getClientesMdpEMail();
        if (respuesta.length === 0) {
            res.status(404).send('No se encontraron clientes que no sean de mar del plata y tengan un email igual a "@gmail.com".');
        } else {
            res.status(200).send(respuesta);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al buscar clientes que no sean de mar del plata y tengan un email igual a "@gmail.com".');
    }
});

app.get('/cliente/menor', async (req, res) => {
    try {
        const respuesta = await getClienteMenorEdad();
        if (!respuesta) {
            res.status(404).send('No se encontró ningun cliente con menor de edad.');
        } else {
            res.status(200).send(respuesta);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al buscar el cliente con menor edad.');
    }
});

app.get('/clientes/promedio-alturas', async (req, res) => {
    try {
        const respuesta = await promedioAlturas();
        res.status(200).json({ respuesta });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el promedio de alturas')
    }
});

app.get('/clientes/peso', async (req, res) => {
    try {
        const respuesta = await pesoMasPesado();
        res.status(200).json({ respuesta });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el peso más pesado')
    }
});

app.post('/cliente', async (req, res) => {
    const {nombre, apellido, fnac, peso, altura, domicilio, codigo_postal, movil1, movil2, email} = req.body;
    const respuesta = await insertarRegistro(nombre, apellido, fnac, peso, altura, domicilio, codigo_postal, movil1, movil2, email);
    res.status(200).send(respuesta);
});

app.put('/cliente/actualizar', async (req, res) => {
    const {id_cliente, nombre, apellido, fnac, peso, altura, domicilio, codigo_postal, movil1, movil2, email} = req.body;
    const respuesta = await actualizarClienteById(id_cliente, nombre, apellido, fnac, peso, altura, domicilio, codigo_postal, movil1, movil2, email);
    res.status(200).send(respuesta);
});

app.delete('/cliente/eliminar/:id', async (req, res) => {
    const respuesta = await borrarClienteById(req.params.id);
    res.status(200).send(respuesta);
});

app.listen(PORT, ()=>{
    console.log('El servidor esta corriendo en el puerto '+ PORT);
});