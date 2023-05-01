import React, { useState } from "react";

export default function PictureCarousel({ photos }) {
  const [index, setIndex] = useState(0);

  const prevIndex = index === 0 ? photos.length - 1 : index - 1;
  const nextIndex = index === photos.length - 1 ? 0 : index + 1;

  const showArrows = photos.length > 1;

  return (
    <div className="relative flex justify-center bg-[#050307] w-[100%] overflow-hidden mt-10">

      {showArrows && (
        <img
          src={photos[prevIndex].medium}
          alt={`Animal ${prevIndex + 1}`}
          className="opacity-30 h-96 w-[30%] prev-image"
        />
      )}

      <div className="relative">
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo.medium}
            alt={`Animal ${i + 1}`}
            style={{ display: i === index ? "inline-block" : "none", margin: 0 }}
            className="h-96 w-[100%] min-w-[33%] current-image"
          />
        ))}

        <div className="flex justify-center absolute bottom-2 right-0 left-0 ">
          {photos.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full mx-1 ${i === index ? "bg-white" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>

      {showArrows && (
        <img
          src={photos[nextIndex].medium}
          alt={`Animal ${nextIndex + 1}`}
          className="opacity-30 h-96 w-[30%] next-image"
        />
      )}

      {showArrows && (
        <button
          onClick={() => setIndex(prevIndex)}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 arrow-btns"
        >
          <svg
            className="h-10 w-10 fill-current text-gray-500 -rotate-90 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 0L0 10h3v10h14V10h3L10 0z" />
          </svg>
        </button>
      )}

      {showArrows && (
        <button
          onClick={() => setIndex(nextIndex)}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 arrow-btns"
        >
          <svg
            className="h-10 w-10 fill-current text-gray-500 rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 0L0 10h3v10h14V10h3L10 0z" />
          </svg>
        </button>
      )}
    </div>
  );
}
