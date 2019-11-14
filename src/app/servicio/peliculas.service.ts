import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() { }

  private movies = [
    {
      "popularity": 70.959,
      "vote_count": 31,
      "video": false,
      "poster_path": "/MBiKqTsouYqAACLYNDadsjhhC0.jpg",
      "id": 486589,
      "adult": false,
      "backdrop_path": "/bga3i5jcejBekr2FCGJga1fYCh.jpg",
      "original_language": "en",
      "original_title": "Red Shoes and the Seven Dwarfs",
      "genre_ids": [
        16,
        10749
      ],
      "title": "Red Shoes & the 7 Dwarfs",
      "vote_average": 5.2,
      "overview": "Los príncipes convertidos en enanos buscan los zapatos rojos de una dama para romper el hechizo, aunque no será fácil. Una parodia con un giro inesperado.",
      "release_date": "2019-07-25"
    },
    {
      "popularity": 80.78,
      "vote_count": 10802,
      "video": false,
      "poster_path": "/4A9KmccvMqJA8MQzIes0G9Uobh5.jpg",
      "id": 245891,
      "adult": false,
      "backdrop_path": "/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg",
      "original_language": "en",
      "original_title": "John Wick",
      "genre_ids": [
        28,
        53
      ],
      "title": "John Wick",
      "vote_average": 7.2,
      "overview": "En Nueva York, John Wick, un asesino a sueldo retirado, vuelve otra vez a la acción para vengarse de los gángsters que le quitaron todo.",
      "release_date": "2014-10-22"
    },
    {
      "popularity": 62.864,
      "vote_count": 7191,
      "video": false,
      "poster_path": "/d3p5JuwN7dG0TvrN5h4ZY4tMOEX.jpg",
      "id": 299537,
      "adult": false,
      "backdrop_path": "/nBS1vONGYrsL2C68C2oDQ3eKJR1.jpg",
      "original_language": "en",
      "original_title": "Captain Marvel",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Capitana Marvel",
      "vote_average": 7,
      "overview": "La historia sigue a Carol Danvers mientras se convierte en uno de los héroes más poderosos del universo, cuando la Tierra se encuentra atrapada en medio de una guerra galáctica entre dos razas alienígenas. Situada en los años 90, 'Capitana Marvel' es una historia nueva de un período de tiempo nunca antes visto en la historia del Universo Cinematográfico de Marvel.",
      "release_date": "2019-03-08"
    },
    {
      "popularity": 76.058,
      "vote_count": 1224,
      "video": false,
      "poster_path": "/ozbfxtelyJNtbgVJAoQKLmDl7ZW.jpg",
      "id": 479455,
      "adult": false,
      "backdrop_path": "/uK9uFbAwQ1s2JHKkJ5l0obPTcXI.jpg",
      "original_language": "en",
      "original_title": "Men in Black: International",
      "genre_ids": [
        28,
        12,
        35,
        878
      ],
      "title": "Men in Black International",
      "vote_average": 5.9,
      "overview": "Los Hombres de Negro siempre han protegido a la Tierra de la escoria del universo. Ahora deben abordar su mayor amenaza hasta la fecha: un infiltrado dentro de la organización.",
      "release_date": "2019-06-14"
    },
    {
      "popularity": 73.099,
      "vote_count": 15197,
      "video": false,
      "poster_path": "/q6Q81fP4qPvfQTH2Anlgy12jzO2.jpg",
      "id": 299536,
      "adult": false,
      "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
      "original_language": "en",
      "original_title": "Avengers: Infinity War",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Vengadores: Infinity War",
      "vote_average": 8.3,
      "overview": "El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?",
      "release_date": "2018-04-27"
    },
    {
      "popularity": 60.555,
      "vote_count": 73,
      "video": false,
      "poster_path": "/vVYU0x9FRpiJNX7c54ciFnRBVYG.jpg",
      "id": 441282,
      "adult": false,
      "backdrop_path": "/kxTgcEO1obr0rwxHcEuzumMYHJj.jpg",
      "original_language": "en",
      "original_title": "Night Hunter",
      "genre_ids": [
        80,
        9648,
        53
      ],
      "title": "El juego del asesino",
      "vote_average": 6.1,
      "overview": "La policía detiene a un psicópata al que se le relaciona con múltiples raptos y asesinatos de mujeres, pero su captura será solo el principio de una cuenta atrás en busca de sus víctimas.",
      "release_date": "2019-08-29"
    },
    {
      "popularity": 58.36,
      "vote_count": 3330,
      "video": false,
      "poster_path": "/4f5Rz8uYpcTvo1hHKcQRSaay0ek.jpg",
      "id": 287947,
      "adult": false,
      "backdrop_path": "/OIGX2lm5tmlCKvZUghtwHzoxxO.jpg",
      "original_language": "en",
      "original_title": "Shazam!",
      "genre_ids": [
        28,
        35,
        14
      ],
      "title": "¡Shazam!",
      "vote_average": 7,
      "overview": "Todos llevamos un superhéroe dentro, solo se necesita un poco de magia para sacarlo a la luz. Cuando Billy Batson, un niño de acogida de 14 años que ha crecido en las calles, grita la palabra 'SHAZAM!' se convierte en el Superhéroe adulto Shazam, por cortesía de un antiguo mago. Dentro de un cuerpo musculoso y divino, Shazam esconde un corazón de niño. Pero lo mejor es que en esta versión de adulto consigue realizar todo lo que le gustaría hacer a cualquier adolescente con superpoderes: ¡divertirse con ellos! ¿Volar? ¿Tener visión de rayos X? ¿Disparar un rayo con las manos? ¿Saltarse el examen de sociales? Shazam va a poner a prueba los límites de sus habilidades con la inconsciencia propia de un niño. Pero necesitará dominar rápidamente esos poderes para luchar contra las letales fuerzas del mal que controla el Dr. Thaddeus Sivana.",
      "release_date": "2019-04-05"
    },
    {
      "popularity": 71.089,
      "vote_count": 26,
      "video": false,
      "poster_path": "/wcTICyta60bfwGs01y0meHQuKpP.jpg",
      "id": 419704,
      "adult": false,
      "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
      "original_language": "en",
      "original_title": "Ad Astra",
      "genre_ids": [
        12,
        18,
        9648,
        878,
        53
      ],
      "title": "Ad Astra",
      "vote_average": 6.3,
      "overview": "El astronauta Roy McBride (Brad Pitt) viaja a los límites exteriores del sistema solar para encontrar a su padre perdido y desentrañar un misterio que amenaza la supervivencia de nuestro planeta. Su viaje desvelará secretos que desafían la naturaleza de la existencia humana y nuestro lugar en el cosmos.",
      "release_date": "2019-09-20"
    },
    {
      "popularity": 52.044,
      "vote_count": 1139,
      "video": false,
      "poster_path": "/2rBLKw3M6Ak3kyQMLTuMWkDx0xc.jpg",
      "id": 456740,
      "adult": false,
      "backdrop_path": "/5BkSkNtfrnTuKOtTaZhl8avn4wU.jpg",
      "original_language": "en",
      "original_title": "Hellboy",
      "genre_ids": [
        28,
        12,
        14,
        878
      ],
      "title": "Hellboy",
      "vote_average": 5.1,
      "overview": "La Agencia para la Investigación y Defensa Paranormal (AIDP) encomienda a Hellboy la tarea de derrotar a un espíritu ancestral: Nimue, conocida como \"La Reina de la Sangre\". Nimue fue la amante del mismísimo Merlín durante el reinado del Rey Arturo, de él aprendió los hechizos que la llevaron a ser una de las brujas más poderosas… Pero la locura se apoderó de ella y aprisionó al mago para toda la eternidad. Hace siglos consiguieron acabar con esta villana, enterrándola profundamente, pero ha vuelto de entre los muertos con la intención de destruir a la humanidad con su magia negra.  Nueva película basada en el cómic \"Hellboy\" de Mike Mignola, que tendrá calificación R y se desmarcará de los films de Guillermo del Toro.",
      "release_date": "2019-05-17"
    },
    {
      "popularity": 65.524,
      "vote_count": 5,
      "video": false,
      "poster_path": "/kG3pY61LWGAzcaSne12CGEeRvtg.jpg",
      "id": 522938,
      "adult": false,
      "backdrop_path": "/fCTBbtjeWSb0wURnUQpY6LD8vGJ.jpg",
      "original_language": "en",
      "original_title": "Rambo: Last Blood",
      "genre_ids": [
        28,
        12,
        53
      ],
      "title": "Rambo: Last Blood",
      "vote_average": 7.8,
      "overview": "Cuatro décadas después, el veterano de Vietnam y paciente con TEPT (Trastorno de estrés postraumático) regresa a su rancho familiar de Arizona. John Rambo (Sylvester Stallone), uno de los mayores héroes de acción de todos los tiempos, deberá enfrentarse a su pasado y desenterrar sus despiadadas habilidades de combate para vengarse en una misión final, emprendiendo así un viaje mortal, justiciero y sin retorno.",
      "release_date": "2019-09-27"
    },
    {
      "popularity": 22.465,
      "id": 6978,
      "video": false,
      "vote_count": 1423,
      "vote_average": 7.2,
      "title": "Golpe en la pequeña China",
      "release_date": "1986-05-30",
      "original_language": "en",
      "original_title": "Big Trouble in Little China",
      "genre_ids": [
        28,
        12,
        35,
        14
      ],
      "backdrop_path": "/fE78fvLAlOiwQYksd11Q511tAXr.jpg",
      "adult": false,
      "overview": "Jack Burton es un camionero que, en una de sus paradas en el barrio de Chinatown, en San Francisco, le gana una gran cantidad de dinero a Wang Chi. Este le convence para que le lleve al aeropuerto a recoger a su prometida Miao Yin, tras lo cual le entregará el dinero que le debe. Cuando Miao Yin es secuestrada por unos gángsters chinos, Jack se verá envuelto en una gran aventura para rescatarla, entrando en un tenebroso mundo gobernado por Lo Pan, un mago de 2.000 años que gobierna sin piedad el mundo de los espíritus. Esquivando demonios y haciendo frente a temores incomprensibles, Jack lucha a su manera en los oscuros dominios de Lo Pan en una loca carrera para salvar a la chica.",
      "poster_path": "/2n0HEV8FnwjEySpgof7CVeeEyMY.jpg"
    },
    {
      "popularity": 24.229,
      "vote_count": 64,
      "video": false,
      "poster_path": "/4tS0iyKQBDFqVpVcH21MSJwXZdq.jpg",
      "id": 390634,
      "adult": false,
      "backdrop_path": "/jFIXVCCGvS20mIFXqDAlVR5KXew.jpg",
      "original_language": "ja",
      "original_title": "劇場版 Fate／stay night [Heaven's Feel] II. lost butterfly",
      "genre_ids": [
        28,
        12,
        16,
        14
      ],
      "title": "Fate/stay night: Heaven's Feel - II. Mariposa Perdida",
      "vote_average": 5.4,
      "overview": "Segunda de tres películas adaptando la tercera ruta de Fate/stay night.",
      "release_date": "2019-01-12"
    },
    {
      "popularity": 92.955,
      "id": 52345,
      "video": false,
      "vote_count": 200,
      "vote_average": 7.7,
      "title": "Lisbela e o Prisioneiro",
      "release_date": "2003-08-22",
      "original_language": "pt",
      "original_title": "Lisbela e o Prisioneiro",
      "genre_ids": [
        35,
        10749
      ],
      "backdrop_path": "/4KDlC0cZvR5LtszqjFhZcMzdiUD.jpg",
      "adult": false,
      "overview": "",
      "poster_path": "/9nlaRxQeYaMrVVANMppagFohCRP.jpg"
    },
    {
      "popularity": 38.601,
      "vote_count": 1122,
      "video": false,
      "poster_path": "/lvt3qfH3QlzydjmGNMGQ2tx2O7C.jpg",
      "id": 504608,
      "adult": false,
      "backdrop_path": "/oAr5bgf49vxga9etWoQpAeRMvhp.jpg",
      "original_language": "en",
      "original_title": "Rocketman",
      "genre_ids": [
        18,
        10402
      ],
      "title": "Rocketman",
      "vote_average": 7.5,
      "overview": "'Rocketman' es la historia de Elton John, desde sus años como niño prodigio del piano en la Royal Academy of Music hasta llegar a ser una superestrella de fama mundial gracias a su influyente y duradera asociación con su colaborador y letrista Bernie Taupin.",
      "release_date": "2019-05-31"
    },
    {
      "popularity": 60.862,
      "vote_count": 3444,
      "video": false,
      "poster_path": "/quWP5VIzTUf0Hr8AJZLloM6js8I.jpg",
      "id": 399579,
      "adult": false,
      "backdrop_path": "/8yjqnpOfuFQg3qLRl9Ca1NgIBB5.jpg",
      "original_language": "en",
      "original_title": "Alita: Battle Angel",
      "genre_ids": [
        28,
        12,
        878,
        53
      ],
      "title": "Alita: Ángel de combate",
      "vote_average": 6.8,
      "overview": "Ido, un compasivo médico de cíborgs, encuentra a Alita abandonada en el desguace de Iron City. Cuando Alita despierta, no sabe quién es, ni reconoce el mundo en el que se encuentra, todo es nuevo para ella. Ido intentará proteger a Alita de su misterioso pasado, mientras que su nuevo amigo Hugo le ayudará a despertar sus recuerdos. En ese momento, Alita descubre que posee habilidades de combate extraordinarias, que podría usar para salvar a su nueva familia y amigos. Decidida a encontrar la verdad tras sus orígenes, Alita comienza un viaje que le enfrentará a las injusticias de un mundo oscuro y corrupto, descubriendo que sólo ella puede cambiarlo.",
      "release_date": "2019-02-15"
    },
    {
      "popularity": 50.048,
      "vote_count": 284,
      "video": false,
      "poster_path": "/7IRy0iHdaS0JI3ng4ZYlk5gLSFn.jpg",
      "id": 506574,
      "adult": false,
      "backdrop_path": "/gzdxeOiO76hDoOSKYCxegj7bk4T.jpg",
      "original_language": "en",
      "original_title": "Descendants 3",
      "genre_ids": [
        28,
        12,
        35,
        10751
      ],
      "title": "Los Descendientes 3",
      "vote_average": 7.5,
      "overview": "Mal y sus amigos enfrentan el desafío más grande cuando una inexplicable fuerza maligna amenaza a los habitantes de Auradon.",
      "release_date": "2019-08-09"
    },
    {
      "popularity": 56.214,
      "vote_count": 1021,
      "video": false,
      "poster_path": "/vKSyaptSA7zZ9H8mSfaDnvyQl9k.jpg",
      "id": 466272,
      "adult": false,
      "backdrop_path": "/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg",
      "original_language": "en",
      "original_title": "Once Upon a Time in Hollywood",
      "genre_ids": [
        28,
        35,
        80,
        18,
        37
      ],
      "title": "Érase una vez en Hollywood",
      "vote_average": 7.5,
      "overview": "La antigua estrella de un western televisivo Rick Dalton, intenta amoldarse al panorama cambiante del Hollywood de finales de los 60' al mismo tiempo que su doble Cliff. Como telón de fondo, la familia Manson planea cometer una serie de asesinatos en barrios adinerados de Los Ángeles.",
      "release_date": "2019-08-15"
    },
    {
      "popularity": 44.863,
      "vote_count": 19505,
      "video": false,
      "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      "id": 157336,
      "adult": false,
      "backdrop_path": "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
      "original_language": "en",
      "original_title": "Interstellar",
      "genre_ids": [
        12,
        18,
        878
      ],
      "title": "Interstellar",
      "vote_average": 8.3,
      "overview": "Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.",
      "release_date": "2014-11-07"
    },
    {
      "popularity": 47.26,
      "vote_count": 14651,
      "video": false,
      "poster_path": "/7xXJ15VEf7G9GdAuV1dO769yC73.jpg",
      "id": 671,
      "adult": false,
      "backdrop_path": "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
      "original_language": "en",
      "original_title": "Harry Potter and the Philosopher's Stone",
      "genre_ids": [
        12,
        14,
        10751
      ],
      "title": "Harry Potter y la piedra filosofal",
      "vote_average": 7.8,
      "overview": "Harry Potter es un huérfano que vive con sus desagradables tíos, los Dursley, y su repelente primo Dudley. Se acerca su undécimo cumpleaños y tiene pocas esperanzas de recibir algún regalo, ya que nunca nadie se acuerda de él. Sin embargo, pocos días antes de su cumpleaños, una serie de misteriosas cartas dirigidas a él y escritas con una estridente tinta verde rompen la monotonía de su vida: Harry es un mago y sus padres también lo eran.",
      "release_date": "2001-11-30"
    },
    {
      "popularity": 15.114,
      "id": 527865,
      "video": false,
      "vote_count": 0,
      "vote_average": 0,
      "title": "Nater Guru",
      "release_date": "2003-03-14",
      "original_language": "en",
      "original_title": "Nater Guru",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "backdrop_path": "/2NniMVeu28Cod7Cnkwy9lCsbJxz.jpg",
      "adult": false,
      "overview": "",
      "poster_path": "/1R3hwwMVlalodwTmEk1fE7AiMpr.jpg"
    },
    {
      "popularity": 452.653,
      "vote_count": 614,
      "video": false,
      "poster_path": "/oP1wkyCArC5HFN793M0wPCe9STw.jpg",
      "id": 474350,
      "adult": false,
      "backdrop_path": "/4W0FnjSGn4x0mKZlBRx8OjFxQUM.jpg",
      "original_language": "en",
      "original_title": "It Chapter Two",
      "genre_ids": [
        35,
        27
      ],
      "title": "It: Capítulo 2",
      "vote_average": 7.2,
      "overview": "27 años después, los ex-miembros del Club de los Perdedores, que crecieron y se mudaron lejos de Derry, vuelven a unirse tras una devastadora llamada telefónica.",
      "release_date": "2019-09-06"
    },
    {
      "popularity": 262.515,
      "vote_count": 511,
      "video": false,
      "poster_path": "/dfvOYJPJUKkqPpCEDcVzaODAnI9.jpg",
      "id": 429203,
      "adult": false,
      "backdrop_path": "/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
      "original_language": "en",
      "original_title": "The Old Man & the Gun",
      "genre_ids": [
        35,
        80,
        18
      ],
      "title": "The Old Man & the Gun",
      "vote_average": 6.4,
      "overview": "Basada en la historia real de Forrest Tucker, un apuesto ladrón de bancos que en sus 80 años de vida logró escaparse 18 veces de prisión. Retirado del oficio, Tucker vive en un hogar de jubilados y ha encontrado en Jewel al amor de su vida. Cuando un día ve al detective John Hunt por televisión, el ex atracador siente la necesidad de dar un último golpe y demostrar que aún puede traer en jaque a los policías más competentes.",
      "release_date": "2019-01-25"
    },
    {
      "popularity": 270.012,
      "vote_count": 3524,
      "video": false,
      "poster_path": "/iKVR1ba3W1wCm9bVCcpnNvxQUWX.jpg",
      "id": 429617,
      "adult": false,
      "backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
      "original_language": "en",
      "original_title": "Spider-Man: Far from Home",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Spider-Man: Lejos de Casa",
      "vote_average": 7.7,
      "overview": "Peter Parker decide irse junto a Michelle Jones, Ned y el resto de sus amigos a pasar unas vacaciones a Europa después de los eventos ocurridos en Vengadores: EndGame. Sin embargo, el plan de Parker por dejar de lado sus superpoderes durante unas semanas se ven truncados cuándo es reclutado por Nick Fury para unirse a Mysterio (un humano que proviene de la Tierra 833, una dimensión del Multiverso, que tuvo su primera aparición en Doctor Strange) para luchar contra los Elementales (cuatro entes inmortales que vienen de la misma dimensión y que dominan los cuatro elementos de la Naturaleza, el fuego, el agua, el aire y la tierra) . En ese momento, Parker vuelve a ponerse el traje de Spider-Man para cumplir con  su labor.",
      "release_date": "2019-07-05"
    },
    {
      "popularity": 259.469,
      "vote_count": 65,
      "video": false,
      "poster_path": "/di8JeI8otBrQMy6SZr4Hc3Ve3oj.jpg",
      "id": 540901,
      "adult": false,
      "backdrop_path": "/mBBJ3N3an8FLkp0ZpGgIJwHKhBP.jpg",
      "original_language": "en",
      "original_title": "Hustlers",
      "genre_ids": [
        35,
        80,
        18
      ],
      "title": "Estafadoras de Wall Street",
      "vote_average": 6.5,
      "overview": "Inspirado por el artículo viral de la revista New York Magazine, Hustlers sigue a un grupo de ex empleadas de un club de striptease que se unen para vengarse de sus clientes de Wall Street.",
      "release_date": "2019-11-08"
    },
    {
      "popularity": 151.174,
      "vote_count": 1785,
      "video": false,
      "poster_path": "/rdByKDkfyVuVSrkllzxKYXiZmTd.jpg",
      "id": 320288,
      "adult": false,
      "backdrop_path": "/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg",
      "original_language": "en",
      "original_title": "Dark Phoenix",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "X-Men: Fénix oscura",
      "vote_average": 6.1,
      "overview": "Los X-Men se enfrentan a su enemigo más poderoso: uno de sus miembros, Jean Grey. Durante una misión de rescate en el espacio, Jean casi muere al ser alcanzada por una misteriosa fuerza cósmica. Cuando regresa a casa, esa radiación la ha hecho más poderosa, pero mucho más inestable. Mientras lucha con la entidad que habita en su interior, Jean desata sus poderes de formas que no puede controlar ni comprender. Jean cae en una espiral fuera de control haciendo daño a aquellos que más ama y empieza a destruir los lazos que mantienen unidos a los X-Men.",
      "release_date": "2019-06-07"
    },
    {
      "popularity": 127.384,
      "vote_count": 2457,
      "video": false,
      "poster_path": "/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg",
      "id": 420818,
      "adult": false,
      "backdrop_path": "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
      "original_language": "en",
      "original_title": "The Lion King",
      "genre_ids": [
        28,
        12,
        16,
        18,
        10751
      ],
      "title": "El Rey León",
      "vote_average": 7.2,
      "overview": "Un remake del clásico animado de Disney de 1994 'El rey león' que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa, y heredero de todo el reino. Pero cuando su padre es brutalmente asesinado por su tío Scar, decidirá huir, dejando vía libre para que su tío tome el puesto de su padre como líder pelisonline.co de la manada. En su camino, Simba se encuentra con el suricato pelisonline.co Timón y el jabalí Pumba, que le enseñarán a vivir la vida sin preocupaciones. Pero el joven león se verá obligado a decidir entre su vida libre de problemas o su destino como rey .",
      "release_date": "2019-07-18"
    },
    {
      "popularity": 145.496,
      "vote_count": 2471,
      "video": false,
      "poster_path": "/aKw7oqYdfn4pkKYvp18Gd1YhK6m.jpg",
      "id": 458156,
      "adult": false,
      "backdrop_path": "/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg",
      "original_language": "en",
      "original_title": "John Wick: Chapter 3 – Parabellum",
      "genre_ids": [
        28,
        80,
        53
      ],
      "title": "John Wick: Capítulo 3 - Parabellum",
      "vote_average": 7.1,
      "overview": "John Wick (Keanu Reeves) regresa a la acción, solo que esta vez con una recompensa de 14 millones de dólares sobre su cabeza y con un ejército de mercenarios intentando darle caza. Tras asesinar a uno de los miembros del gremio de asesinos al que pertenecía, Wick es expulsado de la organización, pasando a convertirse en el centro de atención de multitud de asesinos a sueldo que esperan detrás de cada esquina para tratar de deshacerse de él.",
      "release_date": "2019-05-31"
    },
    {
      "popularity": 114.39,
      "vote_count": 8049,
      "video": false,
      "poster_path": "/u4G8EkiIBZYx0wEg2xDlXZigTOZ.jpg",
      "id": 920,
      "adult": false,
      "backdrop_path": "/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
      "original_language": "en",
      "original_title": "Cars",
      "genre_ids": [
        12,
        16,
        35,
        10751
      ],
      "title": "Cars",
      "vote_average": 6.7,
      "overview": "El aspirante a campeón de carreras Rayo McQueen está sobre la vía rápida al éxito, la fama y todo lo que él había soñado, hasta que por error toma un desvío inesperado en la polvorienta y solitaria Ruta 66. Su actitud arrogante se desvanece cuando llega a una pequeña comunidad olvidada que le enseña las cosas importantes de la vida que había olvidado.",
      "release_date": "2006-07-06"
    },
    {
      "popularity": 115.752,
      "vote_count": 312,
      "video": false,
      "poster_path": "/hCfKCVrBs2r2gb5hz9E0Oysc9i9.jpg",
      "id": 423204,
      "adult": false,
      "backdrop_path": "/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg",
      "original_language": "en",
      "original_title": "Angel Has Fallen",
      "genre_ids": [
        28
      ],
      "title": "Objetivo: Washington D.C.",
      "vote_average": 5.6,
      "overview": "Tras las amenazas a la Casa Blanca y Londres, esta vez el objetivo a batir es el agente del Servicio Secreto de Estados Unidos Banning (Gerard Butler), quien se ha ganado muchos enemigos al haber frustrado los diferentes planes terroristas hasta ahora.",
      "release_date": "2019-08-30"
    },
    {
      "popularity": 133.134,
      "vote_count": 2128,
      "video": false,
      "poster_path": "/6R75Dl3ks0DbV5OD2ERAoPfCEHu.jpg",
      "id": 301528,
      "adult": false,
      "backdrop_path": "/m67smI1IIMmYzCl9axvKNULVKLr.jpg",
      "original_language": "en",
      "original_title": "Toy Story 4",
      "genre_ids": [
        12,
        16,
        35,
        10751
      ],
      "title": "Toy Story 4",
      "vote_average": 7.7,
      "overview": "Woody siempre ha tenido claro cuál es su labor en el mundo y cuál es su prioridad: cuidar a su dueño, ya sea Andy o Bonnie. Sin embargo, Woody descubrirá lo grande que puede ser el mundo para un juguete cuando Forky se convierta en su nuevo compañero de habitación. Los juguetes se embarcarán en una aventura de la que no se olvidarán jamás.",
      "release_date": "2019-06-21"
    },
    {
      "popularity": 93.008,
      "vote_count": 1374,
      "video": false,
      "poster_path": "/yQ59NPwzHE2XlYwU2VwHF9Wb0IJ.jpg",
      "id": 373571,
      "adult": false,
      "backdrop_path": "/cNt14e43I2DDW6Xd9zFhrP8eOcA.jpg",
      "original_language": "en",
      "original_title": "Godzilla: King of the Monsters",
      "genre_ids": [
        28,
        878
      ],
      "title": "Godzilla: Rey de los Monstruos",
      "vote_average": 6.1,
      "overview": "Los criptozoólogos de la agencia Monarch se enfrentan a un grupo de enormes monstruos: Godzilla, Mothra, Rodan y el enemigo de la humanidad, King Ghidorah. Estas ancianas criaturas harán todo lo posible por sobrevivir, poniendo en riesgo la existencia del ser humano en el planeta.",
      "release_date": "2019-06-21"
    },
    {
      "popularity": 92.682,
      "vote_count": 1071,
      "video": false,
      "poster_path": "/dc8vs0BEooy8jjspR1pOGeZEBSE.jpg",
      "id": 384018,
      "adult": false,
      "backdrop_path": "/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
      "original_language": "en",
      "original_title": "Fast & Furious Presents: Hobbs & Shaw",
      "genre_ids": [
        28
      ],
      "title": "Fast & Furious: Hobbs & Shaw",
      "vote_average": 6.5,
      "overview": "Luke Hobbs (Dwayne Johnson) y Deckard Shaw (Jason Statham) vuelven a la carga para vivir una nueva aventura en la que ellos dos serán los protagonistas absolutos. Su rivalidad y la gran química entre estos dos personajes del universo Fast & Furious serán la clave pelisonline.co de esta nueva historia, en la que deberán trabajar juntos si quieren pararle los pies al villano Brixton (Idris Elba). Además, a la pareja de protagonistas se les unirá un nuevo personaje, Hattie (Vanessa Kirby), la hermana de Shaw.",
      "release_date": "2019-08-01"
    },
    {
      "popularity": 131.315,
      "vote_count": 4,
      "video": false,
      "poster_path": "/8L66hJyXptS9XBt5b4O7WkZuwYj.jpg",
      "id": 578672,
      "adult": false,
      "backdrop_path": "/1MFURVRRsZCap7yG6CPxLbXFFMC.jpg",
      "original_language": "ja",
      "original_title": "L・DK ひとつ屋根の下、「スキ」がふたつ。",
      "genre_ids": [
        10749
      ],
      "title": "L♥DK: Two Loves Under One Roof",
      "vote_average": 6.8,
      "overview": "Aoi Nishimori y Shusei Kugayama están enamorados y comienzan a vivir juntos en secreto. De repente, llega el primo de Shusei, Reon Kugayama, quien descubre su secreto y comienza a vivir con ellos.",
      "release_date": "2019-03-21"
    },
    {
      "popularity": 125.164,
      "vote_count": 280,
      "video": false,
      "poster_path": "/zhxqRc8oqehGcyVq1igPEc2BDfR.jpg",
      "id": 484641,
      "adult": false,
      "backdrop_path": "/pIL9e5cN6RNugDCCLwn3stfb9HE.jpg",
      "original_language": "fr",
      "original_title": "Anna",
      "genre_ids": [
        28,
        53
      ],
      "title": "Anna",
      "vote_average": 6.6,
      "overview": "Bajo la hipnotizante belleza de Anna Poliatova (Sasha Luss) se esconde un secreto que la lleva a poder desatar una imparable agilidad y fuerza, convirtiéndose así en una de las asesinas a sueldo más temidas por los gobiernos de todo el planeta.",
      "release_date": "2019-08-30"
    },
    {
      "popularity": 94.522,
      "vote_count": 149,
      "video": false,
      "poster_path": "/m0clsFEXidLVJ0TueqWOvvImOMh.jpg",
      "id": 625450,
      "adult": false,
      "backdrop_path": "/8wfPjfUgmGpqCIW6gS0pS0pixnA.jpg",
      "original_language": "en",
      "original_title": "Tall Girl",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "title": "A Mi Altura",
      "vote_average": 6.6,
      "overview": "Jodi lleva años acomplejada por su estatura (1,91 m). Siendo con mucho la chica más alta del instituto, nunca se ha sentido a gusto con su cuerpo. Después de años andando encorvada, aguantando burlas e intentando pasar desapercibida, por fin decide que ya es hora de superar sus inseguridades y se enreda en un trío amoroso en el instituto",
      "release_date": "2019-09-13"
    },
    {
      "popularity": 144.749,
      "vote_count": 3257,
      "video": false,
      "poster_path": "/zb7FyFTy7ZKkPxkqo9gyiKOLS1k.jpg",
      "id": 420817,
      "adult": false,
      "backdrop_path": "/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg",
      "original_language": "en",
      "original_title": "Aladdin",
      "genre_ids": [
        12,
        35,
        14,
        10749,
        10751
      ],
      "title": "Aladdín",
      "vote_average": 7.1,
      "overview": "Aladdin es un adorable pero desafortunado ladronzuelo enamorado de la hija del Sultán, la princesa Jasmine. Para intentar conquistarla, acepta el desafío de Jafar, que consiste en entrar a una cueva en mitad del desierto para dar con una lámpara mágica que le concederá todos sus deseos. Allí es donde Aladdín conocerá al Genio, dando inicio a una aventura como nunca antes había imaginado.",
      "release_date": "2019-05-24"
    },
    {
      "popularity": 88.686,
      "vote_count": 498,
      "video": false,
      "poster_path": "/jka65aOnGLbWAQLbG2q8ZLtpMKW.jpg",
      "id": 515195,
      "adult": false,
      "backdrop_path": "/aLNsCPNwzWbDmU4uyXSRxQSgzyJ.jpg",
      "original_language": "en",
      "original_title": "Yesterday",
      "genre_ids": [
        35,
        14,
        10402,
        10749
      ],
      "title": "Yesterday",
      "vote_average": 6.7,
      "overview": "El cineasta británico Danny Boyle (T2: Transpotting, Steve Jobs) dirige este filme musical cuyo guión escribe Richard Curtis (Una cuestión de tiempo). El reparto principal de la película está formado por Lily James (La sociedad literaria y el pastel de piel de patata), Kate McKinnon (Cazafantasmas), Ana de Armas (Blade Runner 2049), Himesh Patel (Gente de barrio), además del cantante y compositor británico Ed Sheeran.",
      "release_date": "2019-07-05"
    },
    {
      "popularity": 76.81,
      "vote_count": 9370,
      "video": false,
      "poster_path": "/br6krBFpaYmCSglLBWRuhui7tPc.jpg",
      "id": 299534,
      "adult": false,
      "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      "original_language": "en",
      "original_title": "Avengers: Endgame",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Vengadores: Endgame",
      "vote_average": 8.3,
      "overview": "Después de los eventos devastadores de 'Vengadores: Infinity War', el universo está en ruinas debido a las acciones de Thanos. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles sean las consecuencias... Cuarta y última entrega de la saga \"Vengadores\".",
      "release_date": "2019-04-25"
    },
    {
      "popularity": 90.212,
      "vote_count": 383,
      "video": false,
      "poster_path": "/pSP0pmb61S8O2RFsPS2A06aZFLT.jpg",
      "id": 533642,
      "adult": false,
      "backdrop_path": "/vHse4QK31Vc3X7BKKU5GOQhYxv6.jpg",
      "original_language": "en",
      "original_title": "Child's Play",
      "genre_ids": [
        27
      ],
      "title": "Muñeco Diabólico",
      "vote_average": 6,
      "overview": "Karen es una madre soltera que busca el regalo perfecto de cumpleaños para Andy, su hijo. Después de encontrar un muñeco y regalárselo a su hijo, será cuando ambos descubran la naturaleza maligna que esconde en su interior este juguete.",
      "release_date": "2019-06-28"
    },
    {
      "popularity": 70.008,
      "vote_count": 209,
      "video": false,
      "poster_path": "/8zqptFnq7GhpVEXzfOnNxWbN0U2.jpg",
      "id": 521777,
      "adult": false,
      "backdrop_path": "/6Xsz9KHQmCcIcj3CoWQq5eLtVoT.jpg",
      "original_language": "en",
      "original_title": "Good Boys",
      "genre_ids": [
        35
      ],
      "title": "Chicos buenos",
      "vote_average": 6.6,
      "overview": "Después de ser invitados a su primera \"fiesta del beso\", tres buenos amigos destrozan por casualidad un dron que tenían prohibido tocar. Para reemplazarlo, se ausentan de clase y toman una serie de decisiones erróneas, involucrándose en un caso relacionado con droga, policía y, sobre todo, con muchas lágrimas.",
      "release_date": "2019-08-23"
    }
  ];

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies[id];
  }

}
