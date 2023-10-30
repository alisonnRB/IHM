-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 30/10/2023 às 18:01
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ihm`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `chats`
--

CREATE TABLE `chats` (
  `id` int(11) NOT NULL,
  `id_user1` int(11) NOT NULL,
  `id_user2` int(11) NOT NULL,
  `texto` varchar(2000) NOT NULL,
  `tempo` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `chats`
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
(39, 52, 55, 'peraa, uvaa, maçã, salada mistaa', '2023-10-30');

-- --------------------------------------------------------

--
-- Estrutura para tabela `comentarios`
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
-- Despejando dados para a tabela `comentarios`
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
(105, 52, 'livro', 71, 1, 'hi', 104, '2023-10-12', 104, 2),
(106, 52, 'livro', 71, 1, 'hi', 104, '2023-10-12', 104, 0),
(107, 52, 'livro', 122, 0, 'cgcjhvjkvjkb', 0, '2023-10-12', 0, 2),
(108, 52, 'livro', 131, 0, 'oxi', 0, '2023-10-12', 0, 0),
(109, 50, 'livro', 123, 0, 'kkk legal', 0, '2023-10-14', 0, 0),
(110, 50, 'livro', 71, 0, 'kk', 0, '2023-10-19', 0, 2),
(111, 55, 'livro', 145, 0, 'é verdade', 0, '2023-10-19', 0, 1),
(112, 50, 'livro', 145, 0, 'melhor livro que ja li', 0, '2023-10-19', 0, 0),
(113, 52, 'livro', 147, 0, 'de mais', 0, '2023-10-20', 0, 1),
(114, 52, 'livro', 145, 0, 'bem clean', 0, '2023-10-24', 0, 1),
(115, 52, 'livro', 148, 0, 'MDSSSS, como podeee um livro tão explicativoooooo', 0, '2023-10-24', 0, 1),
(116, 52, 'coment', 16, 0, 'asas', 0, '2023-10-26', 0, 0),
(117, 52, 'coment', 16, 0, 'sla', 0, '2023-10-26', 0, 0),
(118, 52, 'coment', 15, 0, 'aaaa', 0, '2023-10-26', 0, 1),
(119, 50, 'coment', 15, 0, 'miau', 0, '2023-10-26', 0, 0),
(120, 50, 'coment', 15, 1, 'xota', 118, '2023-10-26', 118, 1),
(121, 50, 'coment', 16, 0, 'lana e xamuel', 0, '2023-10-26', 0, 0),
(122, 55, 'coment', 15, 0, 'tururu', 0, '2023-10-26', 0, 0),
(123, 52, 'coment', 15, 0, 'rtwe', 0, '2023-10-26', 0, 0),
(124, 52, 'coment', 15, 1, 'dfdd', 120, '2023-10-26', 118, 0),
(125, 52, 'coment', 19, 0, 'ain como eu tô bandida', 0, '2023-10-27', 0, 0),
(126, 52, 'coment', 19, 1, '❤❤❤❤👌😘😜🤦‍♂️🤦‍♀️🎶🎂', 125, '2023-10-27', 125, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `curtidas`
--

CREATE TABLE `curtidas` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_ref` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `coment` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `curtidas`
--

