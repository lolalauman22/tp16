-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2023 a las 21:19:36
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empresa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL,
  `nombre_cliente` varchar(30) NOT NULL,
  `apellido_cliente` varchar(30) NOT NULL,
  `fnac_cliente` date NOT NULL,
  `peso_cliente` float NOT NULL,
  `altura_cliente` float NOT NULL,
  `domicilio_cliente` varchar(30) NOT NULL,
  `codigo_postal` int(11) NOT NULL,
  `movil1_cliente` int(12) NOT NULL,
  `movil2_cliente` int(12) NOT NULL,
  `email_cliente` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nombre_cliente`, `apellido_cliente`, `fnac_cliente`, `peso_cliente`, `altura_cliente`, `domicilio_cliente`, `codigo_postal`, `movil1_cliente`, `movil2_cliente`, `email_cliente`) VALUES
(1, 'Lucas', 'Forchino', '1979-01-24', 95.5, 1.6, 'Jujuy 1234', 7600, 223612121, 223445545, 'lucas@gmail.com'),
(2, 'Jorge', 'Solis', '1945-10-01', 78.2, 1.8, 'Almafuerte 321', 8000, 229161459, 229161459, 'j@hotmail.com'),
(3, 'Javier', 'Fernandez', '1975-09-02', 90, 1.8, 'Av. Paso 100', 7600, 223544444, 223544445, 'javier@gmail.com'),
(23, 'Jorge', 'Solisa', '1982-01-01', 100, 1.8, 'Av. Colon 4444', 7600, 223516666, 223516667, 'sol@gmail.com'),
(35, 'Juan', 'Mercado', '1972-04-04', 89.6, 1.77, 'Av. Independencia 720', 7600, 223616674, 223616675, 'mercado@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
