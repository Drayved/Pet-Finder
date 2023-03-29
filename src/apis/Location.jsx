import React, { useState } from "react";

export default function Location({ onLocationReceived }) {
  const [showPopup, setShowPopup] = useState(true);

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onLocationReceived({ latitude, longitude });
          setShowPopup(false);
        },
        () => alert("Could not get location, please try again.")
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      {showPopup && (
        <div className="location-popup">
          <h2>Allow access to your location</h2>
          <p>
            We use your location to find adoptable pets near you. Please allow
            us to access your location.
          </p>
          <button onClick={handleLocation}>Allow</button>
        </div>
      )}
    </>
  );
}
