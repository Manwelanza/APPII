document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady () {
	navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
	//navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess (acceleration) {
	alert('Acceleration X: ' + acceleration.x);
	//alert("Latidud: " + position.coords.latitude);
}

function onError () {
	alert("Error!");
}