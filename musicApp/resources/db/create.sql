DROP DATABASE IF EXISTS music;
CREATE DATABASE music;
USE music;

CREATE TABLE user(
    id INT PRIMARY KEY auto_increment NOT NULL,
    name VARCHAR(45) NOT NULL,
    username VARCHAR(45) NOT NULL,
    gmail VARCHAR(45) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(45) NOT NULL,
    image VARCHAR(45)
);