function notifyEmergencyContacts(hr, spo2) {
  // Alert emergency contacts
  contacts.forEach(contact => {
    window.location.href = `tel:${contact.phone}`;
    // Optional SMS sending logic here (backend required)
  });

  // Open Google Maps to show nearby hospitals
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const mapsUrl = `https://www.google.com/maps/search/hospitals/@${lat},${lng},15z`;
      window.open(mapsUrl, "_blank");
    }, () => {
      // Fallback if location permission is denied
      window.open("https://www.google.com/maps/search/nearby+hospitals", "_blank");
    });
  } else {
    window.open("https://www.google.com/maps/search/nearby+hospitals", "_blank");
  }
}
