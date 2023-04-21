import React, { useContext, useEffect } from "react";
import PetSearch from "../apis/PetSearch";
import PetCards from "../components/PetCards";

export default function Birds(){

    return(
      <>
        <PetSearch type="rabbit" />
        <PetCards num1={0} num2={20}/>
      </>

    )
}