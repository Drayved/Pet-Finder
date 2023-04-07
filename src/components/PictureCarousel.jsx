import React, { useState } from "react";

export default function PictureCarousel ({ photos }) {
    const [index, setIndex] = useState(0);

  const prevIndex = index === 0 ? photos.length - 1 : index - 1;
  const nextIndex = index === photos.length - 1 ? 0 : index + 1;

  return (
    <div className="relative flex justify-center">
      {photos.map((photo, i) => (
        <img
          key={i}
          src={photo.medium}
          alt={`Animal ${i + 1}`}
          style={{ display: i === index ? "block" : "none" }}
          className="h-96 w-72"
        />
      ))}

      <img
        src={photos[prevIndex].medium}
        alt={`Animal ${prevIndex + 1}`}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 opacity-30 h-96 w-72"
      />

      <img
        src={photos[nextIndex].medium}
        alt={`Animal ${nextIndex + 1}`}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 opacity-30 h-96 w-72"
      />

      <button
        onClick={() => setIndex(prevIndex)}
        className="absolute top-1/2 left-2 transform -translate-y-1/2"
      >
        <svg
          className="h-10 w-10 fill-current text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 0L0 10h3v10h14V10h3L10 0z" />
        </svg>
      </button>

      <button
        onClick={() => setIndex(nextIndex)}
        className="absolute top-1/2 right-2 transform -translate-y-1/2"
      >
        <svg
          className="h-10 w-10 fill-current text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 0L0 10h3v10h14V10h3L10 0z" />
        </svg>
      </button>
    </div>
  );
  };
  



