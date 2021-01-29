drop database blog;
create database blog;
use blog;

create table usuario(
id_user INT auto_increment PRIMARY KEY,
nome_user varchar (30)
);
create table post(
id_post INT auto_increment PRIMARY KEY,
titlepost varchar (30),
categoria varchar(30),
id_user INT
);

insert into usuario (nome_user) values
('Elizeu Luis'),
('Juquinha Alves'),
('Samuel Porto'),
('Romario Lima');

insert into post (titlepost,categoria,id_user) values
('Eleito','Politica',2),
('Meu game','Games',1),
('Aula Node','Educacao',3);

create view verpost as
Select nome_user, titlepost, categoria
from usuario inner join post on usuario.id_user = post.id_user;

show tables;

select * from verpost;


