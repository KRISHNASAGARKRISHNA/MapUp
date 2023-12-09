document.addEventListener("DOMContentLoaded", function () {
  // Initialize Google Maps
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 }, // Set your initial map center
    zoom: 12,
  });

  // Sample toll data - replace this with your actual toll information
  const tollData = [
    {
      lat: 37.775,
      lng: -122.4194,
      cost: 5.0,
      details: "Electronic toll collection",
    },
    // Add more toll data as needed
  ];

  // Add markers and info windows for toll details
  tollData.forEach((toll) => {
    const marker = new google.maps.Marker({
      position: { lat: toll.lat, lng: toll.lng },
      map: map,
      title: `Toll Cost: $${toll.cost}`,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<div><p>Toll Cost: $${toll.cost}</p><p>${toll.details}</p></div>`,
    });

    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
  });
});
