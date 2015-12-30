var food = "";
var index = 0;
var n_food = 0;
var foods;
var enabled = true;
var sugar = "";
var energy = "";
var sodium = "";
var fats = "";
var showResult = false;

$(document).ready(function() {
  $('#randomFood').submit(function(evento) {
    evento.preventDefault();
	sugar = $('input:radio[name=sugar]:checked').val();
	energy = $('input:radio[name=energy]:checked').val();
	sodium = $('input:radio[name=sodium]:checked').val();
	fats = $('input:radio[name=fats]:checked').val();
	if ($('input:radio[name=gps]:checked').val() == "gpsYes") {
		// Operacion con geolocalización
		navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
	}
	else {
		country = "World";
		ajaxCall ();
		alert ("Search completed");
	}
  });
  
  $("#randomFood2").click(function(){
	  myFunction ();
  });
  
  
});

function myFunction () {
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
	
	// hypertension
	if (document.getElementById("hypertension").checked) {
		sodium = "sodiumLow";
	}
	else {
		sodium = "sodiumHigh";
	}
	
	// Obesity
	if (document.getElementById("obesity").checked) {
		energy = "energyLow";
	}
	else {
		energy = "energyHigh";
	}
	
	// Cholesterol
	if (document.getElementById("cholesterol").checked) {
		fats = "fatsLow";
	}
	else {
		fats = "fatsHigh";
	}
	
	// Local Food
	if ($('input:radio[name=gps2]:checked').val() == "gpsYes2") {
		// Operacion con geolocalización
		navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
	}
	else {
		country = "World";
		ajaxCall ();
		alert ("Search completed");
	}
};
  
  function ajaxCall () {
	  enabled = false;
    $.ajax({
      url: 'http://manwelanza.esy.es/APPII/getAllFood.php',
      data: {
		place: country,
		sugar: sugar,
		energy: energy,
		sodium: sodium,
		fats: fats
	  },
      type: 'POST',
      dataType: 'json',
      success: function(datos) {
		//alert (datos.respuesta);
        //$('#respuesta').text(datos.respuesta).fadeIn('slow');
		n_food = datos.respuesta.length;
		foods = datos.respuesta;
		index = 0;
		showFood ();
      }
    });
  };
  
  function showFood () {
	  enabled = false;
	food = "<div class=\"ui-responsive\">"
	food += "<img src=\"" + foods[index]["url_image"] + "\" height=\"300\" width=\"300\">"
	food += "<p><b>Name:</b> " + foods[index]["name"] + "</p>";
	food += "<p><b>Country: </b>" + foods[index]["place"] + "</p>";
	getIngredients (foods);
  }
  
  function getIngredients (query) {
	  enabled = false;
	  $.ajax({
      url: 'http://manwelanza.esy.es/APPII/getIngredients.php',
      data: {
		id_food: query[index]["id_food"]
	  },
      type: 'POST',
      dataType: 'json',
      success: function(datos) {
		food += "<p><b>Ingredients:</b></p><ul>";
		for (i=0; i < datos.respuesta.length; i++) {
			food += "<li>" + datos.respuesta[i]["name"] + "</li>";
		}
		food += "</ul>";
		$("#result").html(food).fadeIn('slow');
		if (!showResult){
			$("#result").hide();
		}
		enabled = true;
      }
    });
  }
  
  
