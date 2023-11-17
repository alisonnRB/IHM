-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2023 at 07:20 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ihm`
--

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `id` int(11) NOT NULL,
  `id_user1` int(11) NOT NULL,
  `id_user2` int(11) NOT NULL,
  `texto` varchar(2000) NOT NULL,
  `tempo` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chats`
--

INSERT INTO `chats` (`id`, `id_user1`, `id_user2`, `texto`, `tempo`) VALUES
(9, 55, 52, 'oi, td bem?', '2023-10-30'),
(10, 52, 55, 'oi, td sim e com vc?', '2023-10-30'),
(11, 55, 52, 'ahh, eu to bem', '2023-10-30'),
(12, 55, 52, 'bom', '2023-10-30'),
(13, 55, 52, 'n sou bom com assunto', '2023-10-30'),
(14, 52, 55, 'kkkk eu tbm não', '2023-10-30'),
(15, 52, 55, 'mas, q faz?', '2023-10-30'),
(16, 55, 52, 'eu nada, e vc?', '2023-10-30'),
(17, 52, 55, 'to atoa kkk', '2023-10-30'),
(18, 52, 55, 'é de onde?', '2023-10-30'),
(19, 55, 52, 'do cu do mundo', '2023-10-30'),
(20, 52, 55, 'kskskskks acontece', '2023-10-30'),
(21, 55, 52, 'e vc? donde eres?', '2023-10-30'),
(22, 52, 55, 'tbmmm', '2023-10-30'),
(23, 52, 55, 'ksks oq vc gosta de fazer?', '2023-10-30'),
(24, 55, 52, 'ah sla, eu gosto de dormir skkssk', '2023-10-30'),
(25, 55, 52, 'ksksksk e vc?', '2023-10-30'),
(26, 55, 52, 'ver vc dormir', '2023-10-30'),
(27, 52, 55, 'eita poha', '2023-10-30'),
(28, 55, 52, 'brincadeira', '2023-10-30'),
(29, 52, 55, 'gosto de psicopatas', '2023-10-30'),
(30, 55, 52, 'uiui que dlç', '2023-10-30'),
(31, 52, 55, 'vc curte?', '2023-10-30'),
(32, 55, 52, 'até que curto', '2023-10-30'),
(33, 55, 52, 'mas tenho medo', '2023-10-30'),
(34, 55, 52, 'sabe, é estranho', '2023-10-30'),
(35, 52, 55, 'ahh sla, eu gosto', '2023-10-30'),
(36, 52, 55, 'BAFOMÉEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE', '2023-10-30'),
(37, 55, 52, 'SATANN', '2023-10-30'),
(38, 55, 52, 'CD VOCÊ MEU AMOR', '2023-10-30'),
(39, 52, 55, 'peraa, uvaa, maçã, salada mistaa', '2023-10-30'),
(40, 55, 52, 'XUCRUTE', '2023-10-30'),
(41, 52, 55, 'loloollololol', '2023-10-30'),
(42, 52, 55, 'CD o TACACÁ', '2023-10-31'),
(43, 50, 55, 'Mé', '2023-11-09'),
(44, 50, 52, 'Oi', '2023-11-09'),
(45, 50, 52, 'Foda né mana', '2023-11-09'),
(46, 52, 50, 'Oxi', '2023-11-09'),
(47, 50, 52, 'Mana, ta bugado o trem do tacaca', '2023-11-09'),
(48, 50, 52, 'Pois ta mulher', '2023-11-09'),
(49, 50, 55, 'Oxe', '2023-11-09'),
(50, 52, 50, 'Sla', '2023-11-09'),
(51, 50, 52, 'Tão ta', '2023-11-09'),
(52, 55, 50, 'Oi ', '2023-11-09'),
(53, 50, 55, 'Ola', '2023-11-09'),
(54, 50, 55, 'Meu chat está funcionando ', '2023-11-09'),
(55, 55, 50, 'Ó ', '2023-11-09'),
(56, 50, 55, 'Kkkk', '2023-11-09'),
(57, 50, 55, 'A', '2023-11-09'),
(58, 55, 50, '🫡', '2023-11-09'),
(59, 50, 55, '11', '2023-11-09'),
(60, 55, 50, '🫡', '2023-11-09'),
(61, 55, 50, 'Oi', '2023-11-09'),
(62, 50, 55, 'Oi', '2023-11-09'),
(63, 55, 50, 'Ta', '2023-11-09'),
(64, 50, 55, 'Recebeu?', '2023-11-09'),
(65, 55, 50, 'Oi', '2023-11-09'),
(66, 50, 55, 'Agr foi?', '2023-11-09');

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `tipo` varchar(40) NOT NULL,
  `id_ref` int(11) NOT NULL,
  `resposta` tinyint(1) NOT NULL,
  `texto` varchar(2000) NOT NULL,
  `id_resposta` int(11) NOT NULL,
  `tempo` date NOT NULL,
  `conversa` int(11) NOT NULL,
  `curtidas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `user`, `tipo`, `id_ref`, `resposta`, `texto`, `id_resposta`, `tempo`, `conversa`, `curtidas`) VALUES
(71, 50, 'livro', 69, 0, 'desgraçada', 0, '2023-10-07', 0, 0),
(72, 50, 'livro', 69, 1, 'mal sabe ela que eu escuto', 71, '2023-10-07', 71, 0),
(73, 52, 'livro', 69, 1, 'mas sabe ela que eu escuto que ela dix que me escuta', 72, '2023-10-07', 71, 0),
(74, 52, 'livro', 69, 0, 'doidinha', 72, '2023-10-07', 0, 0),
(75, 50, 'livro', 69, 1, 'mal sabe ela que eu escuto que ela diz que sabe que me escuta', 73, '2023-10-07', 71, 0),
(76, 52, 'livro', 69, 1, 'mal sabe ela que eu sei ela diz que escuta quando eu digo escuto o que ela diz', 75, '2023-10-07', 71, 0),
(77, 52, 'livro', 69, 1, 'vc vai perderrrr', 71, '2023-10-07', 71, 0),
(78, 50, 'livro', 69, 1, 'mal sabe ela que e... droga me perdi AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 76, '2023-10-07', 71, 0),
(79, 50, 'livro', 69, 1, 'vc né bem', 74, '2023-10-07', 74, 0),
(80, 50, 'livro', 125, 0, 'foda', 0, '2023-10-07', 0, 2),
(81, 50, 'livro', 124, 0, 'vaca', 0, '2023-10-07', 0, 1),
(82, 50, 'livro', 70, 0, 'oi', 0, '2023-10-08', 0, 1),
(83, 50, 'livro', 70, 0, 'asas', 0, '2023-10-08', 0, 0),
(84, 50, 'livro', 70, 0, 'asas', 0, '2023-10-08', 0, 0),
(85, 50, 'livro', 70, 1, 'asasa', 82, '2023-10-08', 82, 0),
(86, 50, 'livro', 70, 1, 'fmdkm', 82, '2023-10-08', 82, 0),
(87, 50, 'livro', 70, 1, 'dwsdw', 86, '2023-10-08', 82, 0),
(88, 50, 'livro', 70, 1, 'dwsdw', 86, '2023-10-08', 82, 0),
(89, 52, 'livro', 70, 1, 'oiio', 85, '2023-10-08', 82, 0),
(90, 52, 'livro', 70, 1, 'dasdsa', 88, '2023-10-08', 82, 0),
(91, 52, 'livro', 70, 0, 'wsdd', 0, '2023-10-08', 0, 0),
(92, 52, 'livro', 70, 1, 'sim mana', 83, '2023-10-08', 83, 0),
(93, 50, 'livro', 68, 0, 'oi', 0, '2023-10-09', 0, 2),
(94, 50, 'livro', 68, 1, 'fdf', 93, '2023-10-09', 93, 0),
(95, 50, 'livro', 68, 0, '', 0, '2023-10-09', 0, 0),
(96, 50, 'livro', 70, 1, 'aaaaaaaa', 82, '2023-10-09', 82, 0),
(97, 50, 'livro', 70, 1, 'aaaaaaaa', 82, '2023-10-09', 82, 0),
(98, 50, 'livro', 70, 1, 'aaaaaaaa', 82, '2023-10-09', 82, 0),
(99, 50, 'livro', 70, 1, 'aaaaaaaa', 82, '2023-10-09', 82, 0),
(100, 50, 'livro', 70, 1, 'aaaaaaaa', 82, '2023-10-09', 82, 0),
(101, 50, 'livro', 70, 1, 'aaaaaaaa', 82, '2023-10-09', 82, 0),
(102, 50, 'livro', 70, 1, 'fdef', 82, '2023-10-09', 82, 0),
(103, 50, 'livro', 68, 1, 'a', 95, '2023-10-09', 95, 0),
(104, 52, 'livro', 71, 0, 'hello', 0, '2023-10-12', 0, 3),
(105, 52, 'livro', 71, 1, 'hi', 104, '2023-10-12', 104, 1),
(106, 52, 'livro', 71, 1, 'hi', 104, '2023-10-12', 104, 0),
(107, 52, 'livro', 122, 0, 'cgcjhvjkvjkb', 0, '2023-10-12', 0, 2),
(108, 52, 'livro', 131, 0, 'oxi', 0, '2023-10-12', 0, 0),
(109, 50, 'livro', 123, 0, 'kkk legal', 0, '2023-10-14', 0, 0),
(110, 50, 'livro', 71, 0, 'kk', 0, '2023-10-19', 0, 2),
(111, 55, 'livro', 145, 0, 'é verdade', 0, '2023-10-19', 0, 1),
(112, 50, 'livro', 145, 0, 'melhor livro que ja li', 0, '2023-10-19', 0, 1),
(113, 52, 'livro', 147, 0, 'de mais', 0, '2023-10-20', 0, 1),
(114, 52, 'livro', 145, 0, 'bem clean', 0, '2023-10-24', 0, 2),
(115, 52, 'livro', 148, 0, 'MDSSSS, como podeee um livro tão explicativoooooo', 0, '2023-10-24', 0, 1),
(127, 52, 'livro', 124, 1, 'VACA É VC MEU AMOOOOOOORRR, SE LIGAA QUERIDA.', 81, '2023-10-31', 81, 0),
(128, 55, 'livro', 71, 1, 'jo', 106, '2023-11-02', 104, 0),
(129, 55, 'livro', 71, 1, 'jo', 106, '2023-11-02', 104, 0),
(130, 55, 'livro', 71, 0, 'tão ta', 0, '2023-11-03', 0, 1),
(131, 55, 'livro', 71, 1, 'acontece', 104, '2023-11-03', 104, 0),
(132, 55, 'livro', 71, 1, 'acontece', 104, '2023-11-03', 104, 0),
(133, 55, 'livro', 71, 1, 'acontece', 104, '2023-11-03', 104, 0),
(134, 55, 'livro', 71, 1, 'mds', 104, '2023-11-03', 104, 0),
(135, 55, 'livro', 71, 1, 'ée gatinha', 104, '2023-11-03', 104, 0),
(136, 55, 'livro', 145, 0, 'nsdbnifubidfbvpdivvvvvvvvvvvvvvvvvvvvvvvvv', 0, '2023-11-03', 0, 1),
(137, 55, 'livro', 145, 1, 'apbifuuuuuuuuuuuuuuuuuuuusfdaaafadsffa', 136, '2023-11-03', 136, 1),
(138, 50, 'livro', 145, 1, 'N sei oq eu to fazendo... só sei que to aqui, mds', 137, '2023-11-03', 136, 1),
(139, 50, 'livro', 125, 1, 'É foda mesmoooooooo', 80, '2023-11-03', 80, 1),
(140, 56, 'livro', 125, 0, 'Tá meio bugado', 0, '2023-11-03', 0, 1),
(141, 52, 'livro', 71, 1, 'Então tá bom', 130, '2023-11-03', 130, 1),
(142, 55, 'coment', 27, 0, 'oi', 0, '2023-11-08', 0, 0),
(143, 55, 'coment', 27, 1, 'olaa', 142, '2023-11-08', 142, 0),
(144, 55, 'coment', 27, 1, 'oie', 142, '2023-11-08', 142, 0),
(145, 55, 'coment', 27, 1, '', 142, '2023-11-08', 142, 0),
(146, 55, 'coment', 26, 0, 'kkkk', 0, '2023-11-08', 0, 0),
(147, 56, 'coment', 27, 0, 'Wtf', 0, '2023-11-08', 0, 0),
(148, 50, 'coment', 24, 0, 'Man', 0, '2023-11-09', 0, 0),
(149, 55, 'coment', 29, 0, 'oi', 0, '2023-11-09', 0, 0),
(150, 55, 'coment', 29, 0, 'dd', 0, '2023-11-09', 0, 0),
(151, 55, 'coment', 29, 1, 'ddd', 149, '2023-11-09', 149, 0),
(152, 55, 'publi', 29, 0, 'oi', 0, '2023-11-09', 0, 2),
(153, 50, 'publi', 27, 0, 'Udhd', 0, '2023-11-09', 0, 0),
(154, 62, 'livro', 153, 0, 'a', 0, '2023-11-17', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `curtidas`
--

CREATE TABLE `curtidas` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_ref` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `coment` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `curtidas`
--

