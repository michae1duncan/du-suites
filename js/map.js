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

	var whImage = {
		url: 'images/whMarker.png',
		size: new google.maps.Size(39, 24),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(0, 12),
	};

	var aImage = {
		url: 'images/aMarker.png',
		size: new google.maps.Size(39, 24),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(39, 12),
	};

	var whbImage = {
		url: 'images/whbMarker.png',
		size: new google.maps.Size(39, 24),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(39, 12),
	};

	var nMarker = new google.maps.Marker({
		icon: "images/nMarker.png",
		position: new google.maps.LatLng(37.675956,-113.065869),
		map: map,
		title: "Nana's Guest House"
	});

	var aMarker = new google.maps.Marker({
		icon: "images/aMarker.png",
		position: new google.maps.LatLng(37.670806,-113.066397),
		map: map,
		title: "Annie's Cottage"
	});

	var whMarker = new google.maps.Marker({
		icon: whImage,
		position: new google.maps.LatLng(37.670591,-113.066474),
		map: map,
		title: "White House"
	});

	var whbMarker = new google.maps.Marker({
		icon: whbImage,
		position: new google.maps.LatLng(37.670652,-113.066495),
		map: map,
		title: "White House Basement"
	});

}