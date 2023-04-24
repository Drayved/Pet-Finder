import React, { useState, useEffect } from "react";
import PetSearch from "../apis/PetSearch";
import PetCards from "./PetCards";

const components = [
  {
    title: "Checklist for New Adopters",
    text: "Help make the transition as smooth as possible",
    url: "https://www.petfinder.com/adopt-or-get-involved/adopting-pets/how-to/adoption-checklist/",
  },
  {
    title: "COVID-19 Resources",
    text:
      "Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help",
    url: "https://www.petfinder.com/adopt-or-get-involved/adopting-pets/how-to/adopt-a-pet-during-covid-19/",
  },
  {
    title: "Pet Adoption FAQS",
    text: "Get answers to questions you haven't thought of yet.",
    url: "https://www.petfinder.com/adopt-or-get-involved/adopting-pets/how-to/pet-adoption-faqs/",
  },
];

export default function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowArrows(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleNext() {
    setCurrentIndex((currentIndex + 1) % components.length);
  }

  function handlePrev() {
    setCurrentIndex((currentIndex + components.length - 1) % components.length);
  }

  return (
    
    <div>
      <PetSearch />
      <div>
        <PetCards num1={0} num2={6} />
        {showArrows ? (
          <>
          <div className="mid-container ">
            <h2 className="mid-title">Planning to Adopt a Pet?</h2>
            <div className="mid-banner">
              <div className="adoption-info-container">
                <h4 className="mid-titles">{components[currentIndex].title}</h4>
                <p className="mid-text">{components[currentIndex].text}</p>
                
              </div>
              <div className="arrows-container">
                <button className="arrow-button " onClick={handlePrev}>
                  <svg
                    className="h-7 w-10 fill-current text-gray-500 -rotate-90 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M10 0L0 10h3v10h14V10h3L10 0z" />
                  </svg>
                </button>
                <button className="arrow-button" onClick={handleNext}>
                  <svg
                    className="h-7 w-10 fill-current text-gray-500 rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path d="M10 0L0 10h3v10h14V10h3L10 0z" />
                  </svg>
                </button>
              </div>
              <button onClick={() => window.location.href = components[currentIndex].url} className="mid-btns">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="bubbles-container">
          {components.map((_, index) => (
            <div
              key={index}
              className={`bubble w-8 ${index === currentIndex ? 'active-bubble' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        </>
        ) : (
          <div className="row-container">
            <h2 className="mid-title">Planning to Adopt a Pet?</h2>
            <div className="mid-container">
              {components.map((component, index) => (
                <div key={index} className="mid-banner">
                  <h4 className="mid-titles">{component.title}</h4>
                  <p className="mid-text">{component.text}</p>
                  <button onClick={() => window.location.href = component.url} className="mid-btns">
                    LEARN MORE
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        <PetCards num1={5} num2={11} />
      </div>
    </div>
  );

}
