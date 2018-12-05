-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 30, 2018 at 03:29 AM
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
  `num` int(11) DEFAULT NULL,
  `userid` int(11) NOT NULL,
  `email` varchar(250) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `password` varchar(1000) DEFAULT NULL,
  `Verified` int(1) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `tempdist` int(11) DEFAULT NULL,
  `tags` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`username`, `relationship`, `gender`, `minage`, `maxage`, `Bio`, `matchg`, `path`, `latitude`, `longitude`, `fame`, `num`, `userid`, `email`, `code`, `password`, `Verified`, `age`, `tempdist`, `tags`) VALUES
('samkelo', 'Long term relationship', 'woman', 20, 25, 'I like it alot', 'men exclusively', 'Dawn.png', '-26.2056496000', '28.0361622000', 870, 2, 2, NULL, NULL, '1234', NULL, 30, 0, 'sports,netflix'),
('Dummy1', 'Causual sex', 'man', 18, 23, 'I am looking for a partner who enjoys sports, watching tv and swimming. I am a manager at a fast food chain', 'women exclusively', 'Dummy1.jpg', '-26.2314030000', '28.0096420000', 320, 2, 4, NULL, NULL, NULL, NULL, 25, 4, 'sports'),
('Dummy2', 'Long term relationship', 'woman', 20, 35, 'I am a professional chef with a successful resturaunt in Melville. I love my two dogs and I would love to cook for you ', 'women exclusively', 'Dummy2.jpg', NULL, NULL, 170, 0, 5, NULL, NULL, NULL, NULL, 21, NULL, NULL),
('Dummy3', 'Causual sex', 'man', 25, 30, 'I am an anthropology lecturer and part time singer song writer. Let me serenade you', 'women exclusively', 'Dummy3.jpg', '-26.5109410000', '31.3714350000', 120, 0, 6, NULL, NULL, NULL, NULL, 40, 372, NULL),
('Dummy4', 'friendship', 'woman', 18, 80, 'I am an accountant who loves dancing. Lets go out ', 'men exclusively', 'Dummy4.jpg', '-26.0108480000', '27.3854440000', 4010, 3, 7, NULL, NULL, NULL, NULL, 30, 75, 'politics,family'),
('Dummy5', 'I am looking for a dom', 'woman', 18, 29, 'I am a young mother of two whose looking for someone to get freaky with ', 'anyone', 'Dummy5.jpeg', '-26.2511930000', '28.1276560000', 200, 8, 8, NULL, NULL, NULL, NULL, 22, 11, NULL),
('Dummy8', 'Causual sex', 'man', 18, 25, 'Like my profile to find out more', 'men exclusively', 'Dummy6.jpeg', NULL, NULL, 450, 0, 9, NULL, NULL, NULL, NULL, 36, NULL, NULL),
('Dummy7', 'Long term relationship', 'genderfluid', 18, 30, 'Give me ', 'gender fluid people exclusively', 'Dummy7.jpg', '-26.1961190000', '28.0433100000', 120, 0, 10, NULL, NULL, NULL, NULL, 29, 1, NULL),
('Ama', 'Long term relationship', 'woman', 30, 40, 'I am a jazz musician and mother', 'men exclusively', 'Amanda.png', '-26.2056496000', '28.0361622000', 90, 8, 11, 'samkelogigaba1@gmail.com', 49341, '$2b$10$cQHY3bY/qhiej80y/iGDPuCUmuCq0SzC7fK7fwuq04CrPr1PY0xai', NULL, 21, 0, 'netflix'),
('Kay', 'friendship', 'man', 20, 35, 'Kay is here ', 'women exclusively', 'Kay.png', '-26.2056496000', '28.0361622000', 150, 5, 12, 'samkelogigaba1@gmail.com', 32051, '$2b$10$4ddHSDkNpPfLh0m9dlRrMOR/RdBjRmlKIXL9zXu6dmZi7eRcZuGpm', NULL, 29, 0, 'food,netflix,family'),
('Wendy', 'Long term relationship', 'woman', 21, 30, 'I am an actress who loves wine, dogs and horror movies, Wanna be my friend :D', 'women exclusively', 'Wendy.jpg', '-26.2056496000', '28.0361622000', 60, NULL, 13, 'samkelogigaba1@gmail.com', 47880, '$2b$10$P5ErhOLUpI0r77VTEw6YRu4ZjpWXiWGZhyky/fDp0g0NT8nlRVdJ6', NULL, 45, 4185, 'music,netflix'),
('Pamela', 'Causual sex', 'woman', 20, 50, 'I am an attorney at one of the biggest corporates in South Africa. Looking for someone to unwind and chill with ', 'women exclusively', 'Pamela.jpg', '-26.2056496000', '28.0361622000', 60, NULL, 14, 'samkelogigaba1@gmail.com', 64239, '$2b$10$T7GeCc19O6jGnDYOULs6NuhPBgCzmHEIv05Iy3EwEjJGe3.hwWfWW', NULL, 39, 4185, 'politics,sports,family'),
('Nala', 'Long term relationship', 'genderfluid', 20, 35, 'I am a painter, dancer and lover of things. Lets watch sad movies and watch movies together', 'anyone', 'Nala.jpg', '-26.2056496000', '28.0361622000', 100, NULL, 15, 'samkelogigaba1@gmail.com', 29351, '$2b$10$IObrkiBzMEjxTLKENjG9BOSA3YmprcRDapUaPO8wjUMRphrh33mfu', NULL, 28, 0, 'music,sports,netflix'),
('Sabelo', 'friendship', 'man', 20, 30, 'I am a music student at Wits specialising in Marimbas and Brazillian drums', 'gender fluid people exclusively', 'Sabelo.JPG', NULL, NULL, 70, 6, 16, 'samkelogigaba1@gmail.com', 76170, '$2b$10$heZt8XrvZA4XuhibSHiGCOAqMXrI.X8VpPITPsO8jWkxuhn6DCO3e', NULL, 23, NULL, 'music,sports'),
('Terr', 'friendship', 'man', 28, 35, 'I am a director and foodie. Feed me and rub my tummy', 'men exclusively', 'Terrence.jpg', '-26.2056496000', '28.0361622000', 70, 2, 17, 'samkelogigaba1@gmail.com', 75786, '$2b$10$Fx3YY3W.1ORN.kIGGdcHie9VZR/LiLAvFOlU/wVQ/wlWACDQywKJe', NULL, 28, 0, 'food,music,politics'),
('Scarlett', 'Causual sex', 'woman', 30, 45, 'Let us take a boat ride', 'anyone', 'Scarlett.jpg', '-26.2056496000', '28.0361622000', 80, NULL, 18, 'samkelogigaba1@gmail.com', 56580, '$2b$10$JYM3EWTDaAW3m08Wzc47suAhGmjaXh8uqRda0X6VPL.ttwuovoIZy', NULL, 35, 0, 'netflix,family'),
('Lakeith', 'Causual sex', 'man', 25, 45, 'I am an actor an avid reader. ', 'men exclusively', 'Lakeith.png', '-26.2056496000', '28.0361622000', 30, 2, 19, 'samkelogigaba1@gmail.com', 21818, '$2b$10$B18Dq1zsSi1KeltZEDnl4uFGqNIjcbcg/OyLEDAFB7LkCLrQQmsAC', NULL, 28, 0, 'music,politics,sports'),
('Edward', 'Long term relationship', 'man', 25, 30, NULL, 'women exclusively', 'Edward.jpg', '-26.2056496000', '28.0361622000', 20, NULL, 20, 'samkelogigaba1@gmail.com', 36602, '$2b$10$gxcl2TJqocv3k3GidJYYMOGy0D4tP0Oxf7f50bG9ucS2FHadlQ5o6', NULL, 37, 0, 'family'),
('Henry', 'Long term relationship', 'man', 22, 50, 'Do you have money? Great cause I have bills', 'men exclusively', 'Henry.jpg', '-26.2056496000', '28.0361622000', 30, NULL, 21, 'samkelogigaba1@gmail.com', 79383, '$2b$10$Asd6C6T4TtlfMeYn5s1w.OkAZaaZE6tXbabVc7wltvIrQvDQTpZpq', NULL, 25, 0, 'music,sports'),
('Owen', 'Causual sex', 'man', 21, 35, 'WOOOOW', 'anyone', 'Owen.jpg', '-26.2056496000', '28.0361622000', 50, NULL, 22, 'samkelogigaba1@gmail.com', 30237, '$2b$10$//MeNbxHDvC9LsOZU4iQCe9tZBnv3i3..JKZ.kJ1EcJc5CfEFsLcy', NULL, 35, 0, 'music,politics,netflix'),
('Vuyo', 'Causual sex', 'gendernonconforming', 25, 35, 'I am a member of the punk rock band BLKJKS', 'gendernonconforming people exclusively', 'Vuyo.jpeg', '-26.2056496000', '28.0361622000', 20, NULL, 23, 'samkelogigaba1@gmail.com', 21503, '$2b$10$vLpNwsT9SJLuLnzx8iR83uRbNvDIHGqqkeBdko0Odoz6vK1ivRuDq', NULL, 32, 0, 'music,politics'),
('Thandiswa', 'friendship', 'gendernonconforming', 30, 50, 'I am a jazz musician and im looking for a groupie:)', 'gendernonconforming people exclusively', 'Thandiswa.jpg', '-26.2056496000', '28.0361622000', 30, NULL, 24, 'samkelogigaba1@gmail.com', 93749, '$2b$10$HLIAprqDR8MA7xSaxQft7uXMhWZ7bzxJT.HawagQcclapOtEEaVEK', NULL, 42, 0, 'music'),
('Stvincent', 'friendship', 'gendernonconforming', 25, 50, 'I am a musician', 'anyone', 'StVin.jpg', '-26.2056496000', '28.0361622000', 60, NULL, 25, 'samkelogigaba1@gmail.com', 68712, '$2b$10$VDN7LYrs1aBPFP/q7Ilbvu9788Yw6HY.OI/5Pon/eRyC05T65099S', NULL, 33, 0, 'music'),
('Kirsten', 'Long term relationship', 'woman', 25, 40, ':)', 'women exclusively', 'Kirtsten.jpeg', '-26.2056496000', '28.0361622000', 10, NULL, 26, 'samkelogigaba1@gmail.com', 60284, '$2b$10$e6o/pF7cnSKBYUPx8bGmDOdTXt5Hn.mWhb631IivlFPbBPLrOvEaO', NULL, 29, 4185, 'music,sports,netflix'),
('Winona', 'Long term relationship', 'woman', 28, 45, 'Im looking for someone to babysit my cat nextweek', 'men exclusively', 'Winona.jpeg', '-26.2056496000', '28.0361622000', 30, NULL, 27, 'samkelogigaba1@gmail.com', 62259, '$2b$10$s6HAPXFqS7v7jkQ99E8j4.aoXh8KS1dVJBcJVU6nEzaL3JCTRyYda', NULL, 30, 0, 'netflix,family'),
('Richard', 'friendship', 'man', 25, 60, 'I am Richard', 'women exclusively', 'Richard.jpg', '-26.2056496000', '28.0361622000', 10, NULL, 28, 'samkelogigaba1@gmail.com', 30040, '$2b$10$wj4Xo.5ei3b.tpuyQrTQAeHrIsf/blGpZhjQ5i8aS/C/MWhBxIchC', NULL, 35, 0, 'food'),
('Skepta', 'Causual sex', 'man', 22, 30, 'I am a rapper', 'women exclusively', 'Skepta.jpg', '-26.2056496000', '28.0361622000', 20, NULL, 29, 'samkelogigaba1@gmail.com', 51080, '$2b$10$0bmhU8n.ZhS7bJQG0KWA6uh2Bzs9faHhQs8WozKcKYftOvOxBIZiS', NULL, 28, 0, 'music,family'),
('Sanelly', 'Long term relationship', 'gendernonconforming', 19, 50, 'I like it when you like, ngizbona ngingumfazi!', 'gendernonconforming people exclusively', 'Sanelly.jpeg', '-26.2056496000', '28.0361622000', 30, NULL, 30, 'samkelogigaba1@gmail.com', 60777, '$2b$10$HzXPveOXxy4.Wq/uQQdEz.18loc5kzQyZWO18.A0OuVSrRrHapcI2', NULL, 26, 0, 'music,netflix'),
('Lilly', NULL, 'gendernonconforming', 18, 30, 'I am a visual artist who specializes in dance ', 'anyone', 'Lilly.jpg', '-26.2056496000', '28.0361622000', 80, 6, 31, 'samkelogigaba1@gmail.com', 53917, '$2b$10$cBs/m1nDOs602OvOl1ipVeJ/Mhn12ox75hjp2vwlwkcBkK8qEra6.', NULL, 19, 0, 'food,music,politics,sports,netflix,family'),
('Brenda', 'Causual sex', 'genderfluid', 18, 30, 'Im down if youre down', 'gender fluid people exclusively', 'Brenda.jpg', '-26.2056496000', '28.0361622000', 10, NULL, 32, 'samkelogigaba1@gmail.com', 44527, '$2b$10$u0a99miy.fcLL9fWu1bbkOjHhMOGS/kjSvWEFio1HCIWfBpwYHkkG', NULL, 31, NULL, 'netflix'),
('Mandy', 'friendship', 'genderfluid', 18, 60, 'I love love', 'anyone', 'Mandy.jpg', '-26.2056496000', '28.0361622000', 70, NULL, 33, 'samkelogigaba1@gmail.com', 61972, '$2b$10$FJRLYOrYxReJsaDTPfLpiuOAugk895UdUwmhmeKYJAkJwL0D8hiw6', NULL, 23, 0, 'politics'),
('doowap', 'friendship', NULL, 18, 20, 'I am a dj who loves a good time', 'men exclusively', 'doowap.jpg', NULL, NULL, 10, NULL, 34, 'samkelogigaba1@gmail.com', 25049, '$2b$10$FGp2bit9MOZ6cwJU/5eNnuLZWc0J7frS1pDV9uN2pzWA9eoKN/cDe', NULL, 18, NULL, 'music'),
('Miguel', 'Causual sex', 'man', 18, 30, 'I am a student at Wits', 'gender fluid people exclusively', 'Miguel.jpg', '-26.2056496000', '28.0361622000', 10, NULL, 35, 'samkelogigaba1@gmail.com', 72325, '$2b$10$GtacyFe76Xj/PFegmOlRyuzbzyOs64wDWx97n3qGLiCEJmJVOzkJe', NULL, 20, NULL, 'politics'),
('Peter', 'Long term relationship', 'man', 21, 30, 'Lets eat food and watch a sad movie so I can do the yawn move they do in the movies', 'gendernonconforming people exclusively', 'Peter.jpg', '-26.2056496000', '28.0361622000', 20, NULL, 36, 'samkelogigaba1@gmail.com', 16353, '$2b$10$M4q9rLZCMSCEP91aWaxZZud4qSMEboB2Y0NGcu3H3GOTx9h23ye8K', NULL, 25, NULL, 'food,music,politics'),
('Vanilla', 'Long term relationship', 'woman', 21, 45, 'I like cheese ', 'gender fluid people exclusively', 'Vanilla.jpg', '-26.2056496000', '28.0361622000', 10, NULL, 37, 'samkelogigaba1@gmail.com', 34995, '$2b$10$1BIUFkrjkSUCnfbyarLTo.EPx0tKC8h5I6eMGNGrXaAcTBa8OR1dK', NULL, 23, NULL, 'sports,family'),
('Tebello', 'Long term relationship', 'man', 18, 23, 'God fearing man looking for juicy YOUNG people', 'women exclusively', 'Tebello.jpg', '-26.2056496000', '28.0361622000', 40, 0, 38, 'samkelogigaba1@gmail.com', 20046, '$2b$10$2h8YMgI54dRsC7ovWONHUO9hXXbIIX5c4xjjN94999gSiESRA2QEi', NULL, 28, 0, 'food,music,politics,sports,netflix,family'),
('Ntsiki', 'Long term relationship', 'other', 30, 45, 'I am a poet and activist', 'anyone', 'Ntsiki.jpg', '-26.2056496000', '28.0361622000', 10, 0, 39, 'samkelogigaba1@gmail.com', 88809, '$2b$10$n8lp98o6gzAacKphXU1BTeYRoDp0t4KbhucbDo1MkQqitbDqDdlf.', NULL, 34, NULL, 'music,politics,netflix,family');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
