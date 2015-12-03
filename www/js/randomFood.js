$(document).ready(function() {
  $('#respuesta').hide();
  $('#randomFood').submit(function(evento) {
    $('#respuesta').hide();
    evento.preventDefault();
    var datos_formulario = $(this).serialize();
    $.ajax({
      url: 'http://manwelanza.esy.es/APPII/conectaBD.php',
      data: datos_formulario,
      type: 'POST',
      dataType: 'json',
      success: function(datos) {
        //$('#resultados').text(JSON.stringify(datos, null, 4));
        //$('#respuesta').text(datos.respuesta[1]["name"] + " " + datos.respuesta[0]["url_image"] + " " + datos.respuesta[0]["place"]).fadeIn('slow');
		var comida = "<table data-role=\"table\" class=\"ui-responsive\">";
		comida += "<thead><tr><th></th><th></th></tr></thead>";
		comida += "<tbody><tr><th><img src=\"" + datos.respuesta[0][0]["url_image"] + "\" height=\"120\" width=\"120\"></th><th><ul><li><b>Name:</b> " + datos.respuesta[0][0]["name"] + "</li>";
		comida += "<li><b>Country: </b>" + datos.respuesta[0][0]["place"] + "</li>";
		comida += "<li><b>Ingredients:</b><ul>";
		for (i=0; i < datos.respuesta[1].length; i++) {
			comida += "<li>" + datos.respuesta[1][i]["name"] + "</li>";
		}
		comida += "</ul></li>";
		comida += "</ul></th></tr></tbody></table>";
		$('#respuesta').html(comida).fadeIn('slow');
      }
    });
  });
});