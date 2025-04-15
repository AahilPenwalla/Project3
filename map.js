// js/script.js

// This script runs on all 4 HTML pages
// It adds a toggle button and a video alert on the AI page
// It also loads the Google Map on the map page

document.addEventListener("DOMContentLoaded", () => {
    // Tool 1: Toggle AI content sections (only on AI page)
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
  
    // Tool 2: Show alert when video is clicked (only on AI page)
    const video = document.querySelector("video");
    if (video) {
      video.addEventListener("click", () => {
        alert("You're watching an AI demo!");
      });
    }
  
    // Load Google Maps script only on map.html (if #map is found)
    if (document.getElementById("map")) {
      const script = document.createElement("script");
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCdK8_tTlj5Kt4zu_IMYgqnOI3itIl0NEw&callback=initMap";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  });
  
  // This function sets up the Google Map (only works on map.html)
  function initMap() {
    const location = { lat: 41.8781, lng: -87.6298 }; // Chicago
  
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: location,
    });
  
    // Feature 1: Marker on the map
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "We're here!",
    });
  
    // Feature 2: Info window that shows text when you click the marker
    const infoWindow = new google.maps.InfoWindow({
      content: "<h3>Our Office</h3><p>This is where we're located.</p>",
    });
  
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  
    // Feature 3: Show live traffic on the map
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
  }