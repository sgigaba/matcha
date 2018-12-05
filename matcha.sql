-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 26, 2018 at 05:21 AM
-- Server version: 5.7.23
-- PHP Version: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `matcha`
--

-- --------------------------------------------------------

--
-- Table structure for table `blocked`
--

CREATE TABLE `blocked` (
  `username` varchar(250) DEFAULT NULL,
  `blocked` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `blocked`
--

INSERT INTO `blocked` (`username`, `blocked`) VALUES
('samkelo', 'Dummy4'),
('samkelo', 'Dummy8'),
('samkelo', 'samkelo'),
('samkelo', 'Dummy7');

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(100) NOT NULL,
  `from` varchar(250) DEFAULT NULL,
  `to` varchar(250) DEFAULT NULL,
  `message` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`id`, `from`, `to`, `message`) VALUES
(1, 'samkelo', 'Dummy4', 'Hey'),
(2, 'samkelo', 'Dummy4', 'How are you'),
(3, 'Dummy4', 'samkelo', 'Hey'),
(4, 'samkelo', 'Dummy4', 'its nice to meet you'),
(5, 'samkelo', 'Dummy4', 'DELETE FROM `chat`'),
(6, 'samkelo', 'Dummy4', '\"DELETE FROM `chat`\"'),
(7, 'samkelo', 'Dummy8', 'Hey sexy'),
(8, 'samkelo', 'Dummy8', 'its nice to meet you'),
(9, 'samkelo', 'Dummy4', 'Hey'),
(10, 'samkelo', 'Dummy4', 'Wassup'),
(11, 'samkelo', 'Dummy4', 'Hererererer'),
(12, 'samkelo', 'Dummy4', '\''),
(13, 'samkelo', 'Dummy4', 'Hey'),
(14, 'samkelo', 'Dummy4', 'Hey'),
(15, 'samkelo', 'Dummy4', 'How are you'),
(16, 'Dummy4', 'samkelo', 'Wow'),
(17, 'Dummy4', 'samkelo', 'Wow'),
(18, 'samkelo', 'Dummy4', 'hey'),
(19, 'samkelo', 'Dummy4', 'hey'),
(20, 'samkelo', 'Dummy4', 'Hey'),
(21, 'samkelo', 'Dummy4', 'Hey'),
(22, 'samkelo', 'Dummy4', 'Naarce'),
(23, 'samkelo', 'Dummy4', 'Wow'),
(24, 'samkelo', 'Dummy4', 'Wow'),
(25, 'samkelo', 'Dummy4', 'Wow'),
(26, 'samkelo', 'Dummy4', 'Hey'),
(27, 'samkelo', 'Dummy4', 'How are you'),
(28, 'samkelo', 'Dummy4', 'Hey'),
(29, 'samkelo', 'Dummy4', 'Hey'),
(30, 'samkelo', 'Dummy4', 'Hey'),
(31, 'samkelo', 'Dummy4', 'Wow'),
(32, 'samkelo', 'Dummy4', 'Wow'),
(33, 'samkelo', 'Dummy4', 'Hey'),
(34, 'samkelo', 'Dummy4', 'Hey'),
(35, 'samkelo', 'Dummy4', 'Hey'),
(36, 'samkelo', 'Dummy4', 'Wow'),
(37, 'samkelo', 'Dummy4', 'Wow'),
(38, 'samkelo', 'Dummy4', 'Wow'),
(39, 'samkelo', 'Dummy4', 'Yo'),
(40, 'samkelo', 'Dummy4', 'Nice'),
(41, 'samkelo', 'Dummy4', 'Nice'),
(42, 'samkelo', 'Dummy4', 'Hey'),
(43, 'samkelo', 'Dummy4', 'How are you'),
(44, 'Dummy7', 'samkelo', 'Hey'),
(45, 'Dummy7', 'samkelo', 'Nice to meet you'),
(46, 'Dummy4', 'samkelo', 'Hey'),
(47, 'Dummy4', 'samkelo', 'Wow'),
(48, 'Dummy4', 'samkelo', 'Wow'),
(49, 'Dummy3', 'samkelo', 'Wow'),
(50, 'Dummy3', 'samkelo', 'Wow'),
(51, 'Samkelo', 'Dummy4', 'Hey'),
(52, 'samkelo', 'Dummy4', 'Nice'),
(53, 'samkelo', 'Dummy4', 'Nice'),
(54, 'samkelo', 'Dummy4', 'Nice'),
(55, 'samkelo', 'Dummy4', 'Wow'),
(56, 'samkelo', 'Dummy4', 'Hey'),
(57, 'samkelo', 'Dummy4', 'Wow'),
(58, 'samkelo', 'Dummy4', 'Hey'),
(59, 'samkelo', 'Dummy4', 'Hey'),
(60, 'Samkelo', 'Dummy4', 'Wow'),
(61, 'samkelo', 'Dummy4', 'Hey');

