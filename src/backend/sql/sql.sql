-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09/10/2023 às 20:41
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
  `conversa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `user`, `tipo`, `id_ref`, `resposta`, `texto`, `id_resposta`, `tempo`, `conversa`) VALUES
(71, 50, 'livro', 69, 0, 'desgraçada', 0, '2023-10-07', 0),
(72, 50, 'livro', 69, 1, 'mal sabe ela que eu escuto', 71, '2023-10-07', 71),
(73, 52, 'livro', 69, 1, 'mas sabe ela que eu escuto que ela dix que me escuta', 72, '2023-10-07', 71),
(74, 52, 'livro', 69, 0, 'doidinha', 72, '2023-10-07', 0),
(75, 50, 'livro', 69, 1, 'mal sabe ela que eu escuto que ela diz que sabe que me escuta', 73, '2023-10-07', 71),
(76, 52, 'livro', 69, 1, 'mal sabe ela que eu sei ela diz que escuta quando eu digo escuto o que ela diz', 75, '2023-10-07', 71),
(77, 52, 'livro', 69, 1, 'vc vai perderrrr', 71, '2023-10-07', 71),
(78, 50, 'livro', 69, 1, 'mal sabe ela que e... droga me perdi AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 76, '2023-10-07', 71),
(79, 50, 'livro', 69, 1, 'vc né bem', 74, '2023-10-07', 74),
(80, 50, 'livro', 125, 0, 'foda', 0, '2023-10-07', 0),
(81, 50, 'livro', 124, 0, 'vaca', 0, '2023-10-07', 0),
(82, 50, 'livro', 70, 0, 'oi', 0, '2023-10-08', 0),
(83, 50, 'livro', 70, 0, 'asas', 0, '2023-10-08', 0),
(84, 50, 'livro', 70, 0, 'asas', 0, '2023-10-08', 0),
(85, 50, 'livro', 70, 1, 'asasa', 82, '2023-10-08', 82),
(86, 50, 'livro', 70, 1, 'fmdkm', 82, '2023-10-08', 82),
(87, 50, 'livro', 70, 1, 'dwsdw', 86, '2023-10-08', 82),
(88, 50, 'livro', 70, 1, 'dwsdw', 86, '2023-10-08', 82),
(89, 52, 'livro', 70, 1, 'oiio', 85, '2023-10-08', 82),
(90, 52, 'livro', 70, 1, 'dasdsa', 88, '2023-10-08', 82),
(91, 52, 'livro', 70, 0, 'wsdd', 0, '2023-10-08', 0),
(92, 52, 'livro', 70, 1, 'sim mana', 83, '2023-10-08', 83);

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
  `tags` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `livro_publi`
--

INSERT INTO `livro_publi` (`id`, `user_id`, `nome`, `imagem`, `tempo`, `genero`, `texto`, `pronto`, `sinopse`, `classificacao`, `publico`, `finalizado`, `tema`, `tags`) VALUES
(68, 50, 'steven universo fake', '50_1694899893.jpeg', '2023-10-08', '[\"1\",\"3\"]', '{\"1\":\"qw\",\"2\":\"hdh\",\"3\":\"dfhfh\"}', '{\"1\":1,\"2\":1,\"3\":0}', '<p>qwqw</p>', 'dezoito', 1, 0, '#214b54', '{\"0\":\"bruno\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}'),
(70, 50, 'alison amarelo', '50_1694899923.jpeg', '2023-10-05', '[\"7\",\"10\",\"14\"]', '', '', '<p>Neste romance emocionante, Alison, uma jovem de espírito livre com cabelos amarelos brilhantes, parte em uma jornada de autodescoberta e aventura. Em um mundo onde a conformidade é a norma, ela se destaca como um raio de sol. Ao seguir seu coração e suas paixões, Alison desencadeia uma série de eventos que a levam a lugares inesperados e a pessoas que mudarão sua vida para sempre. \"Alison Amarelo\" é uma história inspiradora sobre coragem, autenticidade e a busca pelo verdadeiro significado da vida.</p>', '', 1, 1, '#087F97', ''),
(71, 50, 'miguelias', '50_1694899997.jpeg', '2023-10-06', '[\"8\",\"17\"]', '', '', '<p>é uma história de superação e determinação que segue a jornada de um jovem chamado Miguel. Criado em um bairro difícil, Miguel enfrenta desafios extraordinários em sua busca por um futuro melhor. Inspirado por seu amor pela música e um antigo mistério de família, ele embarca em uma emocionante aventura que o leva a descobertas surpreendentes sobre seu passado e a verdade sobre o poder da perseverança. Miguelhias é uma história cativante sobre sonhos, família e a busca pela identidade.</p>', '', 1, 0, '#e6006f', ''),
(73, 50, 'cachorro do bruno', '50_1694901075.jpeg', '2023-10-03', '[\"2\",\"3\"]', '[]', '', '<p>A história de Max, o cachorro do Bruno, é uma aventura repleta de amizade e diversão. Juntos, eles enfrentam desafios e fazem descobertas emocionantes enquanto exploram o mundo à sua maneira única. Uma história cativante sobre a ligação especial entre um homem e seu melhor amigo de quatro patas.</p>', '', 1, 0, '#087F97', ''),
(122, 52, 'acido ribunocleico', '52_1696611763.jpg', '2023-10-08', '[\"2\",\"9\",\"13\"]', '{\"1\":\"capitulo Novo\",\"2\":\"capitulo Novo\"}', '{\"1\":1,\"2\":0}', '', 'livre', 1, 0, '#bc348f', '{\"0\":\"\",\"1\":\"\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"8\":\"\",\"9\":\"\",\"10\":\"\"}'),
(123, 52, 'eu vou tomar um tacaca', '52_1696611831.jpeg', '2023-10-06', '[\"3\",\"7\",\"14\"]', '', '', '', 'livre', 0, 0, '#1a3736', ''),
(124, 52, 'xin', '52_1696611879.jpeg', '2023-10-06', '[\"4\",\"8\",\"17\"]', '', '', '', 'livre', 1, 0, '#099572', ''),
(125, 50, 'urinol', '50_1696699628.jpeg', '2023-10-07', '[\"2\",\"4\",\"15\"]', '{\"1\":\"\\u00e9 sobre isso\"}', '{\"1\":1}', '<p>Este livro explora as experiências e reflexões humanas que ocorrem nos banheiros públicos. De forma inesperada e humorística, ele revela as histórias, pensamentos e situações engraçadas que todos nós enfrentamos nesses espaços compartilhados. Uma leitura divertida que nos faz enxergar o cotidiano de uma maneira única.</p>', 'livre', 1, 0, '#efae1f', '');

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
  `genero` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `fotoPerfil`, `genero`) VALUES
(50, 'bruninho', 'alisonkpops@gmail.com', 'minhasenha833', '50_1695886987.png', '[\"1\",\"3\",\"5\",\"6\",\"8\",\"10\",\"13\"]'),
(52, 'beatriz', 'alisonkpopss@gmail.com', 'minhasenha833', '52_1696611646.jpg', '[\"3\",\"5\",\"6\",\"7\",\"8\",\"9\",\"11\"]');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `comentarios`
--
ALTER TABLE `comentarios`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
