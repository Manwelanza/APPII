var food = "";
var index = 0;
var n_food = 0;
var foods;
var enabled = true;
var sugar = "";
var energy = "";
var sodium = "";
var fats = "";

$(document).ready(function() {
  $('#randomFood').submit(function(evento) {
    $('#respuesta').hide();
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
	}
  });
  
  
  
});

function myFunction () {
	  alert ("holaaaaaaa2");
    $('#respuesta').hide();
    //evento.preventDefault();
	// ======================================================
	// Hacemos todas las comprobaciones de las enfermedades
	// ======================================================
	
	// diabetes
	alert ("AAAA1");
	if (document.getElementById("diabetes").checked) {
		sugar = "sugarLow";
	}
	else {
		sugar = "sugarHigh";
	}
	
	// Tensión alta
	alert ("AAAA2");
	if (document.getElementById("hypertension").checked) {
		sodium = "sodiumLow";
	}
	else {
		sodium = "sodiumHigh";
	}
	alert ("AAAA3");
	// Obesidad
	if (document.getElementById("obesity").checked) {
		energy = "energyLow";
	}
	else {
		energy = "energyHigh";
	}
	
	// Colesterol alto
	alert ("AAAA4");
	if (document.getElementById("cholesterol").checked) {
		fats = "fatsLow";
	}
	else {
		fats = "fatsHigh";
	}
	country = "World";
	// Nos conectamos con la base de datos
	alert ("AAAA");
	ajaxCall ();
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
	  $('#respuesta').hide();
	food = "<table data-role=\"table\" class=\"ui-responsive\">";
	food += "<thead><tr><th></th><th></th></tr></thead>";
	food += "<tbody><tr><th><img src=\"" + foods[index]["url_image"] + "\" height=\"120\" width=\"120\"></th><th><ul><li><b>Name:</b> " + foods[index]["name"] + "</li>";
	food += "<li><b>Country: </b>" + foods[index]["place"] + "</li>";
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
		food += "<li><b>Ingredients:</b><ul>";
		for (i=0; i < datos.respuesta.length; i++) {
			food += "<li>" + datos.respuesta[i]["name"] + "</li>";
		}
		food += "</ul></li>";
		food += "</ul></th></tr></tbody></table>";
		$('#respuesta').html(food).fadeIn('slow');
		enabled = true;
      }
    });
  }
  
  
