var prevX = 0;
var firstTime = true;
var paginaActual = 0;
var arrayEnlaces = ["index.html", "desarrolladores.html", "enfermedades.html", "ingredientes.html"];

function onSuccessAccelerometer (acceleration) {

	// Control de movimiento a la izquierda
	if(acceleration.x - prevX < -5 && firstTime == false) {
		//alert("Te has movido a la derecha");

		if(paginaActual == arrayEnlaces.lenght - 1)
			paginaActual = 0;
		else
			paginaActual++;

		window.location = arrayEnlaces[paginaActual];
	}

	// Control de movimiento a la derecha
	else if(acceleration.x - prevX > 5 && firstTime == false){
		//alert("Te has movido a la izquierda");

		if(paginaActual == 0)
			paginaActual = arrayEnlaces.lenght - 1;
		else
			paginaActual--;
		
		window.location = arrayEnlaces[paginaActual];
	}

	prevX = acceleration.x;

	// Controlamos que sea la primera ejecucicón para darle un valor a prevX
	if(firstTime == true) {
		firstTime = false;
	}
}

function onErrorAccelerometer () {
	alert("Error!");
}

// Se actualizará el acelerómetro cada 0.5s
var optionsAccelerometer = {frequency: 500};