DROP DATABASE IF EXISTS guestrev_db;
CREATE DATABASE guestrev_db;
USE guestrev_db;

CREATE TABLE property_list(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  companyName VARCHAR(225) NOT NULL,
  propertyName VARCHAR (255) NOT NULL,
  propertyID INTEGER(11) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE task_list(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  p_taskName VARCHAR (255) NOT NULL,
  p_taskID INTEGER(11) NOT NULL,
  p_taskStart timestamp NOT NULL,
  p_taskEnd timestamp NOT NULL,
  PRIMARY KEY (id)
  );