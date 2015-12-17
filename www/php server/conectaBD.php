<?

$aux = "c";

function connectDB () {
	$conexion = mysqli_connect("mysql.hostinger.es", "u511954208_admin","password", "u511954208_appii");
	if($conexion){
		 //echo 'Todo ok con la conexión a la base de datos!';
		 $aux += "h";
	}
	else{
        //echo 'Ha sucedido un error inesperado en la conexión de la base de datos';
		$aux += "a";
    }   
    return $conexion;
}

function disconnectDB($conexion){
    $close = mysqli_close($conexion);
    if($close){}
	else{
        //echo 'Ha sucedido un error inesperado en la desconexión de la base de datos';
		$aux += "b";
    }   
    return $close;
}

function getArraySQL($sql){
    //Creamos la conexión con la función anterior
    $conexion = connectDB();
    //generamos la consulta
        mysqli_set_charset($conexion, "utf8"); //formato de datos utf8
    if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión cancelar programa
    $rawdata = array(); //creamos un array
    //guardamos en un array multidimensional todos los datos de la consulta
    $i=0;
    while($row = mysqli_fetch_array($result))
    {
        $rawdata[$i] = $row;
        $i++;
    }
    disconnectDB($conexion); //desconectamos la base de datos
    return $rawdata; //devolvemos el array
}

?>