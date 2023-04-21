import React from "react";
import PetCards from "../components/PetCards";
import PetSearch from "../apis/PetSearch";
export default function Horses() {


  return (
    <>
      <PetSearch type="horse"/>
      <PetCards num1={0} num2={20} />
    </>

  );
}

