import mysql from "mysql2";
import {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
    MYSQL_PORT
} from './config.js';

const pool = mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    port: MYSQL_PORT
}).promise();

export async function getClientes() {
    const [row] = await pool.query('SELECT * FROM clientes');
    return row;
}

export async function getClientesById(id) {
    const [row] = await pool.query("SELECT * FROM clientes WHERE id_cliente = ?", [id]);
    return row;
}

export async function getClientesPorPesoyAltura() { 
    const [row] = await pool.query("SELECT * FROM clientes WHERE peso_cliente > ? AND altura_cliente > ?", [90, 1.78]);
    return row;
}

export async function getClientesMdpEMail() {
    const [row] = await pool.query('SELECT * FROM clientes WHERE codigo_postal <> "7600" AND email_cliente LIKE "%gmail%"');
    return row;
}

export async function getClienteMenorEdad() {
    const [row] = await pool.query('SELECT * FROM clientes ORDER BY fnac_cliente ASC LIMIT 1');
    return row[0];
}

export async function promedioAlturas() {
    const [row] = await pool.query('SELECT AVG(altura_cliente) AS promedioAlturas FROM clientes');
    const promedioAlturas = row[0].promedioAlturas.toFixed(2);
    return { promedioAlturas };
}

export async function pesoMasPesado() {
    const [row] = await pool.query('SELECT MAX(peso_cliente) AS pesoMasAlto FROM clientes');
    const pesoPesado = row[0].pesoMasAlto.toFixed(2);
    return { pesoPesado };
}

export async function insertarRegistro(nombre, apellido, fnac, peso, altura, domicilio, codigo_postal, movil1, movil2, email) {
    const [row] = await pool.query("INSERT INTO clientes VALUES (nombre_cliente, apellido_cliente, fnac_cliente, peso_cliente, altura_cliente, domicilio_cliente, codigo_postal, movil1_cliente, movil2_cliente, email_cliente) = (?,?,?,?,?,?,?,?,?,?,?)", [nombre, apellido, fnac, peso, altura, domicilio, codigo_postal, movil1, movil2, email]);    
    return row;
}

export async function actualizarClienteById(id, nombre, apellido, fnac, peso, altura, domicilio, codigo_postal, movil1, movil2, email) {
    const [row] = await pool.query("UPDATE clientes SET nombre_cliente = ?, apellido_cliente = ?, fnac_cliente = ?, peso_cliente = ?, altura_cliente = ?, domicilio_cliente = ?, codigo_postal = ?, movil1_cliente = ?, movil2_cliente = ?, email_cliente = ? WHERE id_cliente = ?", [nombre, apellido, fnac, peso, altura, domicilio, codigo_postal, movil1, movil2, email, id]);    
    return row;
}

export async function borrarClienteById(id) {
    const [row] = await pool.query('DELETE FROM clientes WHERE id_cliente = ?',[id]);
    return row;
}