INSERT INTO `curtidas` (`id`, `id_user`, `id_ref`, `tipo`, `coment`) VALUES
(81, 50, 70, 'livro', 0),
(105, 50, 70, 'livro', 82),
(106, 50, 125, 'livro', 80),
(112, 50, 68, 'livro', 93),
(135, 52, 71, 'livro', 104),
(139, 52, 68, 'livro', 93),
(140, 50, 68, 'livro', 0),
(147, 52, 71, 'livro', 0),
(148, 52, 124, 'livro', 0),
(149, 52, 122, 'livro', 0),
(150, 52, 122, 'livro', 107),
(151, 52, 68, 'livro', 0),
(153, 50, 123, 'livro', 0),
(156, 50, 122, 'livro', 107),
(157, 50, 122, 'livro', 0),
(158, 55, 145, 'livro', 0),
(162, 50, 71, 'livro', 0),
(163, 50, 73, 'livro', 0),
(164, 50, 50, '71', 0),
(165, 50, 71, 'livro', 104),
(166, 50, 71, 'livro', 105),
(167, 50, 71, 'livro', 110),
(168, 52, 124, 'livro', 81),
(169, 50, 145, 'livro', 111),
(170, 50, 145, 'livro', 0),
(171, 55, 71, 'livro', 104),
(172, 55, 71, 'livro', 105),
(173, 55, 71, 'livro', 110),
(174, 55, 71, 'livro', 0),
(175, 52, 147, 'livro', 113),
(176, 52, 145, 'livro', 114),
(177, 52, 148, 'livro', 0),
(178, 52, 148, 'livro', 115),
(179, 50, 148, 'livro', 0),
(181, 50, 15, 'livro', 118),
(182, 50, 15, 'livro', 120),
(200, 55, 125, 'livro', 80),
(226, 52, 18, 'coment', 0),
(234, 52, 20, 'coment', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `enquete`
--

CREATE TABLE `enquete` (
  `id` int(11) NOT NULL,
  `titulo` varchar(1000) NOT NULL,
  `quest` varchar(1000) NOT NULL,
  `votos` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `enquete`
--

INSERT INTO `enquete` (`id`, `titulo`, `quest`, `votos`) VALUES
(14, 'VC GOSTA DO DOG??', '{\"0\":\"SIM\",\"1\":\"N\\u00c3O\",\"2\":\"N\\u00c3O SEI\",\"3\":\"\"}', '{\"0\":0,\"1\":1,\"2\":1,\"3\":0}'),
(15, 'oq achou dessa merda?😶', '{\"0\":\"gostei\\ud83e\\udd70\",\"1\":\"odiei\\ud83d\\ude11\",\"2\":\"\",\"3\":\"\"}', '{\"0\":1,\"1\":1,\"2\":0,\"3\":0}'),
(16, 'VC VAI USAR O IHM??', '{\"0\":\"N\\u00c3O\",\"1\":\"NUNCA MAIS\",\"2\":\"S\\u00d3 TAPADO PRA USAR\",\"3\":\"VOU SIM\"}', '{\"0\":2,\"1\":0,\"2\":0,\"3\":1}'),
(17, '...---...', '{\"0\":\"...---...\",\"1\":\"MLK ESTRANHO\",\"2\":\"\",\"3\":\"\"}', '{\"0\":1,\"1\":2,\"2\":0,\"3\":0}');

-- --------------------------------------------------------

--
-- Estrutura para tabela `favoritos`
--

CREATE TABLE `favoritos` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `id_livro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `favoritos`
--

INSERT INTO `favoritos` (`id`, `user_id`, `id_livro`) VALUES
(14, 52, 68),
(15, 52, 70),
(17, 50, 123),
(18, 50, 122),
(20, 50, 71),
(21, 50, 73),
(22, 50, 145),
(23, 55, 71),
(24, 52, 148);

-- --------------------------------------------------------

--
-- Estrutura para tabela `feed_publi`
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
-- Despejando dados para a tabela `feed_publi`
--

INSERT INTO `feed_publi` (`id`, `user_id`, `texto`, `ref_livro`, `tempo`, `enquete`) VALUES
(21, 52, 'KARALHO QUE CACHORRO FILHA DA PUTA MANÉ', 73, '2023-10-28', 14),
(22, 52, 'O poste do cara de cima é o mais filha da puta, cuzão, trouxa, desgraçado, corno, viado, fedido, feio, nojento, asqueroso, burro, abostado e preconceituoso que ja vi... Não tolerarei, tal desrespeito nesta casa, isso vai contra o decoro parlamentar, eu ja me cansei desses deputados de extrema direit', 0, '2023-10-28', 0),
(23, 52, 'que livro chatooooo🙄', 124, '2023-10-28', 15),
(24, 52, 'DEPOIS DESSE LIVRO, JURO QUE NÃO ENTRO MIAS NESSA REDE SOCIAL BUGADA', 71, '2023-10-28', 16),
(25, 52, 'TO CASADA E TESTAR ENQUETE SOCORRO', 0, '2023-10-28', 17);

-- --------------------------------------------------------

--
-- Estrutura para tabela `genero`
--

CREATE TABLE `genero` (
  `id` int(11) NOT NULL,
  `nome` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `genero`
--

INSERT INTO `genero` (`id`, `nome`) VALUES
(1, 'FICÇÃO'),
(2, 'POESIA'),
(3, 'DRAMA'),
(4, 'HORROR'),
(5, 'AUTOAJUDA'),
(6, 'SUSPENSE'),
(7, 'ROMANCE'),
(8, ' AVENTURA'),
(9, 'HUMOR'),
(10, 'CRÔNICA'),
(11, 'FANTASIA'),
(12, 'MISTÉRIO'),
(13, 'CRIMINAL'),
(14, 'INFANTOJUVENIL'),
(15, 'NÃO-FICÇÃO'),
(16, 'BIOGRAFIA '),
(17, 'DISTOPIA');

-- --------------------------------------------------------

--
-- Estrutura para tabela `livro_publi`
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
-- Despejando dados para a tabela `livro_publi`
--

INSERT INTO `livro_publi` (`id`, `user_id`, `nome`, `imagem`, `tempo`, `genero`, `texto`, `pronto`, `sinopse`, `classificacao`, `publico`, `finalizado`, `tema`, `tags`, `curtidas`, `favoritos`, `visus`) VALUES
(68, 50, 'steven universo fake', '50_1694899893.jpeg', '2023-10-18', '[\"1\",\"12\",\"15\"]', '{\"1\":\"qwjhcv\",\"2\":\"capitulo Novo\"}', '{\"1\":0}', '<p>qwqw</p>', 'dezoito', 0, 0, '#352338', '{\"0\":\"bruno\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 2, 1, 17),
(70, 50, 'alison amarelo', '50_1694899923.jpeg', '2023-10-18', '[\"7\",\"10\",\"14\"]', '{\"1\":\"capitulo Novo\"}', '', '<p>Neste romance emocionante, Alison, uma jovem de espírito livre com cabelos amarelos brilhantes, parte em uma jornada de autodescoberta e aventura. Em um mundo onde a conformidade é a norma, ela se destaca como um raio de sol. Ao seguir seu coração e suas paixões, Alison desencadeia uma série de eventos que a levam a lugares inesperados e a pessoas que mudarão sua vida para sempre. \"Alison Amarelo\" é uma história inspiradora sobre coragem, autenticidade e a busca pelo verdadeiro significado da vida.</p>', '', 0, 1, '#087F97', '{\"0\":\"\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 1, 1, 10),
(71, 50, 'miguelias', '50_1694899997.jpeg', '2023-10-06', '[\"8\",\"17\"]', '[]', '[]', '<p>é uma história de superação e determinação que segue a jornada de um jovem chamado Miguel. Criado em um bairro difícil, Miguel enfrenta desafios extraordinários em sua busca por um futuro melhor. Inspirado por seu amor pela música e um antigo mistério de família, ele embarca em uma emocionante aventura que o leva a descobertas surpreendentes sobre seu passado e a verdade sobre o poder da perseverança. Miguelhias é uma história cativante sobre sonhos, família e a busca pela identidade.</p>', '', 1, 0, '#e6006f', '', 3, 0, 242),
(73, 50, 'cachorro do bruno', '50_1694901075.jpeg', '2023-10-03', '[\"2\",\"3\"]', '[]', '[]', '<p>A história de Max, o cachorro do Bruno, é uma aventura repleta de amizade e diversão. Juntos, eles enfrentam desafios e fazem descobertas emocionantes enquanto exploram o mundo à sua maneira única. Uma história cativante sobre a ligação especial entre um homem e seu melhor amigo de quatro patas.</p>', '', 1, 0, '#087F97', '', 1, 0, 4),
(123, 52, 'eu vou tomar um tacaca', '52_1696611831.jpeg', '2023-10-06', '[\"3\",\"7\",\"14\"]', '{\"1\":\"capitulo Novo\"}', '', '', 'livre', 0, 0, '#1a3736', '', 1, 1, 20),
(124, 52, 'xin', '52_1696611879.jpeg', '2023-10-06', '[\"4\",\"8\",\"17\"]', '', '', '', 'livre', 1, 0, '#099572', '', 1, 0, 8),
(125, 50, 'urinol', '50_1696699628.jpeg', '2023-10-07', '[\"2\",\"4\",\"15\"]', '{\"1\":\"\\u00e9 sobre isso\"}', '{\"1\":1}', '<p>Este livro explora as experiências e reflexões humanas que ocorrem nos banheiros públicos. De forma inesperada e humorística, ele revela as histórias, pensamentos e situações engraçadas que todos nós enfrentamos nesses espaços compartilhados. Uma leitura divertida que nos faz enxergar o cotidiano de uma maneira única.</p>', 'livre', 1, 0, '#efae1f', '', 0, 0, 30),
(131, 52, 'cuguy', '52_1697143886.jpeg', '2023-10-12', '[\"3\"]', '[]', '[]', '', 'livre', 0, 0, '#d20f0f', '{\"0\":\"\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 0, 0, 0),
(145, 55, 'deus está morto', '55_1697644044.jpg', '2023-10-18', '[\"2\",\"8\",\"15\"]', '{\"1\":\"a verdade\"}', '{\"1\":1}', '<p>Deus é o karai, deus é o karaiii</p>', '', 1, 0, '#940896', '{\"0\":\"\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 2, 0, 28),
(147, 52, 'Observe', '52_1697773974.jpeg', '2023-10-20', '[\"14\"]', '{\"1\":\"lindoo\"}', '{\"1\":1}', '', '', 1, 0, '#ff0000', '{\"0\":\"bob\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 0, 0, 8),
(148, 52, 'h2o', '52_1698171840.png', '2023-10-24', '[\"3\",\"8\",\"13\"]', '{\"1\":\"escasses\"}', '{\"1\":1}', '<p>aguá molhada e potavel</p>', '', 1, 1, '#5e2f08', '{\"0\":\"morte\",\"1\":\"enchente\",\"2\":\"brasil\",\"3\":\"real\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 2, 0, 10);

-- --------------------------------------------------------

--
-- Estrutura para tabela `seguidores`
--

CREATE TABLE `seguidores` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `id_ref` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `seguidores`
--

INSERT INTO `seguidores` (`id`, `user_id`, `id_ref`) VALUES
(23, 50, 55),
(26, 55, 50),
(28, 50, 52),
(30, 52, 55),
(33, 52, 50),
(34, 55, 52);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `fotoPerfil` varchar(1000) NOT NULL,
  `genero` varchar(1000) NOT NULL,
  `seguidores` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `fotoPerfil`, `genero`, `seguidores`) VALUES
(50, 'alisu', 'alisonkpops@gmail.com', 'minhasenha833', '50_1697574245.jpg', '[\"5\",\"8\"]', 3),
(52, 'bea', 'alisonkpopss@gmail.com', 'minhasenha833', '52_1697671142.jpg', '[\"3\",\"5\",\"6\",\"7\",\"11\",\"13\"]', 2),
(55, 'miau', 'miau@gmail.com', 'miau', '55_1697601210.jpeg', '[\"3\",\"5\"]', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `votacao`
--

CREATE TABLE `votacao` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `id_ref` int(11) NOT NULL,
  `chave` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `votacao`
--

INSERT INTO `votacao` (`id`, `user_id`, `id_ref`, `chave`) VALUES
(22, 50, 16, 0),
(23, 50, 17, 0),
(26, 52, 16, 3),
(28, 52, 14, 1),
(29, 52, 15, 1),
(30, 52, 17, 1),
(45, 55, 14, 2),
(46, 55, 15, 0),
(47, 55, 16, 0),
(48, 55, 17, 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `curtidas`
--
ALTER TABLE `curtidas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `enquete`
--
ALTER TABLE `enquete`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `feed_publi`
--
ALTER TABLE `feed_publi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices de tabela `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `livro_publi`
--
ALTER TABLE `livro_publi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices de tabela `seguidores`
--
ALTER TABLE `seguidores`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `votacao`
--
ALTER TABLE `votacao`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT de tabela `curtidas`
--
ALTER TABLE `curtidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=236;

--
-- AUTO_INCREMENT de tabela `enquete`
--
ALTER TABLE `enquete`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `feed_publi`
--
ALTER TABLE `feed_publi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `genero`
--
ALTER TABLE `genero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `livro_publi`
--
ALTER TABLE `livro_publi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;

--
-- AUTO_INCREMENT de tabela `seguidores`
--
ALTER TABLE `seguidores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de tabela `votacao`
--
ALTER TABLE `votacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