-- --------------------------------------------------------

--
-- Table structure for table `dummy4block`
--

CREATE TABLE `dummy4block` (
  `blocked` varchar(250) DEFAULT NULL,
  `path` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `username` varchar(250) DEFAULT NULL,
  `user` varchar(250) DEFAULT NULL,
  `type` varchar(250) DEFAULT NULL,
  `time` timestamp(6) NULL DEFAULT NULL,
  `viewed` int(11) DEFAULT NULL,
  `confirmed` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`username`, `user`, `type`, `time`, `viewed`, `confirmed`) VALUES
('Dummy1', 'Dummy2', 'liked your profile', NULL, 1, NULL),
('Dummy1', 'Dummy2', 'liked your profile', NULL, 1, NULL),
('Dummy2', 'Dummy7', 'liked your profile', NULL, 1, NULL),
('samkelo', 'Dummy7', 'viewed your profile', NULL, 2, NULL),
('samkelo', 'Dummy3', 'viewed your profile', NULL, 2, NULL),
('Dummy5', 'Dummy3', 'viewed your profile', NULL, 1, NULL),
('Dummy5', 'Dummy3', 'viewed your profile', NULL, 1, NULL),
('samkelo', 'Dummy8', 'viewed your profile', NULL, 2, NULL),
('samkelo', 'Dummy8', 'liked your profile', NULL, 2, NULL),
('samkelo', 'Dummy8', '!! Connected with you !!', NULL, 2, NULL),
('samkelo', 'Dummy8', 'viewed your profile', NULL, 2, NULL),
('Dummy8', 'samkelo', 'viewed your profile', NULL, 1, NULL),
('Dummy8', 'samkelo', 'viewed your profile', NULL, 1, NULL),
('Dummy8', 'samkelo', 'viewed your profile', NULL, 1, NULL),
('Dummy8', 'samkelo', 'viewed your profile', NULL, 1, NULL),
('Dummy8', 'samkelo', 'liked your profile', NULL, 1, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'liked your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'liked your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'liked your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'liked your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'liked your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'liked your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', '!! Connected with you !!', NULL, 2, NULL),
('Dummy4', 'samkelo', '!! Connected with you !!', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', '!! Connected with you !!', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', '!! Connected with you !!', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('Dummy4', 'samkelo', '!! Connected with you !!', NULL, 2, NULL),
('Dummy4', 'samkelo', 'viewed your profile', NULL, 2, NULL),
('samkelo', 'Dummy4', 'viewed your profile', NULL, 1, NULL),
('samkelo', 'Dummy4', '!! Connected with you !!', NULL, 1, NULL),
('samkelo', 'Dummy4', 'viewed your profile', NULL, 1, NULL),
('samkelo', 'Dummy4', 'viewed your profile', NULL, 1, NULL),
('undefined', 'Dummy4', '!! Unconnected with you!!', NULL, 1, NULL),
('samkelo', 'Dummy4', 'viewed your profile', NULL, 1, NULL),
('samkelo', 'Dummy4', '!! Connected with you !!', NULL, 1, NULL),
('samkelo', 'Dummy4', 'viewed your profile', NULL, 1, NULL),
('samkelo', 'Dummy4', 'viewed your profile', NULL, 1, NULL),
('samkelo', 'Dummy4', '!! Connected with you !!', NULL, 1, NULL),
('samkelo', 'Dummy4', 'liked your profile', NULL, 1, NULL),
('samkelo', 'Dummy4', 'viewed your profile', NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pictures`
--

CREATE TABLE `pictures` (
  `username` varchar(250) DEFAULT NULL,
  `pics` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pictures`
--

INSERT INTO `pictures` (`username`, `pics`) VALUES
('sgigaba@student.wethinkcode.co.za', NULL),
('samkelo', 'example.jpg'),
('Tommy', NULL),
('Dummy1', NULL),
('Dummy2', NULL),
('Dummy3', NULL),
('Dummy4', NULL),
('Dummy5', NULL),
('Dummy8', NULL),
('Dummy7', NULL),
('samkelo', 'Dummy1.jpg'),
('samkelo', 'Dummy5.jpeg'),
('samkelo', 'Dummy6.jpeg'),
('samkelo', 'cool-background.png'),
('Dummy4', 'Dummy5.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `potential`
--

CREATE TABLE `potential` (
  `username` varchar(250) DEFAULT NULL,
  `profile` varchar(250) DEFAULT NULL,
  `uliked` int(11) DEFAULT NULL,
  `theyliked` int(11) DEFAULT NULL,
  `lusername` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `potential`
--

INSERT INTO `potential` (`username`, `profile`, `uliked`, `theyliked`, `lusername`) VALUES
('Dummy4', NULL, 1, 1, 'samkelo');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `username` varchar(250) DEFAULT NULL,
  `relationship` varchar(250) DEFAULT NULL,
  `gender` varchar(250) DEFAULT NULL,
  `minage` int(11) DEFAULT NULL,
  `maxage` int(11) DEFAULT NULL,
  `Bio` varchar(300) DEFAULT NULL,
  `matchg` varchar(250) DEFAULT NULL,
  `path` varchar(250) DEFAULT NULL,
  `latitude` decimal(20,10) DEFAULT NULL,
  `longitude` decimal(20,10) DEFAULT NULL,
  `fame` int(11) NOT NULL DEFAULT '10',
  `num` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`username`, `relationship`, `gender`, `minage`, `maxage`, `Bio`, `matchg`, `path`, `latitude`, `longitude`, `fame`, `num`) VALUES
('sgigaba@student.wethinkcode.co.za', 'long', 'gendernonconforming', 20, 27, 'Wow WOOOOOW', NULL, NULL, NULL, NULL, 10, NULL),
('samkelo', 'Long term relationship', 'man', 20, 25, 'I like it alot', 'men exclusively', 'example.jpg', '-26.2056496000', '28.0361622000', 700, 0),
('Tommy', 'long', 'gendernonconforming', 18, 50, 'I am a young proffessional dancer', NULL, NULL, NULL, NULL, 10, NULL),
('Dummy1', 'Causual sex', 'woman', 18, 23, 'I am looking for a partner who enjoys sports, watching tv and swimming. I am a manager at a fast food chain', 'women exclusively', 'Dummy1.jpg', NULL, NULL, 160, NULL),
('Dummy2', 'Long term relationship', 'woman', 20, 35, 'I am a professional chef with a successful resturaunt in Melville. I love my two dogs and I would love to cook for you ', 'women exclusively', 'Dummy2.jpg', NULL, NULL, 100, 0),
('Dummy3', 'Causual sex', 'man', 25, 30, 'I am an anthropology lecturer and part time singer song writer. Let me serenade you', 'women exclusively', 'Dummy3.jpg', NULL, NULL, 40, 0),
('Dummy4', 'friendship', 'man', 18, 80, 'I am an accountant who loves dancing. Lets go out ', 'men exclusively', 'Dummy4.jpg', NULL, NULL, 3880, 126),
('Dummy5', 'I am looking for a dom', 'woman', 18, 29, 'I am a young mother of two whose looking for someone to get freaky with ', 'men exclusively', 'Dummy5.jpeg', NULL, NULL, 40, NULL),
('Dummy8', 'Causual sex', 'man', 18, 25, 'Like my profile to find out more', 'men exclusively', 'Dummy6.jpeg', NULL, NULL, 380, 0),
('Dummy7', 'Long term relationship', 'genderfluid', 18, 30, 'Give me ', 'gender fluid people exclusively', 'Dummy7.jpg', '-26.1961190000', '28.0433100000', 70, 0);

-- --------------------------------------------------------

--
-- Table structure for table `samkeloblock`
--

CREATE TABLE `samkeloblock` (
  `blocked` varchar(250) DEFAULT NULL,
  `path` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `userid` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `code` int(11) NOT NULL,
  `Verified` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`userid`, `username`, `email`, `password`, `code`, `Verified`, `age`) VALUES
(1, 'samkelo', 'sgigaba@student.wethinkcode.co.za', '$2b$10$nmmj6XuRPOGP0vN/OfaW7eDAEC2QWut6J8cnLb/m4L1poQlg14PWy', 94486, NULL, 20),
(2, 'Tommy', 'samkelogigaba1@gmail.com', '1234', 1111, 1, 35),
(5, 'Dummy1', 'samkelogigaba1@gmail.com', '1234', 111, 1, 50),
(6, 'Dummy2', 'samkelogigaba1@gmail.com', '1234', 111, 1, 29),
(7, 'Dummy3', 'samkelogigaba1@gmail.com', '1234', 111, 1, 18),
(8, 'Dummy4', 'samkelogigaba1@gmail.com', '1234', 111, 1, 50),
(9, 'Dummy5', 'samkelogigaba1@gmail.com', '1234', 111, 1, 42),
(10, 'Dummy6', 'samkelogigaba1@gmail.com', '1234', 111, 1, 21),
(11, 'Dummy7', 'samkelogigaba1@gmail.com', '1234', 111, 1, 30),
(12, 'Dummy8', 'samkelogigaba1@gmail.com', '1234', 111, 1, 25),
(13, '', '', '$2b$10$zpXapDGaeXI28EN2H2XUnuiipahBTn4v/njZTVMaJeOSb7LjmGGoi', 5062, NULL, 20),
(14, 'Person', 'sgigaba@student.wethinkcode.co.za', '$2b$10$qucwuBNieL8UnKZ8mph9Lez.Sk3PjgUrMtr.Ksv5wsTEBflzkTP6C', 23177, NULL, 21),
(15, 'samkelo', 'sgigaba@student.wethinkcode.co.za', '$2b$10$HxpDn6ObiroUU8D5h3FZk.mYb8gsXEb505rfpzkEuUG68BtigKzkS', 85709, NULL, 70),
(16, 'Velo', 'sgigaba@student.wethinkcode.co.za', '$2b$10$/bpSLz3rbhzWJ8yPrJJLKuSrtTjqqQkruPBg99sFUj6V2sVlclOeC', 42218, NULL, 27);

-- --------------------------------------------------------

--
-- Table structure for table `views`
--

CREATE TABLE `views` (
  `username` varchar(250) DEFAULT NULL,
  `pagevisited` varchar(250) DEFAULT NULL,
  `path` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `views`
--

INSERT INTO `views` (`username`, `pagevisited`, `path`) VALUES
('samkelo', 'Dummy7', 'Dummy7.jpg'),
('Dummy4', 'Dummy3', 'Dummy3.jpg'),
('Dummy4', 'Dummy1', 'Dummy1.jpg'),
('Dummy4', 'Dummy1', 'Dummy1.jpg'),
('samkelo', 'Dummy4', 'Dummy4.jpg'),
('samkelo', 'Dummy8', 'Dummy6.jpeg'),
('Dummy1', 'Dummy2', 'Dummy2.jpg'),
('Dummy1', 'samkelo', 'cool-background.png'),
('samkelo', 'Dummy5', 'Dummy5.jpeg'),
('samkelo', 'Tommy', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
