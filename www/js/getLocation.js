var place;

function onSuccessGeolocation (position) {
	var latidude = position.coords.latitude;
	var longitude = position.coords.longitude;
	alert("Chivato");
	var address = new google.maps.LatLng(latitude, longitude);
	alert("Chivato3");
	var coords = new google.maps.places.Autocomplete(address);
	cords.setTypes(['geocode']);
	google.maps.event.addListener(coords, 'place_changed', function () {
		place = coords.getPlace();
		if (!place.geometry) {
			alert("Chivato2");
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