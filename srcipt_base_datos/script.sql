create database lista_juegos;
use lista_juegos;

drop table juego_genero;
drop table juego_consola;
drop table genero;
drop table consola;
drop table juego;


create table genero (
	genero_id int not null auto_increment,
    genero varchar(50) not null,
    primary key(genero_id)
);

create table consola (
	consola_id int not null auto_increment,
    consola varchar(50) not null,
    primary key(consola_id)
);


create table juego (
	juego_id int not null auto_increment,
    nombre varchar(50) not null,
    precio decimal(10,2) not null,
    imagen varchar(255) not null,
    descripcion text not null,
    desarrolladora varchar(50) not null,
    primary key(juego_id)
);


create table juego_genero (
	juego_id int not null,
    genero_id int not null,
    foreign key(juego_id) references juego(juego_id),
    foreign key(genero_id) references genero(genero_id)
);

create table juego_consola (
	juego_id int not null,
    consola_id int not null,
    foreign key(juego_id) references juego(juego_id),
    foreign key(consola_id) references consola(consola_id)
)


