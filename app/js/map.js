function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(37.673833,-113.067840),
		zoom: 15
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	drawMarkers(map);
}

google.maps.event.addDomListener(window, "load", initialize);

function drawMarkers(map) {

	var nMarker = new google.maps.Marker({
		position: new google.maps.LatLng(37.675956,-113.065869),
		map: map,
		title: "Nana's Guest House"
	});

	var aMarker = new google.maps.Marker({
		position: new google.maps.LatLng(37.670796206237654, -113.0664463900153),
		map: map,
		title: "Annie's Cottage"
	});

	var whMarker = new google.maps.Marker({
		position: new google.maps.LatLng(37.67058177663436, -113.06645443658691),
		map: map,
		title: "White House"
	});

	var cMarker = new google.maps.Marker({
		position: new google.maps.LatLng(37.6709867509008, -113.06646851815312),
		map: map,
		title: "Cooper Home"
	});

}