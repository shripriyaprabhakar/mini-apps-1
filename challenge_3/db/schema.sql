DROP DATABASE IF EXISTS customer;
DROP SCHEMA IF EXISTS CustomerInfo;
DROP SCHEMA IF EXISTS Address;
DROP SCHEMA IF EXISTS credit;

CREATE DATABASE customer;

USE customer;

CREATE TABLE CustomerInfo (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(100),
  emailid varchar(100),
  password varchar(11),
 
  PRIMARY KEY (id)

);

CREATE TABLE Address (
  id INT NOT NULL AUTO_INCREMENT,
  customer INT NOT NULL,
  line1 varchar(100),
  line2 varchar(100),
  city varchar(100),
  state varchar(100),
  zipcode INT NOT NULL,

  FOREIGN KEY (customer) 
    REFERENCES CustomerInfo (id),
  
 
  PRIMARY KEY (id)

);

CREATE TABLE credit (
  id INT NOT NULL AUTO_INCREMENT,
  customer INT NOT NULL,
  creditcardnum INT NOT NULL,
  expiry INT NOT NULL,
  cvv INT NOT NULL,
 
  PRIMARY KEY (id),
  
   FOREIGN KEY (customer) 
    REFERENCES CustomerInfo (id)

);



