-- Todas las cantidades van en gramos, excepto las de la tabla FOOD_ingredient, que depende del atributo type
-- En el caso de la tabla de INGREDIENT, todas las cantidades son cada 100 gramos

-- Cuando un plato no tengo una zona especifica, poner "World"
-- FOOD (id, name, type, url_image, place)
INSERT INTO FOOD VALUES 
(5, "White rice with chiken", "lunch", "images/rice_chicken.jpg", "World"),
(6, "Gazpacho", "lunch", "images/gazpacho.jpg", "Spain"),
(7, "Cuttlefish in its own ink", "lunch", "images/cuttlefish_in_its_own_ink.jpg", "Spain"),
(8, "Spatter chicken", "dinner", "images/spatter_chicken.jpg", "World");

-- sugar = índice glucémico (35 o inferior bajo | 36-50 medio | 51 o superior alto)
-- INGREDIENT (id, name, sugar, energy, fats, carbohydrates, sodium)
INSERT INTO INGREDIENT VALUES
(21, "Tomato", 30.0, 22.17, 0.21, 3.50, 0.009),
(22, "Green pepper", 15.0, 19.69, 0.8, 1.60, 0.004),
(23, "Cucumber", 15.0, 13.18, 0.20, 1.90, 0.003),
(24, "Bread", 50.0, 115.0, 0.5, 22.25, 0.2503),
(25, "Vinegar", 5.0, 4.0, 0.0, 0.60, 0.02),
(26, "White wine", 0.0, 61.0, 0.0, 0.10, 0.002),
(27, "Cuttlefish", 0.0, 80.40, 1.40, 0.70, 0.11),
(28, "Lettuce", 15.0, 19.60, 0.60, 1.40, 0.003),
(29, "Radish", 15.0, 17.26, 0.14, 2.13, 0.021);

-- gr = gramos
-- u = unidades
-- a bit = un poco
-- FOOD_VALUES (id_food, id_ingredient, quantity, type)
INSERT INTO FOOD_INGREDIENT VALUES
(5, 2, 100, "gr"),
(5, 5, 200, "gr"),
(6, 21, 200, "gr"),
(6, 22, 15, "gr"),
(6, 23, 8, "gr"),
(6, 17, 25, "gr"),
(6, 24, 12, "gr"),
(6, 3, 1, "u"),
(6, 15, 1, "a bit"),
(6, 25, 1, "a bit"),
(6, 12, 1, "a bit"),
(7, 17, 3, "u"),
(7, 3, 2, "u"),
(7, 15, 1, "a bit"),
(7, 26, 50, "gr"),
(7, 27, 200, "gr"),
(7, 12, 1, "a bit"),
(8, 29, 8, "u"),
(8, 28, 100, "gr"),
(8, 17, 1, "u"),
(8, 25, 1, "a bit"),
(8, 2, 100, "gr");