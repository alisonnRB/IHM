-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14/10/2023 às 23:20
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
(80, 50, 'livro', 125, 0, 'foda', 0, '2023-10-07', 0, 1),
(81, 50, 'livro', 124, 0, 'vaca', 0, '2023-10-07', 0, 0),
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
(104, 52, 'livro', 71, 0, 'hello', 0, '2023-10-12', 0, 2),
(105, 52, 'livro', 71, 1, 'hi', 104, '2023-10-12', 104, 0),
(106, 52, 'livro', 71, 1, 'hi', 104, '2023-10-12', 104, 0),
(107, 52, 'livro', 122, 0, 'cgcjhvjkvjkb', 0, '2023-10-12', 0, 1),
(108, 52, 'livro', 131, 0, 'oxi', 0, '2023-10-12', 0, 0),
(109, 50, 'livro', 123, 0, 'kkk legal', 0, '2023-10-14', 0, 0);

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
(131, 50, 71, 'livro', 104),
(135, 52, 71, 'livro', 104),
(138, 50, 71, 'livro', 0),
(139, 52, 68, 'livro', 93),
(140, 50, 68, 'livro', 0),
(147, 52, 71, 'livro', 0),
(148, 52, 124, 'livro', 0),
(149, 52, 122, 'livro', 0),
(150, 52, 122, 'livro', 107),
(151, 52, 68, 'livro', 0),
(152, 50, 123, 'livro', 0);

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
(16, 50, 123);

-- --------------------------------------------------------

--
-- Estrutura para tabela `feed_publi`
--

CREATE TABLE `feed_publi` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `data` date NOT NULL,
  `texto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(68, 50, 'steven universo fake', '50_1694899893.jpeg', '2023-10-09', '[\"1\",\"12\"]', '{\"1\":\"qw\",\"2\":\"hdh\"}', '{\"1\":0,\"2\":1}', '<p>qwqw</p>', 'doze', 1, 1, '#becc00', '{\"0\":\"bruno\",\"1\":\"desenho\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 2, 1, 4),
(70, 50, 'alison amarelo', '50_1694899923.jpeg', '2023-10-05', '[\"7\",\"10\",\"14\"]', '{\"1\":\"capitulo Novo\"}', '', '<p>Neste romance emocionante, Alison, uma jovem de espírito livre com cabelos amarelos brilhantes, parte em uma jornada de autodescoberta e aventura. Em um mundo onde a conformidade é a norma, ela se destaca como um raio de sol. Ao seguir seu coração e suas paixões, Alison desencadeia uma série de eventos que a levam a lugares inesperados e a pessoas que mudarão sua vida para sempre. \"Alison Amarelo\" é uma história inspiradora sobre coragem, autenticidade e a busca pelo verdadeiro significado da vida.</p>', '', 1, 1, '#087F97', '', 1, 1, 10),
(71, 50, 'miguelias', '50_1694899997.jpeg', '2023-10-06', '[\"8\",\"17\"]', '[]', '[]', '<p>é uma história de superação e determinação que segue a jornada de um jovem chamado Miguel. Criado em um bairro difícil, Miguel enfrenta desafios extraordinários em sua busca por um futuro melhor. Inspirado por seu amor pela música e um antigo mistério de família, ele embarca em uma emocionante aventura que o leva a descobertas surpreendentes sobre seu passado e a verdade sobre o poder da perseverança. Miguelhias é uma história cativante sobre sonhos, família e a busca pela identidade.</p>', '', 1, 0, '#e6006f', '', 2, 0, 2),
(73, 50, 'cachorro do bruno', '50_1694901075.jpeg', '2023-10-03', '[\"2\",\"3\"]', '[]', '[]', '<p>A história de Max, o cachorro do Bruno, é uma aventura repleta de amizade e diversão. Juntos, eles enfrentam desafios e fazem descobertas emocionantes enquanto exploram o mundo à sua maneira única. Uma história cativante sobre a ligação especial entre um homem e seu melhor amigo de quatro patas.</p>', '', 1, 0, '#087F97', '', 0, 0, 0),
(122, 52, 'acido ribunocleico', '52_1696611763.jpg', '2023-10-08', '[\"2\",\"9\",\"13\"]', '{\"1\":\"capitulo Novo\",\"2\":\"capitulo Novo\"}', '{\"1\":1,\"2\":0}', '', 'livre', 1, 0, '#bc348f', '{\"0\":\"\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 1, 0, 2),
(123, 52, 'eu vou tomar um tacaca', '52_1696611831.jpeg', '2023-10-06', '[\"3\",\"7\",\"14\"]', '{\"1\":\"capitulo Novo\"}', '', '', 'livre', 0, 0, '#1a3736', '', 1, 1, 0),
(124, 52, 'xin', '52_1696611879.jpeg', '2023-10-06', '[\"4\",\"8\",\"17\"]', '', '', '', 'livre', 1, 0, '#099572', '', 1, 0, 0),
(125, 50, 'urinol', '50_1696699628.jpeg', '2023-10-07', '[\"2\",\"4\",\"15\"]', '{\"1\":\"\\u00e9 sobre isso\"}', '{\"1\":1}', '<p>Este livro explora as experiências e reflexões humanas que ocorrem nos banheiros públicos. De forma inesperada e humorística, ele revela as histórias, pensamentos e situações engraçadas que todos nós enfrentamos nesses espaços compartilhados. Uma leitura divertida que nos faz enxergar o cotidiano de uma maneira única.</p>', 'livre', 1, 0, '#efae1f', '', 0, 0, 0),
(131, 52, 'cuguy', '52_1697143886.jpeg', '2023-10-12', '[\"3\"]', '[]', '[]', '', 'livre', 0, 0, '#d20f0f', '{\"0\":\"\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 0, 0, 0);

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
(7, 50, 52);

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
(50, 'bruninho', 'alisonkpops@gmail.com', 'minhasenha833', '50_1695886987.png', '[\"1\",\"3\",\"5\",\"6\",\"8\",\"10\",\"13\"]', 0),
(52, 'beatriz', 'alisonkpopss@gmail.com', 'minhasenha833', '52_1696611646.jpg', '[\"3\",\"5\",\"6\",\"7\",\"8\",\"9\",\"11\"]', 1);

--
-- Índices para tabelas despejadas
--

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
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT de tabela `curtidas`
--
ALTER TABLE `curtidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT de tabela `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `feed_publi`
--
ALTER TABLE `feed_publi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `genero`
--
ALTER TABLE `genero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `livro_publi`
--
ALTER TABLE `livro_publi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT de tabela `seguidores`
--
ALTER TABLE `seguidores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
