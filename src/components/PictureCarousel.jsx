import React, { useState } from "react";

export default function PictureCarousel({ photos }) {
  const [index, setIndex] = useState(0);

  const prevIndex = index === 0 ? photos.length - 1 : index - 1;
  const nextIndex = index === photos.length - 1 ? 0 : index + 1;

  const showArrows = photos.length > 1;

  return (
    <div className="slideshow-container" >

      {showArrows && (
        <img
          src={photos[prevIndex].medium}
          alt={`Animal ${prevIndex + 1}`}
          className="left-pic"
        />
      )}

      <div className="relative">
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo.medium}
            alt={`Animal ${i + 1}`}
            style={{ display: i === index ? "inline-block" : "none", margin: 0 }}
            className="current-pic "
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
          className="right-pic"
        />
      )}

      {showArrows && (
        <button
          onClick={() => setIndex(prevIndex)}
          className="left-arrow arrow-btns"
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
          className="right-arrow arrow-btns"
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
