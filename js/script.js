// js/script.js

// This script runs on all 4 HTML pages
// Tool 1: Toggle AI Content (on artificialintelligence.html)
// Tool 2: Video Alert on click (on artificialintelligence.html)
// Tool 3: Load and initialize Google Map (on map.html)

document.addEventListener("DOMContentLoaded", () => {
  // TOOL 1: Toggle AI content sections
  const aiSections = document.querySelectorAll(".ai-container");

  if (aiSections.length > 0) {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle AI Content";
    toggleBtn.style.margin = "10px";
    toggleBtn.style.padding = "10px";
    toggleBtn.style.display = "block";
    toggleBtn.style.marginBottom = "20px";
    document.body.insertBefore(toggleBtn, aiSections[0]);

    toggleBtn.addEventListener("click", () => {
      aiSections.forEach(section => {
        section.style.display = section.style.display === "none" ? "block" : "none";
      });
    });
  }

  // TOOL 2: Video alert
  const video = document.querySelector("video");
  if (video) {
    video.addEventListener("click", () => {
      alert("You're watching an AI demo!");
    });
  }

  // TOOL 3: Load Google Map script only if #map exists (on map.html)
  if (document.getElementById("map")) {
    const gmapScript = document.createElement("script");
    gmapScript.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCdK8_tTlj5Kt4zu_IMYgqnOI3itIl0NEw&callback=initMap";
    gmapScript.async = true;
    gmapScript.defer = true;
    document.body.appendChild(gmapScript);
  }
});

// GLOBAL: Google requires initMap to be global
function initMap() {
  const location = { lat: 41.8781, lng: -87.6298 }; // Chicago

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

  // Feature 3: Traffic Layer
  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}
