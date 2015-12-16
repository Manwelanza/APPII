var place;

function onSuccessGeolocation (position) {
	var latidude = position.coords.latitude;
	var longitude = position.coords.longitude;
	// TODO: Problema con esta linea, mirar
	var address = new google.maps.LatLng(latitude, longitude);
	var coords = new google.maps.places.Autocomplete(address);
	cords.setTypes(['geocode']);
	google.maps.event.addListener(coords, 'place_changed', function () {
		place = coords.getPlace();
		if (!place.geometry) {
			return ;
		}
		var address = '';
		if (place.address_components) {
			address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
		}
	});
	alert (place);
}

 function onErrorGeolocation () {
	alert("Error!");
}