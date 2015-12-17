<?

	include ("conectaBD.php");

	// COGEMOS DATOS DE ENTRADA
	$resultado['enviado'] = $_POST;
	$id_food = $_POST['id_food'];
	$sql = 'SELECT * FROM INGREDIENT WHERE id_ingredient IN (SELECT id_ingredient FROM FOOD_INGREDIENT WHERE id_food=' . $id_food . ');';
	$consulta2 = getArraySQL($sql);
	
	$resultado['respuesta'] = $consulta2;
	echo json_encode($resultado); 
	

?>
