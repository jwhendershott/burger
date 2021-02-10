CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	burger_name varchar(50) NOT NULL,
    devoured boolean,
	PRIMARY KEY (id)
);