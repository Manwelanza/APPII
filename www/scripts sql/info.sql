-- Todas las cantidades van en gramos, excepto las de la tabla FOOD_ingredient, que depende del atributo type
-- En el caso de la tabla de INGREDIENT, todas las cantidades son cada 100 gramos

-- Cuando un plato no tengo una zona especifica, poner "World"
-- FOOD (id, name, type, url_image, place)
INSERT INTO FOOD VALUES 
(1, "omelette", "dinner", "images/omelette.jpg", "World"),
(2, "paella", "lunch", "images/paella.jpg", "Spain"),
(3, "spanish omelette", "lunch", "images/spanish_omelette.jpg", "Spain"),
(4, "eggplant pie", "lunch", "images/eggplant_pie.jpg", "World");


-- sugar = índice glucémico (35 o inferior bajo | 36-50 medio | 51 o superior alto)
-- INGREDIENT (id, name, sugar, energy, fats, carbohydrates, sodium)
INSERT INTO INGREDIENT VALUES
(1, "lean pork", 0.0, 359.0, 1.58, 70.90, 0.007),
(2, "chicken breast", 0.0, 145.0, 6.20, 0.0, 0.066),
(3, "garlic clove", 30.0, 119.0, 0.23, 24.30, 0.019),
(4, "crushed tomatoes", 35, 38.10, 0.50, 5.55, 0.59),
(5, "rice", 70.0, 364.0, 0.90, 81.60, 0.0039),
(6, "squid", 0.0, 80.40, 1.40, 0.7, 0.11),
(7, "shrimp", 5.0, 110.0, 0.80, 1.50, 0.305),
(8, "mussel", 0.0, 72.0, 1.96, 3.40, 0.296),
(9, "pea", 35.0, 90.70, 0.90, 11.30, 0.002),
(10, "bell pepper", 15, 32.20, 0.40, 5.20, 0.070),
(11, "saffron", 0.0, 352.0, 5.85, 61.50, 0.148),
(12, "salt", 0.0, 0.0, 0.0, 0.0, 38.850),
(13, "potato", 70.0, 73.59, 0.11, 14.80, 0.0027),
(14, "chicken egg", 0.0, 162.0, 12.10, 0.68, 0.144),
(15, "virgin olive oil", 0.0, 899.0, 99.90, 0.0, 0.0),
(16, "eggplant", 20.0, 21.02, 0.18, 2.39, 0.003),
(17, "onion", 15.0, 31.85, 0.25, 5.30, 0.003),
(18, "carrot", 30.0, 39.40, 0.20, 6.90, 0.061),
(19, "cheese", 0.0, 339.00, 29.0, 1.0, 0.547),
(20, "white pepper", 5.0, 283.0, 2.1, 42.41, 0.005);

-- gr = gramos
-- u = unidades
-- a bit = un poco
-- FOOD_VALUES (id_food, id_ingredient, quantity, type)
INSERT INTO FOOD_INGREDIENT VALUES
(1, 14, 4, "u"),
(1, 12, 1, "a bit"),
(1, 15, 1, "a bit"),
(2, 1, 150, "gr"),
(2, 2, 500, "gr"),
(2, 3, 2, "u"),
(2, 4, 200, "gr"),
(2, 5, 350, "gr"),
(2, 6, 250, "gr"),
(2, 7, 10, "u"),
(2, 8, 300, "gr"),
(2, 9, 60, "gr"),
(2, 10, 1, "u"),
(2, 11, 1, "a bit"), 
(2, 12, 1, "a bit"),
(3, 13, 800, "gr"),
(3, 14, 7, "u"),
(3, 12, 1, "a bit"),
(3, 15, 5, "a bit"),
(4, 16, 500, "gr"),
(4, 14, 3, "u"),
(4, 17, 200, "gr"),
(4, 18, 100, "gr"),
(4, 19, 100, "gr"),
(4, 3, 1, "u"),
(4, 15, 2, "a bit"),
(4, 12, 1, "a bit"),
(4, 20, 1, "a bit");
