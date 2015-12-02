$(document).ready(function() {
  $('#respuesta').hide();
  $('#randomFood').submit(function(evento) {
    $('#respuesta').hide();
    evento.preventDefault();
    var datos_formulario = $(this).serialize();
    $.ajax({
      url: 'http://manwelanza.esy.es/APPII/conectaBD.php',
      data: {
		  name : "falso",
		  telefono: "555555555"
	  },
      type: 'POST',
      dataType: 'json',
      success: function(datos) {
        $('#resultados').text(JSON.stringify(datos, null, 4));
        $('#respuesta').text(datos.respuesta).fadeIn('slow');
      }
    });
  });
});