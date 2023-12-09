document.addEventListener("DOMContentLoaded", function () {
  // Replace with your actual TollGuru API endpoint and parameters
  const apiUrl = "https://api.tollguru.com/v1/calc/route";
  const apiKey = "YOUR_TOLLGURU_API_KEY";
  const startLocation = "37.7749,-122.4194"; // Example: San Francisco, CA
  const endLocation = "34.0522,-118.2437"; // Example: Los Angeles, CA

  // Make a request to the TollGuru API
  fetch(`${apiUrl}?from=${startLocation}&to=${endLocation}&key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      // Extract the encoded polyline from the TollGuru API response
      const encodedPolyline = data.trips[0].trip.legs[0].shape;

      // Decode the polyline
      const decodedPath =
        google.maps.geometry.encoding.decodePath(encodedPolyline);

      // Initialize Google Maps
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 8,
      });

      // Create a Polyline and set its path
      const routePolyline = new google.maps.Polyline({
        path: decodedPath,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      // Set the Polyline on the map
      routePolyline.setMap(map);
    })
    .catch((error) => console.error("Error fetching data:", error));
});
