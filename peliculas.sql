CREATE DATABASE peliculas;
USE peliculas;


-- ----------------------------
-- Table structure for peliculas
-- ----------------------------
DROP TABLE IF EXISTS `peliculas`;
CREATE TABLE `peliculas`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `genero` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `titulo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `imagen` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `sinopsis` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `review` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `fecha_publicacion` date NULL DEFAULT NULL,
  `actores` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `directores` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `franquicia` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of peliculas
-- ----------------------------
INSERT INTO `peliculas` VALUES (1, 'Terror', 'El títere', '/uploads/1687810379494.JPG', 'Después de que su esposa tiene un triste final, Jamie Ashen regresa a su espantosa ciudad natal de Ravens Fair para resolver el misterio que rodea su muerte. Una vez ahí, él descubre la leyenda de Mary Shaw', 'Me gustó mucho, es una buena película *-* Es una peli para ver de principio a fin *-* A mi me causó mucho terror, por las noches no podría dormir ... que miedooo!!! Nunca la vean a las 3 de la madrugada *-* ', '2007-03-16', 'Ryan Kwanten, Judith Anna Roberts', 'James Wan', 'El títere');
INSERT INTO `peliculas` VALUES (2, 'Familiar', 'La Familia Mitchell vs. Las Máquinas', '/uploads/1688504190288.jpg', 'El viaje por carretera de la familia Mitchell, que va a acompañar a uno de sus hijos a su primer día de universidad, se ve interrumpido por una insurrección tecnológica que amenaza a la humanidad.', 'Una película muy divertida, para toda la familia y espectacular visualmente, al igual que en la anterior película producida por Sony Animation "Spiderman Into The Spiderverse", posee un innovador tipo de animación que mezcla un estilo de animación 3D con un estilo tradicional de animación 2D el cual da mucho dinamismo y belleza a la escena. *-* ', '2021-11-20', 'Abbi Jacobson, Danny McBride', 'Mike Rianda', 'Los Mitchell');
INSERT INTO `peliculas` VALUES (3, 'Musical', 'Tick, Tick... Boom!', '/uploads/1688504497751.jpg', 'Un joven y prometedor compositor de teatro se sumerge en el amor, la amistad y las presiones de la vida como artista en la ciudad de Nueva York.', 'Me gusta por los diversos tipos de baile *-* ', '2021-11-10', 'Andrew Garlfield', 'Lin-Manuel Miranda', 'Tick, Tick... Boom!');
INSERT INTO `peliculas` VALUES (4, 'Acción', 'Wakanda Forever', '/uploads/1688503208048.jpeg', 'La hermana menor de la pantera negra consigue unos nuevos poderes para defender a su pueblo de una nueva amenaza proveniente del fondo del mar', 'Esta película es un gran tributo y homenaje al fallecido actor Chadwick Boseman, por su anterior actuación en las diferentes películas de Marvel, podemos decir que es una gran secuela que nos da a conocer más del país que tanto estaba dispuesto a proteger, tanto a su gente como a la protagonista, su hermana Shuri. *-* ', '2022-11-11', 'Letitia Wright, Tenoch Huerta', 'Ryan Coogler', 'Marvel');
INSERT INTO `peliculas` VALUES (3, 'Acción', 'Spider-Man: a través del Spider-Verso', '/uploads/1688503817662.jpg', 'Después de reunirse con Gwen Stacy, el amigable vecino de tiempo completo de Brooklyn Spiderman, es lanzado a través del multiverso, donde se encuentra a un equipo de gente araña encomendada con proteger su mera existencia.', 'Es una película genial! Me encanta! Todo fan de Spiderman debe ir a verla. *-* ', '2023-06-01', 'Shameik Moore, Oscar Isaac', 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson', 'Marvel');

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `correo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO `usuarios` VALUES (1, 'Omar Hernandez', 'Omar@Her.com	', '$2a$08$uD9zUgRZOg/tt8JbpMPLPuhrY/rY9jABoZbjyYIOwDcnjjgL8/YSq');
INSERT INTO `usuarios` VALUES (2, 'Luis Martínez', 'luis@martinez.com', '$2a$08$l/fZ68gqU1c55Jhs0vc6sOsSECNCBL4kgpqYntiwiPKzWn2JsIFoW');

SET FOREIGN_KEY_CHECKS = 1;
