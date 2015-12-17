var country = "World";

function onSuccessGeolocation (position) {
	$('#resultados').text("LOADING!!!!");
	$('#resultados').show();
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	var latlng = new google.maps.LatLng(latitude, longitude);
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({"latLng": latlng}, function(results, status)
	{
		if (status == google.maps.GeocoderStatus.OK)
		{
			if (results[0])
			{
				country = results[0].address_components[5].long_name;
			}
			else
			{
				country = "World";
			}
		}
		else
		{
			country = "World";
		}
	$('#resultados').hide();
	ajaxCall();
	});
}

 function onErrorGeolocation () {
	alert("ERROR: GPS NOT FOUND!");
}