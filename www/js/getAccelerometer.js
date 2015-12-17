var prevX = 0;
var firstTime = true;
var arrayEnlaces = new Array("index.html", "desarrolladores.html", "enfermedades.html", "ingredientes.html");
// Asignamos la página actual dependiendo de la url actual
var regex = /.+\/www\/(.*)/g;
var url = window.location.pathname;
var paginaActual;
url = url.replace(regex, "\\$1");

if(url == ("\\" + arrayEnlaces[0]))
	paginaActual = 0;
else if(url == ("\\" + arrayEnlaces[1]))
	paginaActual = 1;
else if(url == ("\\" + arrayEnlaces[2]))
	paginaActual = 2;
else if(url == ("\\" + arrayEnlaces[3]))
	paginaActual = 3;


function onSuccessAccelerometer (acceleration) {
	// Control de movimiento a la derecha
	if(acceleration.x - prevX < -7 && firstTime == false) {
		if(paginaActual == arrayEnlaces.length - 1) {
			paginaActual = 0;
		}
		else {
			paginaActual++;
		}
		window.location = arrayEnlaces[paginaActual];
		//alert("Current page = " + paginaActual);
	}

	// Control de movimiento a la izquierda
	else if(acceleration.x - prevX > 7 && firstTime == false) {
		if(paginaActual == 0) {
			paginaActual = arrayEnlaces.length - 1;
		}
		else {
			paginaActual--;
		}
		window.location = arrayEnlaces[paginaActual];
		//alert("Current page = " + paginaActual);
	}

	prevX = acceleration.x;

	// Controlamos que sea la primera ejecucicón para darle un valor a prevX
	if(firstTime == true) {
		firstTime = false;
	}
}

function onErrorAccelerometer () {
	alert("ERROR: ACCELEROMETER NOT FOUND!");
}

// Se actualizará el acelerómetro cada 0.2s
var optionsAccelerometer = {frequency: 200};