function initMap() {
	const myLatLng = { lat: 37.673833, lng: -113.067840 };
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 15,
	  center: myLatLng,
	});
  
	new google.maps.Marker({
	  position: myLatLng,
	  map,
	  title: "Hello World!",
	});
  }

}