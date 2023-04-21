import React, { useEffect } from "react";

export default function Location({ onLocationReceived}) {
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onLocationReceived({  lat: latitude, lng: longitude});
          console.log("Location received:", { latitude, longitude });
        },
        () => {
          alert("Could not get location, please try again.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    
  }, []);

  return null;
}