'use strict';

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 34.86974, lng: -111.76099}
  });

  var image = {
    url: 'img/icons/icon-map-marker.svg',
    scaledSize: new google.maps.Size(27, 27)
  };
  var beachMarker = new google.maps.Marker({
    position: {lat: 34.86974, lng: -111.76099},
    map: map,
    optimized: false,
    icon: image
  });
}
