<?

	include ("conectaBD.php");

	// COGEMOS DATOS DE ENTRADA
	$resultado['enviado'] = $_POST;

	//ANALIZAMOS LOS DATOS
	if ($_POST['sugar'] == "sugarLow") {
		$sugar = 35; // Si azúcar bajo, no puede ser mayor que 35
	}
	elseif ($_POST['sugar'] == "sugarMod"){
		$sugar = 50; // Si azúcar medio, no puede ser mayor que 50
	}
	else {
		$sugar = 1000; // Si azúcar alto, no importa, por lo tanto "+infinito"
	}

	/*if ($_POST['energy'] == "energyNormal") {
		$energy = 500;
	}
	else {
		$energy = 150;
	}*/

	//$resultado['respuesta'] =  "Vas a tomar " .$sugar. " y " .$energy. " calorias";

	
	// CONSULTA SQL
	if ($_POST['place'] == "World") {
		$sql = 'SELECT * 
			FROM FOOD 
			WHERE NOT EXISTS ( 
				SELECT *
				FROM FOOD_INGREDIENT FO, INGREDIENT INGRE 
				WHERE (FOOD.id_food=FO.id_food) AND (FO.id_ingredient=INGRE.id_ingredient) AND
						(INGRE.sugar>' . $sugar . '));';
	}
	else {
		$place = $_POST['place'];
		$sql = 'SELECT * 
			FROM FOOD 
			WHERE (place=\'' . $place . '\') AND NOT EXISTS ( 
				SELECT *
				FROM FOOD_INGREDIENT FO, INGREDIENT INGRE 
				WHERE (FOOD.id_food=FO.id_food) AND (FO.id_ingredient=INGRE.id_ingredient) AND
						(INGRE.sugar>' . $sugar . '));';
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

