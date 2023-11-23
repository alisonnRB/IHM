-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23/11/2023 às 06:58
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

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
  `tempo` date NOT NULL,
  `visu` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `chats`
--

INSERT INTO `chats` (`id`, `id_user1`, `id_user2`, `texto`, `tempo`, `visu`) VALUES
(95, 71, 70, 'oiiii', '2023-11-23', 1),
(96, 70, 71, 'olaaa', '2023-11-23', 1),
(97, 71, 70, 'ahhh eu quero muito ler o proximo capp... da um spoiler aí vai', '2023-11-23', 1),
(98, 70, 71, 'ksksksks n posssooooo', '2023-11-23', 1);

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
(165, 71, 'livro', 155, 0, 'omggg, eu tbmmmm', 0, '2023-11-23', 0, 1),
(166, 70, 'publi', 30, 0, 'ahh que bom que gostouuu', 0, '2023-11-23', 0, 2),
(167, 71, 'publi', 30, 1, 'quando sai o proximo capitulo?', 166, '2023-11-23', 166, 1),
(168, 70, 'publi', 30, 1, 'acho que semana que vem ja deixo publico ❤', 167, '2023-11-23', 166, 0);

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
(533, 71, 155, 'livro', 0),
(534, 71, 155, 'livro', 165),
(535, 71, 30, 'publi', 0),
(536, 70, 30, 'publi', 0),
(537, 71, 30, 'publi', 166),
(538, 70, 30, 'publi', 166),
(539, 70, 30, 'publi', 167);

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
(22, 'VC AMOU?', '{\"0\":\"SIM\",\"1\":\"NAO\",\"2\":\"\",\"3\":\"\"}', '{\"0\":2,\"1\":0,\"2\":0,\"3\":0}');

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
(63, 71, 155);

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
(30, 71, 'QUE LIVRO BOMM, AMEI', 155, '2023-11-23', 22);

-- --------------------------------------------------------

--
-- Estrutura para tabela `genero`
--

CREATE TABLE `genero` (
  `id` int(11) NOT NULL,
  `PT` varchar(40) NOT NULL,
  `EN` varchar(50) NOT NULL,
  `ES` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `genero`
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
(155, 70, 'luffy', '70_1700716482.jfif', '2023-11-23', '[\"6\"]', '{\"1\":\"eu gosto de op\"}', '{\"1\":1}', '<p><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">óne piece</font></font></p>', '155', 1, 1, '#b54a4a', '{\"0\":\"one piece\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}', 1, 1, 0);

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
(123, 71, 70),
(131, 70, 71);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
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
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `fotoPerfil`, `genero`, `seguidores`) VALUES
(70, 'panfa', 'alisonkpops@gmail.com', '$2y$10$114CgNP4U6MMAzInd4Ic9./tqTk3MqqYlI5WJA6AnT51fgOjCWSfK', '70_1700716275.jfif', '[\"1\",\"3\",\"4\",\"5\",\"6\",\"8\",\"11\"]', 1),
(71, 'mugiwara', 'derozadobatistaalison@gmail.com', '$2y$10$r/Vc01WIlNSzx87kgWLoE.FHrtE4TQM2cnuNDuw/ddpHkF7s/.Oiu', '71_1700716975.jfif', '[\"8\",\"10\",\"11\"]', 1);

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
(94, 71, 22, 0),
(95, 70, 22, 0);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=169;

--
-- AUTO_INCREMENT de tabela `curtidas`
--
ALTER TABLE `curtidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=540;

--
-- AUTO_INCREMENT de tabela `enquete`
--
ALTER TABLE `enquete`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de tabela `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de tabela `feed_publi`
--
ALTER TABLE `feed_publi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de tabela `genero`
--
ALTER TABLE `genero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `livro_publi`
--
ALTER TABLE `livro_publi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- AUTO_INCREMENT de tabela `seguidores`
--
ALTER TABLE `seguidores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de tabela `votacao`
--
ALTER TABLE `votacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
