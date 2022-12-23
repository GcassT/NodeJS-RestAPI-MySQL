CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE IF NOT EXISTS employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee (name, salary) VALUES 
 (1, 'John', 1000),
 (2, 'Peter', 2000),
 (3, 'Paul', 3000),
 (4, 'Mary', 4000),
 (5, 'David', 5000);