insert into consola(consola) values
	('PlayStation 4'),
    ('PlayStation 3'),
    ('PlayStation 2'),
    ('PlayStation 1'),
    ('Xbox'),
    ('Xbox 360'),
    ('Xbox One'),
    ('Xbox Series X'),
    ('Xbox Series Y'),
    ('Nintendo'),
    ('Super Nintendo'),
    ('Nintendo 64'),
    ('Game Cube'),
    ('WII U'),
    ('Nintendo 3Ds'),
    ('Switch'),
    ('PC');
    
insert into genero(genero) values 
	('Accion'),
    ('Aventura'),
    ('Disparo'),
    ('Rol'),
    ('Plataforma'),
    ('Puzzle'),
    ('Estrategia'),
    ('Simulacion'),
    ('Construccion'),
    ('Deportes'),
    ('Carreras'),
    ('Lucha'),
    ('Musicales'),
    ('Sigilo'),
    ('Supervivencia'),
    ('Mundo Abierto'),
    ('Exploracion'),
    ('Juego Educativo'),
    ('RPG'),
    ('MMORPG');
    
    
insert into juego(nombre,precio,imagen,descripcion, desarrolladora) values 
	('Grand Theft Auto: San Andreas', 19.99,'https://i.blogs.es/f681c7/gta-san-andreas-android/1366_2000.jpeg','Un juego de mundo abierto que sigue la historia de Carl "CJ" Johnson en el ficticio estado de San Andreas.','Rockstar'),
    ('Final Fantasy X', 19.99,'https://static.wikia.nocookie.net/esfinalfantasy/images/4/41/Logo_Final_Fantasy_X.jpeg' , ' Un juego de rol (RPG) épico con una historia envolvente y personajes memorables.','Square Enix'),
    ('Metal Gear Solid 3: Snake Eater',19.99,'https://img.konami.com/products_master/eu_publish/mgs3se/eu/es/images/64_mgs3se_gamemain.jpg' , 'Una obra maestra de sigilo y acción dirigida por Hideo Kojima.','Konami'),
    ('God of War 1',19.99 , 'https://i.3djuegos.com/juegos/3569/god_of_war/fotos/ficha/god_of_war-2736533.jpg','Una saga que sigue las aventuras de Kratos, un guerrero espartano que busca venganza contra los dioses del Olimpo.','Santa Monica Studio'),
    ('Shadow of the Colossus',19.99 , 'https://i.pinimg.com/736x/27/01/c9/2701c9fadfe9ee3f633eed66800dabf1.jpg','Un juego de aventuras que sigue a un joven en su búsqueda para revivir a una mujer sacrificando a criaturas colosales.','Team Ico'),
    ('Tekken 5',19.99 , 'https://media.vandal.net/m/3442/tekken-5-20142316324_1.jpg',' Un juego de lucha con una amplia variedad de personajes y modos de juego','Bandai Namco Entertainment'),
    ('Gran Turismo 4', 19.99, 'https://www.gran-turismo.com/images/c/i1UkJZak4T1rSEc.jpg',' Un simulador de carreras aclamado que presenta una amplia gama de vehículos y circuitos.','Polyphony Digital'),
    ('Kingdom Hearts',19.99 , 'https://m.media-amazon.com/images/I/811bSn2hwGL._AC_UF1000,1000_QL80_.jpg','Una mezcla única de personajes de Disney y Final Fantasy en un juego de acción y aventuras.','Square Enix'),
    ('Devil May Cry 3: Dantes Awakening',19.99 , 'https://m.media-amazon.com/images/I/71R+Na4J2aL._AC_UF1000,1000_QL80_.jpg ',' Un juego de acción y hack-and-slash que sigue las aventuras del cazador de demonios Dante.','Capcom'),
    ('Ratchet & Clank: Up Your Arsenal',19.99 , 'https://m.media-amazon.com/images/M/MV5BOGU2YTdmN2ItNGZkNC00NTczLTg2ZDMtNzg3YTEyODkxZmZmXkEyXkFqcGdeQXVyMTk5NDI0MA@@._V1_.jpg','Un juego de plataformas y disparos lleno de humor y acción.','Insomniac Games');
    
    
    
insert into juego_consola(juego_id,consola_id) values 
    (1,3),
    (2,3),
    (3,3),
    (4,3),
    (5,3),
    (6,3),
    (7,3),
    (8,3),
    (9,3),
    (10,3);


insert into juego_genero(juego_id,genero_id) values 
    (1,1),(1,16),
    (2,1),(2,19),
    (3,1),(3,14),
    (4,1),(4,2),
    (5,1),(5,2),
    (6,1),(6,12),
    (7,1),(7,11),
    (8,1),(8,19),
    (9,1),(9,2),
    (10,1),(10,3);
    
    
    
    
    
    