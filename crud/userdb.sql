create database userdb;
use userdb;

create table users(
	id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null
);

INSERT INTO users (nome, email) VALUES ('ian', 'ian@email.com');
INSERT INTO users (nome, email) VALUES ('joao', 'joao@email.com');

select * from users