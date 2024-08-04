create database InfoUser;

use InfoUser;

create table User (
	id int auto_increment,
    fullname varchar(50),
    avatar varchar(255),
    email varchar(100),
    password varchar(100),
    role varchar(10),
    otp varchar(6),
    create_otp date,
    isActivated bool,
    primary key (id)
);