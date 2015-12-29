<?

	include ("conectaBD.php");

	// COGEMOS DATOS DE ENTRADA
	$resultado['enviado'] = $_POST;

	//ANALIZAMOS LOS DATOS
	if ($_POST['sugar'] == "sugarLow") {
		$sugar = 36; // Si azúcar bajo, no puede ser mayor que 35
	}
	elseif ($_POST['sugar'] == "sugarMod"){
		$sugar = 51; // Si azúcar medio, no puede ser mayor que 50
	}
	else {
		$sugar = 1000; // Si azúcar alto, no importa, por lo tanto "+infinito"
	}

	if ($_POST['energy'] == "energyLow") {
		$energy = 601.0;
	}
	elseif ($_POST['energy'] == "energyMod") {
		$energy = 801.0;
	}
	else {
		$energy = 10000.0;
	}

	//$resultado['respuesta'] =  "Vas a tomar " .$sugar. " y " .$energy. " calorias";

	
	// CONSULTA SQL
	if ($_POST['place'] == "World") {
		$sql = 'SELECT * 
			FROM FOOD 
			WHERE NOT EXISTS ( 
				SELECT *
				FROM FOOD_INGREDIENT FO, INGREDIENT INGRE 
				WHERE (FOOD.id_food=FO.id_food) AND (FO.id_ingredient=INGRE.id_ingredient) AND
						(INGRE.sugar>' . $sugar . ')) AND (' . $energy . '>(
							SELECT SUM(energy)
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
						(INGRE.sugar>' . $sugar . ')) AND (' . $energy . '>(
							SELECT SUM(energy)
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

