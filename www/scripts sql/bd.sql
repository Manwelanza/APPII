
-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 18, 2016 at 09:56 AM
-- Server version: 10.0.20-MariaDB
-- PHP Version: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `u511954208_appii`
--

-- --------------------------------------------------------

--
-- Table structure for table `FOOD`
--

CREATE TABLE IF NOT EXISTS `FOOD` (
  `id_food` bigint(20) NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `url_image` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `place` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_food`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `FOOD`
--

INSERT INTO `FOOD` (`id_food`, `name`, `type`, `url_image`, `place`) VALUES
(1, 'omelette', 'dinner', 'images/omelette.jpg', 'World'),
(2, 'paella', 'lunch', 'images/paella.jpg', 'Spain'),
(3, 'spanish omelette', 'lunch', 'images/spanish_omelette.jpg', 'Spain'),
(4, 'eggplant pie', 'lunch', 'images/eggplant_pie.jpg', 'World'),
(5, 'White rice with chiken', 'lunch', 'images/rice_chicken.jpg', 'World'),
(6, 'Gazpacho', 'lunch', 'images/gazpacho.jpg', 'Spain'),
(7, 'Cuttlefish in its own ink', 'lunch', 'images/cuttlefish_in_its_own_ink.jpg', 'Spain'),
(8, 'Spatter chicken', 'dinner', 'images/spatter_chicken.jpg', 'World');

-- --------------------------------------------------------

--
-- Table structure for table `FOOD_INGREDIENT`
--

CREATE TABLE IF NOT EXISTS `FOOD_INGREDIENT` (
  `id_food` bigint(20) NOT NULL,
  `id_ingredient` bigint(20) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `type` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_food`,`id_ingredient`),
  KEY `id_food_idx` (`id_food`),
  KEY `id_ingredient_idx` (`id_ingredient`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `FOOD_INGREDIENT`
--

INSERT INTO `FOOD_INGREDIENT` (`id_food`, `id_ingredient`, `quantity`, `type`) VALUES
(1, 14, 4, 'u'),
(1, 12, 1, 'a bit'),
(1, 15, 1, 'a bit'),
(2, 1, 150, 'gr'),
(2, 2, 500, 'gr'),
(2, 3, 2, 'u'),
(2, 4, 200, 'gr'),
(2, 5, 350, 'gr'),
(2, 6, 250, 'gr'),
(2, 7, 10, 'u'),
(2, 8, 300, 'gr'),
(2, 9, 60, 'gr'),
(2, 10, 1, 'u'),
(2, 11, 1, 'a bit'),
(2, 12, 1, 'a bit'),
(3, 13, 800, 'gr'),
(3, 14, 7, 'u'),
(3, 12, 1, 'a bit'),
(3, 15, 5, 'a bit'),
(4, 16, 500, 'gr'),
(4, 14, 3, 'u'),
(4, 17, 200, 'gr'),
(4, 18, 100, 'gr'),
(4, 19, 100, 'gr'),
(4, 3, 1, 'u'),
(4, 15, 2, 'a bit'),
(4, 12, 1, 'a bit'),
(4, 20, 1, 'a bit'),
(5, 2, 100, 'gr'),
(5, 5, 200, 'gr'),
(6, 21, 200, 'gr'),
(6, 22, 15, 'gr'),
(6, 23, 8, 'gr'),
(6, 17, 25, 'gr'),
(6, 24, 12, 'gr'),
(6, 3, 1, 'u'),
(6, 15, 1, 'a bit'),
(6, 25, 1, 'a bit'),
(6, 12, 1, 'a bit'),
(7, 17, 3, 'u'),
(7, 3, 2, 'u'),
(7, 15, 1, 'a bit'),
(7, 26, 50, 'gr'),
(7, 27, 200, 'gr'),
(7, 12, 1, 'a bit'),
(8, 29, 8, 'u'),
(8, 28, 100, 'gr'),
(8, 17, 1, 'u'),
(8, 25, 1, 'a bit'),
(8, 2, 100, 'gr');

-- --------------------------------------------------------

--
-- Table structure for table `INGREDIENT`
--

CREATE TABLE IF NOT EXISTS `INGREDIENT` (
  `id_ingredient` bigint(20) NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `sugar` double NOT NULL,
  `energy` double NOT NULL,
  `fats` double NOT NULL,
  `carbohydrates` double NOT NULL,
  `sodium` double NOT NULL,
  PRIMARY KEY (`id_ingredient`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `INGREDIENT`
--

INSERT INTO `INGREDIENT` (`id_ingredient`, `name`, `sugar`, `energy`, `fats`, `carbohydrates`, `sodium`) VALUES
(1, 'lean pork', 0, 359, 1.58, 70.9, 0.007),
(2, 'chicken breast', 0, 145, 6.2, 0, 0.066),
(3, 'garlic clove', 30, 119, 0.23, 24.3, 0.019),
(4, 'crushed tomatoes', 35, 38.1, 0.5, 5.55, 0.59),
(5, 'rice', 70, 364, 0.9, 81.6, 0.0039),
(6, 'squid', 0, 80.4, 1.4, 0.7, 0.11),
(7, 'shrimp', 5, 110, 0.8, 1.5, 0.305),
(8, 'mussel', 0, 72, 1.96, 3.4, 0.296),
(9, 'pea', 35, 90.7, 0.9, 11.3, 0.002),
(10, 'bell pepper', 15, 32.2, 0.4, 5.2, 0.07),
(11, 'saffron', 0, 352, 5.85, 61.5, 0.148),
(12, 'salt', 0, 0, 0, 0, 38.85),
(13, 'potato', 70, 73.59, 0.11, 14.8, 0.0027),
(14, 'chicken egg', 0, 162, 12.1, 0.68, 0.144),
(15, 'virgin olive oil', 0, 899, 99.9, 0, 0),
(16, 'eggplant', 20, 21.02, 0.18, 2.39, 0.003),
(17, 'onion', 15, 31.85, 0.25, 5.3, 0.003),
(18, 'carrot', 30, 39.4, 0.2, 6.9, 0.061),
(19, 'cheese', 0, 339, 29, 1, 0.547),
(20, 'white pepper', 5, 283, 2.1, 42.41, 0.005),
(21, 'Tomato', 30, 22.17, 0.21, 3.5, 0.009),
(22, 'Green pepper', 15, 19.69, 0.8, 1.6, 0.004),
(23, 'Cucumber', 15, 13.18, 0.2, 1.9, 0.003),
(24, 'Bread', 50, 115, 0.5, 22.25, 0.2503),
(25, 'Vinegar', 5, 4, 0, 0.6, 0.02),
(26, 'White wine', 0, 61, 0, 0.1, 0.002),
(27, 'Cuttlefish', 0, 80.4, 1.4, 0.7, 0.11),
(28, 'Lettuce', 15, 19.6, 0.6, 1.4, 0.003),
(29, 'Radish', 15, 17.26, 0.14, 2.13, 0.021);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
