-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2023 at 10:30 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zadanie`
--

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `email` varchar(80) NOT NULL,
  `subject` varchar(120) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `surname` varchar(90) NOT NULL,
  `email` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `surname`, `email`) VALUES
(1, 'Jan', 'Duszyński', 'jan.duszynski@icloud.com'),
(2, 'Anna', 'Kowalska', 'anna.kowalska@gmail.com'),
(3, 'Mateusz', 'Nowak', 'mateusz.nowak@yahoo.com'),
(4, 'Katarzyna', 'Wójcik', 'katarzyna.wojcik@hotmail.com'),
(5, 'Piotr', 'Witkowski', 'piotr.witkowski@outlook.com'),
(6, 'Zofia', 'Kaczmarek', 'zofia.kaczmarek@icloud.com'),
(7, 'Jakub', 'Mazur', 'jakub.mazur@gmail.com'),
(8, 'Anna', 'Kowalska', 'anna.kowalska@gmail.com'),
(9, 'Mateusz', 'Nowak', 'mateusz.nowak@yahoo.com'),
(10, 'Katarzyna', 'Wójcik', 'katarzyna.wojcik@hotmail.com'),
(11, 'Piotr', 'Witkowski', 'piotr.witkowski@outlook.com'),
(12, 'Zofia', 'Kaczmarek', 'zofia.kaczmarek@icloud.com'),
(13, 'Jakub', 'Mazur', 'jakub.mazur@gmail.com'),
(14, 'Anna', 'Kowalska', 'anna.kowalska@gmail.com'),
(15, 'Mateusz', 'Nowak', 'mateusz.nowak@yahoo.com'),
(16, 'Aleksandra', 'Piotrowska', 'aleksandra.piotrowska@yahoo.com'),
(17, 'Mikołaj', 'Wiśniewski', 'mikolaj.wisniewski@hotmail.com'),
(18, 'Natalia', 'Witkowska', 'natalia.witkowska@outlook.com'),
(19, 'Jan', 'Krawczyk', 'jan.krawczyk@icloud.com'),
(20, 'Oliwia', 'Grabowska', 'oliwia.grabowska@gmail.com'),
(21, 'Wojciech', 'Nowakowski', 'wojciech.nowakowski@yahoo.com'),
(22, 'Zofia', 'Wójcik', 'zofia.wojcik@hotmail.com'),
(23, 'Jakub', 'Piotrowski', 'jakub.piotrowski@outlook.com'),
(24, 'Julia', 'Kaczmarek', 'julia.kaczmarek@icloud.com'),
(25, 'Adam', 'Mazur', 'adam.mazur@gmail.com'),
(26, 'Natalia', 'Szymańska', 'natalia.szymanska@yahoo.com'),
(27, 'Michał', 'Kowalski', 'michal.kowalski@hotmail.com'),
(28, 'Wiktoria', 'Wiśniewska', 'wiktoria.wisniewska@outlook.com'),
(29, 'Piotr', 'Krawczyk', 'piotr.krawczyk@icloud.com'),
(30, 'Katarzyna', 'Piotrowska', 'katarzyna.piotrowska@gmail.com'),
(31, 'Mateusz', 'Mazur', 'mateusz.mazur@yahoo.com'),
(32, 'Aleksandra', 'Wójcik', 'aleksandra.wojcik@hotmail.com'),
(33, 'Filip', 'Wiśniewski', 'filip.wisniewski@outlook.com');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `hoursAWeek` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `hoursAWeek`) VALUES
(1, 'Pracownia aplikacji webowych', 2),
(3, 'Matematyka', 4),
(4, 'Fizyka', 3),
(5, 'Chemia', 3),
(6, 'Historia', 2),
(7, 'Język angielski', 5),
(8, 'Informatyka', 4),
(9, 'Biologia', 3),
(10, 'Geografia', 2),
(11, 'Wychowanie fizyczne', 2),
(12, 'Plastyka', 1),
(13, 'Muzyka', 1),
(14, 'Religia', 1),
(15, 'Wiedza o społeczeństwie', 2),
(16, 'Technika', 2),
(17, 'Informatyka w biznesie', 3),
(18, 'Podstawy zarządzania', 3),
(19, 'Etyka', 1),
(20, 'Psychologia', 2),
(21, 'Socjologia', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `form`
--
ALTER TABLE `form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
