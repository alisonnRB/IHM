-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28/09/2023 às 09:48
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
  `sinopse` varchar(1000) NOT NULL,
  `classificacao` varchar(50) NOT NULL,
  `publico` tinyint(1) NOT NULL,
  `finalizado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `livro_publi`
--

INSERT INTO `livro_publi` (`id`, `user_id`, `nome`, `imagem`, `tempo`, `genero`, `texto`, `sinopse`, `classificacao`, `publico`, `finalizado`) VALUES
(68, 50, 'steven universo fake', '50_1694899893.jpeg', '2023-09-16', '[\"0\",\"1\",\"3\"]', '[]', '<p>Sinopse:\nEm um futuro onde a realidade virtual é a norma, uma falha no sistema traz personagens do desenho \"Steven Universo\" para o mundo real. Alice, uma fã da série, se encontra com seus heróis fictícios, mas percebe que algo está errado. Ela precisa unir forças com eles para enfrentar desafios e segredos sombrios que ameaçam ambos os mundos. \"Steven Universo Fake\" é uma emocionante aventura que questiona o que é real e o poder da amizade.</p>', 'dezoito', 0, 0),
(69, 50, 'urinol', '50_1694899905.jpeg', '2023-09-28', '[\"5\",\"8\"]', '[]', '<p>Este livro explora as experiências e reflexões humanas que ocorrem nos banheiros públicos. De forma inesperada e humorística, ele revela as histórias, pensamentos e situações engraçadas que todos nós enfrentamos nesses espaços compartilhados. Uma leitura divertida que nos faz enxergar o cotidiano de uma maneira única.</p>', 'dez', 0, 0),
(70, 50, 'alison amarelo', '50_1694899923.jpeg', '2023-09-16', '[\"7\",\"10\",\"14\"]', '', '<p>Neste romance emocionante, Alison, uma jovem de espírito livre com cabelos amarelos brilhantes, parte em uma jornada de autodescoberta e aventura. Em um mundo onde a conformidade é a norma, ela se destaca como um raio de sol. Ao seguir seu coração e suas paixões, Alison desencadeia uma série de eventos que a levam a lugares inesperados e a pessoas que mudarão sua vida para sempre. \"Alison Amarelo\" é uma história inspiradora sobre coragem, autenticidade e a busca pelo verdadeiro significado da vida.</p>', '', 0, 0),
(71, 50, 'miguelias', '50_1694899997.jpeg', '2023-09-28', '[\"8\",\"17\"]', '', '<p>é uma história de superação e determinação que segue a jornada de um jovem chamado Miguel. Criado em um bairro difícil, Miguel enfrenta desafios extraordinários em sua busca por um futuro melhor. Inspirado por seu amor pela música e um antigo mistério de família, ele embarca em uma emocionante aventura que o leva a descobertas surpreendentes sobre seu passado e a verdade sobre o poder da perseverança. Miguelhias é uma história cativante sobre sonhos, família e a busca pela identidade.</p>', '', 0, 0),
(73, 50, 'cachorro do bruno', '50_1694901075.jpeg', '2023-09-16', '[\"0\",\"2\",\"3\"]', '', '<p>A história de Max, o cachorro do Bruno, é uma aventura repleta de amizade e diversão. Juntos, eles enfrentam desafios e fazem descobertas emocionantes enquanto exploram o mundo à sua maneira única. Uma história cativante sobre a ligação especial entre um homem e seu melhor amigo de quatro patas.</p>', '', 0, 0),
(74, 50, 'diario de um banana', '50_1695762643.PNG', '2023-09-26', '[\"2\",\"3\",\"8\"]', '', '<p>Acompanhe um ano na vida de Bruno por meio de seu diário pessoal, onde ele compartilha seus pensamentos, sentimentos e experiências do dia a dia. Uma história simples e sincera sobre as alegrias e desafios de crescer e descobrir quem somos.</p>', '', 0, 0),
(75, 50, 'diario de um banana vol.2 kkkkkkk', '50_1695762771.jpg', '2023-09-26', '[\"2\",\"3\",\"8\"]', '', '<p style=\"line-height: 2;\"><strong><em>Glow UPPP</em></strong></p>', '', 0, 0),
(78, 50, 'camelo santo', '50_1695873486.PNG', '2023-09-28', '[\"6\"]', '', '', 'doze', 1, 0);

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
(50, 'bolsetenha', 'alisonkpops@gmail.com', 'minhasenha833', '50_1695886987.png', '[\"1\",\"3\",\"5\",\"6\",\"8\",\"10\",\"13\"]');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
