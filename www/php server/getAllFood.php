<?

	include ("conectaBD.php");

	// COGEMOS DATOS DE ENTRADA
	$resultado['enviado'] = $_POST;

	//ANALIZAMOS LOS DATOS
	/*if ($_POST['sugar'] == "sugarYes") {
		$sugar = 100;
	}
	else {
		$sugar = 36;
	}

	if ($_POST['energy'] == "energyNormal") {
		$energy = 500;
	}
	else {
		$energy = 150;
	}*/

	//$resultado['respuesta'] =  "Vas a tomar " .$sugar. " y " .$energy. " calorias";

	$place = $_POST['place'];
	// CONSULTA SQL
	$sql = 'SELECT * FROM FOOD WHERE place=\'' . $place . '\';';
	$consulta1 = getArraySQL($sql);

	// DEVOLVEMOS UN RESULTADO

	$resultado['respuesta'] = $consulta1;
	//$resultado['respuesta'] = $sql;
	echo json_encode($resultado); 

?>

