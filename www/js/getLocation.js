var place;

function onSuccessGeolocation (position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var address = new google.maps.LatLng(latitude, longitude);
	/*var address = [latitude, longitude];
	//{lat: -34, lng: 151} --> latitud y longitud google API
	alert("Chivato3");
	var autocomplete = new google.maps.places.Autocomplete(address);
	alert("Chivato4");
	autocomplete.setTypes(['geocode']);
	alert (autocomplete);
	//google.maps.event.addListener(autocomplete, 'place_changed', function () {
		alert ("chivato5");
		var aux = autocomplete.getPlace();
		alert ("chivato6");
		if (!aux.geometry) {
			alert("Chivato2");
			return ;
		}
		alert ("chivato7");
		place = '';
		if (place.address_components) {
			alert ("chivato8");
			place = [
                (aux.address_components[0] && aux.address_components[0].short_name || ''),
                (aux.address_components[1] && aux.address_components[1].short_name || ''),
                (aux.address_components[2] && aux.address_components[2].short_name || '')
                ].join(' ');
		}
	//});
	alert ("chivato9");*/
	alert ("a");
	var aux2 = new google.maps.LatLngBounds (address);
	var aux = new google.maps.places.SearchBox ();
	alert ("b");
	aux.setBounds (aux2);
	alert (aux.getBounds());
	alert (aux.getPlaces());
	alert (place);
}

 function onErrorGeolocation () {
	alert("Error!");
}