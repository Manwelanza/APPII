$(document).ready(function() {
	alert ("holaaaaaaa");
  $('#randomFoodDiseases').submit(function(evento) {
	  alert ("holaaaaaaa3");
    $('#respuesta').hide();
    evento.preventDefault();
	// ======================================================
	// Hacemos todas las comprobaciones de las enfermedades
	// ======================================================
	
	// diabetes
	if (document.getElementById("diabetes").checked) {
		sugar = "sugarLow";
	}
	else {
		sugar = "sugarHigh";
	}
	
	// Tensión alta
	if (document.getElementById("hypertension").checked) {
		sodium = "sodiumLow";
	}
	else {
		sodium = "sodiumHigh";
	}
	
	// Obesidad
	if (document.getElementById("obesity").checked) {
		energy = "energyLow";
	}
	else {
		energy = "energyHigh";
	}
	
	// Colesterol alto
	if (document.getElementById("cholesterol").checked) {
		fats = "fatsLow";
	}
	else {
		fats = "fatsHigh";
	}
	country = "World";
	// Nos conectamos con la base de datos
	ajaxCall ();
	});
 });