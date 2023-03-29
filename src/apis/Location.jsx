import React, { useState } from "react";

export default function Location({ onLocationReceived }) {
    
  const [showPopup, setShowPopup] = useState(true);

  const handleLocation = () => {
    console.log("handleLocation function called"); // Add this console.log statement
  
    if (navigator.geolocation) {
      console.log("navigator.geolocation supported"); // Add this console.log statement
  
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("getCurrentPosition success"); // Add this console.log statement
          const { latitude, longitude } = position.coords;
          onLocationReceived({ latitude, longitude });
          setShowPopup(false);
        },
        () => {
          console.log("getCurrentPosition error"); // Add this console.log statement
          alert("Could not get location, please try again.");
        }
      );
    } else {
      console.log("navigator.geolocation not supported"); // Add this console.log statement
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
