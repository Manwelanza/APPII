<?

	include ("conectaBD.php");

	// COGEMOS DATOS DE ENTRADA
	$resultado['enviado'] = $_POST;
	
	
	// =================================================
	// ANALIZAMOS LA COMPOSICIÓN QUÍMICA QUE SE DESEAN
	// =================================================
	
	// Azúcar (usamos el índice glucémico)
	if ($_POST['sugar'] == "sugarLow") {
		$sugar = 36; // Si queremos azúcar bajo, índice glucémico no puede ser mayor que 35
	}
	elseif ($_POST['sugar'] == "sugarMod"){
		$sugar = 51; // Si queremos azúcar medio, índice glucémico no puede ser mayor que 50
	}
	else {
		$sugar = 1000; // Si azúcar no importa, por lo tanto "+infinito"
	}

	// Calorías (40% de la ingesta calórica de un día)
	if ($_POST['energy'] == "energyLow") {
		$energy = 601.0; // Si queremos pocas calorías, no puede ser mayor de 600 (40% de 1500)
	}
	elseif ($_POST['energy'] == "energyMod") {
		$energy = 801.0; // Si queremos calorías medías, no puede ser mayor de 800 (40% de 2000)
	}
	else {
		$energy = 10000.0; // Si no importa calorías , "+ infinito"
	}
	
	// Sodio (50% del sodio de un día)
	if ($_POST['sodium'] == "sodiumLow") {
		$sodium = 0.750; // Si queremos sodio bajo, no puede ser mayor de 0.750 (50% de 1.500)
	}
	elseif ($_POST['sodium'] == "sodiumMod") {
		$sodium = 1.150; // Si queremos sodio medio, no puede ser mayor de  (50% de 2.300)
	}
	else {
		$sodium = 1000.0; // Si sodio no importa, "+ infinito"
	}
	
	// Grasas (40% de las grasas de un día)
	if ($_POST['fats'] == "fatsLow") {
		$fats = 22.1; // Si queremos grasas bajas, no puede ser mayor de  (40% de 55)
	}
	elseif ($_POST['fats'] == "fatsMod") {
		$fats = 29.3; // Si queremos grasas moderadas, no puede ser mayor de  (40% de 73)
	}
	else {
		$fats = 1000.0; // Si grasas no importan, "+ infinito"
	}


	// =============================
	// Realizamos la consulta SQL 
	// =============================
	
	
	if ($_POST['place'] == "World") {
		$sql = 'SELECT * 
			FROM FOOD 
			WHERE NOT EXISTS ( 
				SELECT *
				FROM FOOD_INGREDIENT FO, INGREDIENT INGRE 
				WHERE (FOOD.id_food=FO.id_food) AND (FO.id_ingredient=INGRE.id_ingredient) AND
						(INGRE.sugar>' . $sugar . ')) 
			AND (' . $energy . '>(
				SELECT SUM(energy)
				FROM INGREDIENT INGRE
				WHERE INGRE.id_ingredient IN (
					SELECT id_ingredient
					FROM FOOD_INGREDIENT FO
					WHERE (FOOD.id_food=FO.id_food) AND (FO.type<>"a bit"))))
			AND (' . $sodium . '>(
				SELECT SUM(sodium)
				FROM INGREDIENT INGRE
				WHERE INGRE.id_ingredient IN (
					SELECT id_ingredient
					FROM FOOD_INGREDIENT FO
					WHERE (FOOD.id_food=FO.id_food) AND (FO.type<>"a bit"))))
			AND (' . $fats . '>(
				SELECT SUM(fats)
				FROM INGREDIENT INGRE
				WHERE INGRE.id_ingredient IN (
					SELECT id_ingredient
					FROM FOOD_INGREDIENT FO
					WHERE (FOOD.id_food=FO.id_food) AND (FO.type<>"a bit"))));';

	}
	else {
		$place = $_POST['place'];
		$sql = 'SELECT * 
			FROM FOOD 
			WHERE (place=\'' . $place . '\') AND NOT EXISTS ( 
				SELECT *
				FROM FOOD_INGREDIENT FO, INGREDIENT INGRE 
				WHERE (FOOD.id_food=FO.id_food) AND (FO.id_ingredient=INGRE.id_ingredient) AND
						(INGRE.sugar>' . $sugar . ')) 
			AND (' . $energy . '>(
				SELECT SUM(energy)
				FROM INGREDIENT INGRE
				WHERE INGRE.id_ingredient IN (
					SELECT id_ingredient
					FROM FOOD_INGREDIENT FO
					WHERE (FOOD.id_food=FO.id_food) AND (FO.type<>"a bit"))))
			AND (' . $sodium . '>(
				SELECT SUM(sodium)
				FROM INGREDIENT INGRE
				WHERE INGRE.id_ingredient IN (
					SELECT id_ingredient
					FROM FOOD_INGREDIENT FO
					WHERE (FOOD.id_food=FO.id_food) AND (FO.type<>"a bit"))))
			AND (' . $sodium . '>(
				SELECT SUM(sodium)
				FROM INGREDIENT INGRE
				WHERE INGRE.id_ingredient IN (
					SELECT id_ingredient
					FROM FOOD_INGREDIENT FO
					WHERE (FOOD.id_food=FO.id_food) AND (FO.type<>"a bit"))));';
	}
	/*$sql = 'SELECT * 
			FROM FOOD 
			WHERE place=\'' . $place . '\';';*/
	$consulta1 = getArraySQL($sql);

	// DEVOLVEMOS UN RESULTADO

	$resultado['respuesta'] = $consulta1;
	//$resultado['respuesta'] = $sql;
	echo json_encode($resultado); 

?>

