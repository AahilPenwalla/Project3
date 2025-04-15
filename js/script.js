// js/map.js

function initMap() {
  const location = { lat: 41.8781, lng: -87.6298 }; // Chicago coordinates

  // Base map setup
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });

  // Feature 1: Marker
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "We're here!",
  });

  // Feature 2: Info window
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Our Office</h3><p>This is where we're located.</p>",
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

  // Feature 3: Traffic layer
  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}
