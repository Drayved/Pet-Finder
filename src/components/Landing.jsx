import React from "react";
import PetSearch from "../apis/PetSearch";
import PetCards from "./PetCards";
export default function Landing() {

  
  
  return (
    <div >
      <PetSearch />
      <div>
        <PetCards num1={0} num2={6} />
        <div className="mid-container">
          <h2 className="mid-title">
              Planning to Adopt a Pet?
            </h2>
          <div className="mid-banner">

            <div className="adoption-info-container">
              <h4 className="mid-titles">Checklist for New Adopters</h4>
              <p className="mid-text">Help make the transition as smooth as possible</p>
              <button onClick={() => window.location.href="https://www.petfinder.com/adopt-or-get-involved/adopting-pets/how-to/adoption-checklist/"} className="mid-btns">Learn More</button>
            </div>
            <div className="covid-container">
              <h4 className="mid-titles">COVID-19 Resources</h4>
              <p className="mid-text">
                Get the latest on adoption processes, learn how local shelters and rescue groups are 
                adapting and find out what you can do to help 
              </p>
              <button onClick={() => window.location.href="https://www.petfinder.com/adopt-or-get-involved/adopting-pets/how-to/adopt-a-pet-during-covid-19/"} className="mid-btns">Learn More</button>
            </div>
            <div>
              <h4 className="mid-titles">Pet Adoption FAQS</h4>
              <p className="mid-text">Get answers to questions you haven't thought of yet.</p>
              <button onClick={() => window.location.href="https://www.petfinder.com/adopt-or-get-involved/adopting-pets/how-to/pet-adoption-faqs/"} className="mid-btns">Learn more</button>
            </div>
          </div>
        </div>
        <PetCards num1={5} num2={11}  />
      </div>
    </div>
  );
}

// Code chatgpt gave you to have the mid banner only display 1 div at a time, when on smaller screens, buttons to go to next div don't work.
// export default function Landing() {
//   const [showDiv, setShowDiv] = useState(0);

//   const handlePrevClick = () => {
//     setShowDiv(showDiv - 1);
//   };

//   const handleNextClick = () => {
//     setShowDiv(showDiv + 1);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setShowDiv(0);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div>
//       <PetSearch />
//       <div>
//         <PetCards num1={0} num2={6} />
//         <div className="mid-container">
//           <h2 className="mid-title">Planning to Adopt a Pet?</h2>
//           <div className="mid-banner">
//             {showDiv === 0 && (
//               <div className="adoption-info-container">
//                 <h4 className="mid-titles">Checklist for New Adopters</h4>
//                 <p className="mid-text">
//                   Help make the transition as smooth as possible
//                 </p>
//                 <button
//                   onClick={() =>
//                     (window.location.href =
//                       "https://www.petfinder.com/adopt-or-get-involved/adopting-pets/how-to/adoption-checklist/")
//                   }
//                   className="mid-btns"
//                 >
//                   Learn More
//                 </button>
//               </div>
//             )}
//             {showDiv === 1 && (
//               <div className="covid-container">
//                 <h4 className="mid-titles">COVID-19 Resources</h4>
//                 <p className="mid-text">
//                   Get the latest on adoption processes, learn how local shelters
//                   and rescue groups are adapting and find out what you can do to
//                   help
//                 </p>
//                 <button
//                   onClick={() =>
//                     (window.location.href =
//                       "https://www.petfinder.com/adopt-or-get-involved/adopting-pets/how-to/adopt-a-pet-during-covid-19/")
//                   }
//                   className="mid-btns"
//                 >
//                   Learn More
//                 </button>
//               </div>
//             )}
//             {showDiv === 2 && (
//               <div>
//                 <h4 className="mid-titles">Pet Adoption FAQS</h4>
//                 <p className="mid-text">
//                   Get answers to questions you haven't thought of yet.
//                 </p>
//                 <button
//                   onClick={() =>
//                     (window.location.href =
//                       "https://www.petfinder.com/adopt-or-get-involved/adopting-pets/how-to/pet-adoption-faqs/")
//                   }
//                   className="mid-btns"
//                 >
//                   Learn more
//                 </button>
//               </div>
//             )}
//             {window.innerWidth < 768 && (
//               <div className="arrow-buttons-container">
//                 <button
//                   className="arrow-button"
//                   onClick={handlePrevClick}
//                   disabled={showDiv === 0}
//                 >
//                   &lt;
//                 </button>
//                 <button
//                   className="arrow-button"
//                   onClick={handleNextClick}
//                   disabled={showDiv === 2}
//                 >
//                   &gt;
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//         <PetCards num1={5} num2={11} />
//       </div>
//     </div>
//   );
// }