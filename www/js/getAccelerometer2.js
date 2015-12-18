function onSuccessAccelerometer2 (acceleration) {
	if (n_food <= 0) {
		prevX = acceleration.x;
	}
	
	if (enabled == true) {
		// Control de movimiento a la derecha
		if(acceleration.x - prevX < -7 && n_food > 0) {
			if(index == n_food - 1) {
				index = 0;
				showFood();
			}
			else {
				index++;
				showFood();
			}
		}

		// Control de movimiento a la izquierda
		else if(acceleration.x - prevX > 7 && n_food > 0) {
			if(index == 0) {
				index = n_food - 1;
				showFood();
			}
			else {
				index--;
				showFood();
			}
			
			
		}
		
		
	}

}

function onErrorAccelerometer2 () {
	alert("ERROR: ACCELEROMETER NOT FOUND!");
}

// Se actualizará el acelerómetro cada 0.2s
var optionsAccelerometer2 = {frequency: 100};