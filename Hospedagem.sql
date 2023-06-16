-- Criar o banco de dados
DROP DATABASE if exists Hospedagem;
CREATE DATABASE Hospedagem;

-- Usar o banco de dados
USE Hospedagem;

-- Tabela 'users'
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  phone BIGINT
);

-- Tabela 'suites'
CREATE TABLE suites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  `name` INT NOT NULL,
  `value` DECIMAL(10, 2) NOT NULL
);

-- Tabela 'payments'
CREATE TABLE payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  method VARCHAR(255) NOT NULL,
  `value` DECIMAL(10, 2) NOT NULL
);

-- Tabela 'periods'
CREATE TABLE periods (
  id INT AUTO_INCREMENT PRIMARY KEY,
  init DATE NOT NULL,
  `end` DATE NOT NULL,
  suiteId INT NOT NULL,
  FOREIGN KEY (suiteId) REFERENCES suites (id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Tabela 'host'
CREATE TABLE host (
  id INT AUTO_INCREMENT PRIMARY KEY,
  periodId INT NOT NULL,
  userId INT NOT NULL,
  paymentId INT NOT NULL,
  FOREIGN KEY (periodId) REFERENCES periods (id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (userId) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (paymentId) REFERENCES payments (id) ON UPDATE CASCADE ON DELETE CASCADE
);