INSERT INTO `curtidas` (`id`, `id_user`, `id_ref`, `tipo`, `coment`) VALUES
(81, 50, 70, 'livro', 0),
(105, 50, 70, 'livro', 82),
(112, 50, 68, 'livro', 93),
(135, 52, 71, 'livro', 104),
(139, 52, 68, 'livro', 93),
(140, 50, 68, 'livro', 0),
(148, 52, 124, 'livro', 0),
(149, 52, 122, 'livro', 0),
(150, 52, 122, 'livro', 107),
(151, 52, 68, 'livro', 0),
(153, 50, 123, 'livro', 0),
(156, 50, 122, 'livro', 107),
(157, 50, 122, 'livro', 0),
(162, 50, 71, 'livro', 0),
(163, 50, 73, 'livro', 0),
(165, 50, 71, 'livro', 104),
(166, 50, 71, 'livro', 105),
(167, 50, 71, 'livro', 110),
(168, 52, 124, 'livro', 81),
(170, 50, 145, 'livro', 0),
(175, 52, 147, 'livro', 113),
(176, 52, 145, 'livro', 114),
(177, 52, 148, 'livro', 0),
(178, 52, 148, 'livro', 115),
(179, 50, 148, 'livro', 0),
(181, 50, 15, 'livro', 118),
(182, 50, 15, 'livro', 120),
(200, 55, 125, 'livro', 80),
(236, 52, 145, 'livro', 112),
(376, 55, 71, 'livro', 110),
(377, 55, 71, 'livro', 104),
(404, 55, 71, 'livro', 0),
(426, 50, 145, 'livro', 114),
(429, 50, 145, 'livro', 136),
(434, 50, 145, 'livro', 137),
(435, 50, 145, 'livro', 138),
(459, 50, 125, 'livro', 139),
(460, 50, 125, 'livro', 0),
(461, 56, 125, 'livro', 0),
(462, 56, 125, 'livro', 80),
(463, 50, 125, 'livro', 140),
(464, 52, 71, 'livro', 0),
(479, 52, 145, 'livro', 0),
(480, 55, 145, 'livro', 0),
(482, 55, 145, 'livro', 111),
(485, 50, 71, 'livro', 130),
(487, 50, 71, 'livro', 141),
(518, 55, 29, 'publi', 0),
(519, 50, 27, 'publi', 0),
(523, 55, 29, 'publi', 152),
(524, 50, 29, 'publi', 152),
(525, 50, 29, 'publi', 0);

