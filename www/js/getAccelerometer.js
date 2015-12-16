var prevX = 0;
var firstTime = true;

function onSuccessAccelerometer (acceleration) {
	// Control de movimiento a la izquierda
	if(acceleration.x - prevX < -9 && firstTime == false) {
		//alert("Te has movido a la derecha");
	}

	// Control de movimiento a la derecha
	else if(acceleration.x - prevX > 9 && firstTime == false){
		//alert("Te has movido a la izquierda");
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

var optionsAccelerometer = {frequency: 500};