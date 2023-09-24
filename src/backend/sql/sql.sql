-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/09/2023 às 06:36
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
  `sinopse` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `livro_publi`
--

INSERT INTO `livro_publi` (`id`, `user_id`, `nome`, `imagem`, `tempo`, `genero`, `texto`, `sinopse`) VALUES
(68, 50, 'steven universo fake', '50_1694899893.jpeg', '2023-09-16', '[\"0\",\"1\",\"3\"]', '[]', ''),
(69, 50, 'urinol', '50_1694899905.jpeg', '2023-09-16', '[\"5\",\"8\"]', '', ''),
(70, 50, 'alison amarelo', '50_1694899923.jpeg', '2023-09-16', '[\"7\",\"10\",\"14\"]', '', ''),
(71, 50, 'miguelias', '50_1694899997.jpeg', '2023-09-16', '[\"8\",\"11\"]', '', ''),
(73, 50, 'cachorro do bruno', '50_1694901075.jpeg', '2023-09-16', '[\"0\",\"2\",\"3\"]', '', '');

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
(50, 'brunenho', 'alisonkpops@gmail.com', 'minhasenha833', '50_1694899764.PNG', '[\"1\",\"3\",\"5\",\"6\",\"8\",\"10\",\"13\"]');

--
-- Índices para tabelas despejadas
--

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