-- --------------------------------------------------------

--
-- Table structure for table `enquete`
--

CREATE TABLE `enquete` (
  `id` int(11) NOT NULL,
  `titulo` varchar(1000) NOT NULL,
  `quest` varchar(1000) NOT NULL,
  `votos` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enquete`
--

INSERT INTO `enquete` (`id`, `titulo`, `quest`, `votos`) VALUES
(14, 'VC GOSTA DO DOG??', '{\"0\":\"SIM\",\"1\":\"N\\u00c3O\",\"2\":\"N\\u00c3O SEI\",\"3\":\"\"}', '{\"0\":0,\"1\":2,\"2\":1,\"3\":0}'),
(15, 'oq achou dessa merda?😶', '{\"0\":\"gostei\\ud83e\\udd70\",\"1\":\"odiei\\ud83d\\ude11\",\"2\":\"\",\"3\":\"\"}', '{\"0\":2,\"1\":1,\"2\":0,\"3\":0}'),
(16, 'VC VAI USAR O IHM??', '{\"0\":\"N\\u00c3O\",\"1\":\"NUNCA MAIS\",\"2\":\"S\\u00d3 TAPADO PRA USAR\",\"3\":\"VOU SIM\"}', '{\"0\":2,\"1\":0,\"2\":0,\"3\":1}'),
(17, '...---...', '{\"0\":\"...---...\",\"1\":\"MLK ESTRANHO\",\"2\":\"\",\"3\":\"\"}', '{\"0\":1,\"1\":2,\"2\":0,\"3\":0}'),
(18, 'Vc gostou??', '{\"0\":\"Sim\",\"1\":\"N\\u00e3o \",\"2\":\"\",\"3\":\"\"}', '{\"0\":2,\"1\":2,\"2\":0,\"3\":0}'),
(19, 'Ihl?', '{\"0\":\"Ihl!\",\"1\":\"??\",\"2\":\"\",\"3\":\"\"}', '{\"0\":1,\"1\":3,\"2\":0,\"3\":0}'),
(20, 'Morreu?', '{\"0\":\"Sim\",\"1\":\"No\",\"2\":\"\",\"3\":\"\"}', '{\"0\":1,\"1\":2,\"2\":0,\"3\":0}'),
(21, 'td bem?', '{\"0\":\"ss\",\"1\":\"nn\",\"2\":\"vsfd mlk\",\"3\":\"\"}', '{\"0\":0,\"1\":2,\"2\":1,\"3\":0}');

-- --------------------------------------------------------

--
-- Table structure for table `favoritos`
--

CREATE TABLE `favoritos` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `id_livro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favoritos`
--

INSERT INTO `favoritos` (`id`, `user_id`, `id_livro`) VALUES
(14, 52, 68),
(15, 52, 70),
(17, 50, 123),
(18, 50, 122),
(20, 50, 71),
(21, 50, 73),
(22, 50, 145),
(24, 52, 148),
(27, 55, 73),
(46, 50, 125),
(47, 56, 125),
(50, 52, 71),
(60, 52, 145),
(61, 55, 145);

-- --------------------------------------------------------

--
-- Table structure for table `feed_publi`
--

CREATE TABLE `feed_publi` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `texto` text NOT NULL,
  `ref_livro` int(11) NOT NULL,
  `tempo` date DEFAULT NULL,
  `enquete` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feed_publi`
--

INSERT INTO `feed_publi` (`id`, `user_id`, `texto`, `ref_livro`, `tempo`, `enquete`) VALUES
(21, 52, 'KARALHO QUE CACHORRO FILHA DA PUTA MANÉ', 73, '2023-10-28', 14),
(22, 52, 'O poste do cara de cima é o mais filha da puta, cuzão, trouxa, desgraçado, corno, viado, fedido, feio, nojento, asqueroso, burro, abostado e preconceituoso que ja vi... Não tolerarei, tal desrespeito nesta casa, isso vai contra o decoro parlamentar, eu ja me cansei desses deputados de extrema direit', 0, '2023-10-28', 0),
(23, 52, 'que livro chatooooo🙄', 124, '2023-10-28', 15),
(24, 52, 'DEPOIS DESSE LIVRO, JURO QUE NÃO ENTRO MIAS NESSA REDE SOCIAL BUGADA', 71, '2023-10-28', 16),
(25, 52, 'TO CASADA E TESTAR ENQUETE SOCORRO', 0, '2023-10-28', 17),
(26, 50, 'KARALHOOO, QUE LIVRO BOM MANNN', 73, '2023-11-06', 18),
(27, 50, 'Ihl', 147, '2023-11-07', 19),
(28, 52, 'Kkkkkkkkkkkkk', 71, '2023-11-07', 20),
(29, 55, 'oi gente, sou novo aqui', 0, '2023-11-09', 21);

-- --------------------------------------------------------

--
-- Table structure for table `genero`
--

CREATE TABLE `genero` (
  `id` int(11) NOT NULL,
  `PT` varchar(40) NOT NULL,
  `EN` varchar(50) NOT NULL,
  `ES` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `genero`
--

INSERT INTO `genero` (`id`, `PT`, `EN`, `ES`) VALUES
(1, 'FICÇÃO', 'FICTION', 'FICCIÓN'),
(2, 'POESIA', 'POETRY', 'POESÍA'),
(3, 'DRAMA', 'DRAMA', 'DRAMA'),
(4, 'HORROR', 'HORROR', 'HORROR'),
(5, 'AUTOAJUDA', 'SELF-HELP', 'AUTOAYUDA'),
(6, 'SUSPENSE', 'THRILLER', 'SUSPENSO'),
(7, 'ROMANCE', 'ROMANCE', 'ROMANCE'),
(8, ' AVENTURA', 'ADVENTURE', 'AVENTURA'),
(9, 'HUMOR', 'HUMOR', 'HUMOR'),
(10, 'CRÔNICA', 'CHRONICLE', 'CRÓNICA'),
(11, 'FANTASIA', 'FANTASY', 'FANTASÍA'),
(12, 'MISTÉRIO', 'MYSTERY', 'MISTERIO'),
(13, 'CRIMINAL', 'CRIMINAL', 'CRIMINAL'),
(14, 'INFANTOJUVENIL', 'JUVENILE', 'INFANTIL'),
(15, 'NÃO-FICÇÃO', 'NON-FICTION', 'NO FICCIÓN'),
(16, 'BIOGRAFIA ', 'BIOGRAPHY', 'BIOGRAFÍA'),
(17, 'DISTOPIA', 'DYSTOPIA', 'DISTOPÍA');

-- --------------------------------------------------------

--
-- Table structure for table `livro_publi`
--

CREATE TABLE `livro_publi` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `imagem` varchar(1000) NOT NULL,
  `tempo` date NOT NULL,
  `genero` varchar(45) NOT NULL,
  `texto` varchar(300) NOT NULL,
  `pronto` varchar(1000) NOT NULL,
  `sinopse` varchar(1000) NOT NULL,
  `classificacao` varchar(50) NOT NULL,
  `publico` tinyint(1) NOT NULL,
  `finalizado` tinyint(1) NOT NULL,
  `tema` varchar(50) NOT NULL,
  `tags` varchar(2000) NOT NULL,
  `curtidas` int(11) NOT NULL,
  `favoritos` int(11) NOT NULL,
  `visus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `livro_publi`
--

INSERT INTO `livro_publi` (`id`, `user_id`, `nome`, `imagem`, `tempo`, `genero`, `texto`, `pronto`, `sinopse`, `classificacao`, `publico`, `finalizado`, `tema`, `tags`, `curtidas`, `favoritos`, `visus`) VALUES
(68, 50, 'steven universo fake', '50_1694899893.jpeg', '2023-10-18', '[\"1\",\"12\",\"15\"]', '{\"1\":\"Elfo\",\"2\":\"capitulo Novo\"}', '{\"1\":1}', '<p>qwqw</p>', 'dezoito', 0, 0, '#352338', '{\"0\":\"bruno\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 2, 1, 21),
(70, 50, 'alison amarelo', '50_1694899923.jpeg', '2023-10-18', '[\"7\",\"10\",\"14\"]', '{\"1\":\"capitulo Novo\"}', '{\"1\":1}', '<p>Neste romance emocionante, Alison, uma jovem de espírito livre com cabelos amarelos brilhantes, parte em uma jornada de autodescoberta e aventura. Em um mundo onde a conformidade é a norma, ela se destaca como um raio de sol. Ao seguir seu coração e suas paixões, Alison desencadeia uma série de eventos que a levam a lugares inesperados e a pessoas que mudarão sua vida para sempre. \"Alison Amarelo\" é uma história inspiradora sobre coragem, autenticidade e a busca pelo verdadeiro significado da vida.</p>', '', 0, 1, '#087F97', '{\"0\":\"\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 1, 1, 10),
(71, 50, 'miguelias', '50_1694899997.jpeg', '2023-10-06', '[\"8\",\"17\"]', '[]', '[]', '<p>é uma história de superação e determinação que segue a jornada de um jovem chamado Miguel. Criado em um bairro difícil, Miguel enfrenta desafios extraordinários em sua busca por um futuro melhor. Inspirado por seu amor pela música e um antigo mistério de família, ele embarca em uma emocionante aventura que o leva a descobertas surpreendentes sobre seu passado e a verdade sobre o poder da perseverança. Miguelhias é uma história cativante sobre sonhos, família e a busca pela identidade.</p>', '', 1, 0, '#e6006f', '', 3, 2, 799),
(73, 50, 'cachorro do bruno', '50_1694901075.jpeg', '2023-10-03', '[\"2\",\"3\"]', '[]', '[]', '<p>A história de Max, o cachorro do Bruno, é uma aventura repleta de amizade e diversão. Juntos, eles enfrentam desafios e fazem descobertas emocionantes enquanto exploram o mundo à sua maneira única. Uma história cativante sobre a ligação especial entre um homem e seu melhor amigo de quatro patas.</p>', '', 1, 0, '#087F97', '', 1, 2, 16),
(123, 52, 'eu vou tomar um tacaca', '52_1696611831.jpeg', '2023-10-06', '[\"3\",\"7\",\"14\"]', '{\"1\":\"capitulo Novo\"}', '{\"1\":1}', '', 'livre', 0, 0, '#1a3736', '', 1, 1, 22),
(124, 52, 'xin', '52_1696611879.jpeg', '2023-10-31', '[\"4\",\"8\"]', '{\"1\":\"BAFOM\\u00c9\"}', '{\"1\":1}', '<p>BAFOMÉEEEEEEEEEEEEEEEEEEE</p>', 'livre', 1, 0, '#700995', '{\"0\":\"BAFOMÉ\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 1, 0, 24),
(125, 50, 'urinol', '50_1696699628.jpeg', '2023-10-07', '[\"2\",\"4\",\"15\"]', '{\"1\":\"\\u00e9 sobre isso\"}', '{\"1\":1}', '<p>Este livro explora as experiências e reflexões humanas que ocorrem nos banheiros públicos. De forma inesperada e humorística, ele revela as histórias, pensamentos e situações engraçadas que todos nós enfrentamos nesses espaços compartilhados. Uma leitura divertida que nos faz enxergar o cotidiano de uma maneira única.</p>', 'livre', 1, 0, '#efae1f', '', 3, 3, 132),
(131, 52, 'cuguy', '52_1697143886.jpeg', '2023-10-12', '[\"3\"]', '[]', '[]', '', 'livre', 0, 0, '#d20f0f', '{\"0\":\"\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 0, 0, 0),
(145, 55, 'deus está morto', '55_1697644044.jpg', '2023-10-18', '[\"2\",\"8\",\"15\"]', '{\"1\":\"capitulo Novo\",\"2\":\"era\",\"3\":\"capitulo Novo\",\"4\":\"capitulo Velho\"}', '{\"1\":1,\"2\":1,\"3\":1,\"4\":0}', '<p><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Deus é o karai, deus é o karaiii</font></font></p>', '', 1, 0, '#940896', '{\"0\":\"\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 3, 3, 108),
(147, 52, 'Observe', '52_1697773974.jpeg', '2023-10-20', '[\"14\"]', '{\"1\":\"lindoo\"}', '{\"1\":1}', '', '', 1, 0, '#ff0000', '{\"0\":\"bob\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 0, 0, 20),
(148, 52, 'h2o', '52_1698171840.png', '2023-10-24', '[\"3\",\"8\",\"13\"]', '{\"1\":\"escasses\"}', '{\"1\":1}', '<p>aguá molhada e potavel</p>', '', 1, 1, '#5e2f08', '{\"0\":\"morte\",\"1\":\"enchente\",\"2\":\"brasil\",\"3\":\"real\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 2, 1, 14),
(149, 50, 'O romance de kauã ', '50_1699215954.jpg', '2023-11-05', '[\"9\",\"10\",\"17\"]', '{\"1\":\"capitulo Novo\"}', '[]', '', '', 0, 0, '', '', 0, 0, 0),
(150, 55, 'xotaaaaaaaaaaaaaaaaaaaaaaaa', '55_1699216234.PNG', '2023-11-05', '[\"12\",\"13\",\"15\"]', '{\"1\":\"capitulo Novo\"}', '[]', '<p>fdgfdg</p>', '', 0, 0, '', '', 0, 0, 0),
(151, 52, 'Radinho', '52_1699216626.png', '2023-11-05', '[\"6\",\"13\",\"15\"]', '[]', '[]', '<p>&nbsp;Um apos um longo período de assassinatos, voltam a ocorrer crimes q são anunciados em um rádio.</p>', '', 0, 0, '', '', 0, 0, 0),
(152, 62, 'aaaaa', '62_1700188977.png', '2023-11-16', '[\"5\",\"10\"]', '[]', '[]', '', '152', 0, 0, '', '', 0, 0, 0),
(153, 62, 'aaaaa', '62_1700188979.png', '2023-11-16', '[\"5\",\"10\"]', '[]', '[]', '', '153', 0, 0, '', '', 0, 0, 4);

-- --------------------------------------------------------

--
-- Table structure for table `seguidores`
--

CREATE TABLE `seguidores` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `id_ref` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seguidores`
--

INSERT INTO `seguidores` (`id`, `user_id`, `id_ref`) VALUES
(30, 52, 55),
(33, 52, 50),
(84, 56, 52),
(86, 50, 56),
(87, 50, 55),
(88, 50, 52),
(93, 56, 55),
(94, 56, 50),
(98, 55, 50),
(99, 55, 52),
(102, 62, 50);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(1000) NOT NULL,
  `fotoPerfil` varchar(1000) NOT NULL,
  `genero` varchar(1000) NOT NULL,
  `seguidores` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `fotoPerfil`, `genero`, `seguidores`) VALUES
(50, 'alisu', 'alisonkpops@gmail.com', 'minhasenha833', '50_1698866692.jpg', '[\"1\",\"3\",\"4\"]', 4),
(52, 'BAFOME', 'alisonkpopss@gmail.com', 'minhasenha833', '52_1697671142.jpg', '[\"3\",\"5\",\"6\",\"7\",\"11\",\"13\"]', 3),
(55, 'miau', 'miau@gmail.com', 'au', '55_1699065339.jpg', '[\"0\",\"3\",\"5\",\"6\",\"9\"]', 3),
(56, 'Rosenara', 'rosenarabatista03888@gmail.com', 'rose', '56_1699051404.jpg', '[\"6\",\"8\",\"9\"]', 1),
(62, 'alison', 'krl@gmail.com', '$2y$10$IWiLxTQhUT8giXvJcK4vvOf2eETyFnXrFFhS3v3h2JJFU2AgTT0xi', '', '[\"1\",\"9\",\"11\"]', 0);

-- --------------------------------------------------------

--
-- Table structure for table `votacao`
--

CREATE TABLE `votacao` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `id_ref` int(11) NOT NULL,
  `chave` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `votacao`
--

INSERT INTO `votacao` (`id`, `user_id`, `id_ref`, `chave`) VALUES
(23, 50, 17, 0),
(26, 52, 16, 3),
(28, 52, 14, 1),
(29, 52, 15, 1),
(30, 52, 17, 1),
(45, 55, 14, 2),
(46, 55, 15, 0),
(47, 55, 16, 0),
(48, 55, 17, 1),
(49, 50, 15, 0),
(50, 55, 19, 1),
(51, 55, 18, 0),
(52, 52, 18, 1),
(53, 56, 19, 1),
(54, 52, 19, 1),
(55, 52, 20, 0),
(56, 50, 19, 0),
(57, 50, 20, 1),
(83, 52, 21, 2),
(86, 55, 21, 1),
(87, 50, 18, 1),
(88, 50, 21, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `curtidas`
--
ALTER TABLE `curtidas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquete`
--
ALTER TABLE `enquete`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feed_publi`
--
ALTER TABLE `feed_publi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `livro_publi`
--
ALTER TABLE `livro_publi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `seguidores`
--
ALTER TABLE `seguidores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `votacao`
--
ALTER TABLE `votacao`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=155;

--
-- AUTO_INCREMENT for table `curtidas`
--
ALTER TABLE `curtidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=528;

--
-- AUTO_INCREMENT for table `enquete`
--
ALTER TABLE `enquete`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `feed_publi`
--
ALTER TABLE `feed_publi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `genero`
--
ALTER TABLE `genero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `livro_publi`
--
ALTER TABLE `livro_publi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- AUTO_INCREMENT for table `seguidores`
--
ALTER TABLE `seguidores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `votacao`
--
ALTER TABLE `votacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
