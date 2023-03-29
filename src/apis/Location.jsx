import React, { useEffect } from "react";

export default function Location({ onLocationReceived }) {
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onLocationReceived({ latitude, longitude });
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